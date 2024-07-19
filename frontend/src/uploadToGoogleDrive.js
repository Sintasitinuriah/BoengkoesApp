const fs = require('fs');
const { google } = require('googleapis');
const path = require('path');
const readline = require('readline');

// Jika Anda menggunakan environment file (.env) untuk menyimpan path ke credentials.json
// const dotenv = require('dotenv');
// dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), uploadFile);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Upload file to Google Drive
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function uploadFile(auth) {
  const drive = google.drive({ version: 'v3', auth });
  const filePath = path.join(__dirname, 'ringkasan_belanja.pdf');
  const fileMetadata = {
    'name': 'ringkasan_belanja.pdf',
    'parents': ['your-folder-id'] // Optional: specify folder ID to upload the file into
  };
  const media = {
    mimeType: 'application/pdf',
    body: fs.createReadStream(filePath)
  };
  drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  }, (err, file) => {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('File Id:', file.data.id);
      makeFilePublic(file.data.id, auth);
    }
  });
}

/**
 * Make file public
 * @param {string} fileId File ID to make public.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function makeFilePublic(fileId, auth) {
  const drive = google.drive({ version: 'v3', auth });
  drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  }, (err, res) => {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('File is now public:', res);
      generatePublicUrl(fileId, auth);
    }
  });
}

/**
 * Generate public URL for the file
 * @param {string} fileId File ID to generate public URL.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function generatePublicUrl(fileId, auth) {
  const drive = google.drive({ version: 'v3', auth });
  drive.files.get({
    fileId: fileId,
    fields: 'webViewLink, webContentLink'
  }, (err, file) => {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('Public URL:', file.data.webViewLink);
      // Now you can use the file.data.webViewLink to share the file via WhatsApp or any other platform.
    }
  });
}
