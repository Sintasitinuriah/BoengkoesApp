import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toastr from "toastr";
import "../profilepage.css";
import NavbarSearching from "../Components/NavbarSearching";
import ButtonSimpan from "../Components/button-simpan";
import RadioButton from "../Components/RadioButton";
import FotoProfil from "../images/foto-profil.png";
import FormNamaLengkap from "../Components/FormNamaLengkap";
import FormTanggalLahir from "../Components/FormTanggalLahir";
import Alamat from "../Components/Alamat";
import FormNomorHp from "../Components/FormNomorHp";
import FormEmailProfil from "../Components/FormEmailProfil";
import Footer from "../Components/Footer";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [nama, setNama] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const [tanggal, setTanggal] = useState(null);
  const [nomor, setNomor] = useState(null);
  const [alamat, setAlamat] = useState(null);
  console.log("ID", userId);
  console.log("tanggal : ", tanggal);

  const handleLogout = (event) => {
    event.preventDefault(); // Mencegah perilaku default <a> tag

    alertify.confirm(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      () => {
        localStorage.removeItem("authToken");
        toastr.success("Logout berhasil");
        navigate("/Homepage"); // Redirect ke halaman login
      },
      () => {
        toastr.info("Logout dibatalkan");
      }
    );
  };

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const token = localStorage.getItem("token");
  //     console.log("Token retrieved:", token); // Debug: Print token

  //     if (!token) {
  //       setError("Token not found");
  //       return;
  //     }

  //     try {
  //       const response = await axios.get(
  //         `https://boengkosapps-039320043b7f.herokuapp.com/api/user/${userId}`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           withCredentials: true,
  //         }
  //       );
  //       console.log("User data:", response.data); // Debug: Print user data
  //       setProfileData(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       if (error.response) {
  //         if (error.response.status === 401) {
  //           setError("Unauthorized: Invalid token or session expired");
  //         } else {
  //           setError(
  //             `Error: ${error.response.status} - ${
  //               error.response.data.message || error.message
  //             }`
  //           );
  //         }
  //       } else if (error.request) {
  //         setError("Error: No response received from server");
  //       } else {
  //         setError(`Error: ${error.message}`);
  //       }
  //     }
  //   };

  //   fetchProfile(); // Call the async function
  // }, [userId]);

  const getProfile = async () => {
    console.log("getDataStore");
    try {
      const response = await axios.get(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/user/${userId}`
      );
      // console.log("response", response.data); // Periksa data di sini
      setProfileData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        alert(error?.message);
        return;
      }
      alert(error?.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  const updateProfile = async () => {
    const body = {
      name: nama,
      birtdhDate: tanggal,
      phoneNumber: nomor,
      address: alamat,
    };

    try {
      const response = await axios.put(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/users/${userId}`,
        body
      );

      console.log("Profile updated:", response.data);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  const handleSimpan = () => {
    updateProfile();
    window.location.reload();
  };

  console.log("Profile data:", profileData);

  useEffect(() => {
    if (profileData) {
      if (profileData.data.rule === 1) {
        navigate(`/profilepageseller/${userId}`);
      }
    }
  }, [profileData, navigate]);

  const handleRoleChange = (event) => {
    setProfileData({
      ...profileData,
      data: {
        ...profileData.data,
        rule: parseInt(event.target.value, 10),
      },
    });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  // const handleSaveClick = async () => {
  //   // const token = localStorage.getItem('token');
  //   try {
  //     await axios.put(`https://boengkosapps-039320043b7f.herokuapp.com/api/user/${userId}`, profileData.data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // withCredentials: true
  //     });

  //     toastr.success('Profile updated successfully');
  //     setIsEditMode(false);
  //   } catch (error) {
  //     console.error('Error updating profile:', error);
  //     toastr.error('Failed to update profile');
  //   }
  // };

  const handleSaveClick = () => {
    console.log("Profile data to be sent:", profileData);
    axios
      .put(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/user/${userId}`,
        profileData.data
      )
      .then((response) => {
        console.log("Response data:", response.data);
        setProfileData(response.data);
        setIsEditMode(false);
        toastr.success("Profile updated successfully");
      })
      .catch((err) => {
        setError("Error updating profile");
        console.error("Error updating profile:", err);
        toastr.error("Failed to update profile");
      });
  };
  // console.log("nama", nama);
  return (
    <div className="profile-page">
      <NavbarSearching />
      <div className="container-besar-profil">
        <div className="note-pusat-dan-role">
          <div className="container-pusat-akun">
            <h3 className="label-pusat-akun">Pusat Akun</h3>
            <p className="catatan-pusat-akun">
              Semua perubahan yang dibuat akan mengubah data pengguna. Oleh
              karena itu, teliti kembali setiap perubahan yang Anda lakukan
            </p>
          </div>
          <div className="container-role">
            <h3 className="label-role">Role</h3>
            {profileData && (
              <RadioButton
                role={profileData.data.rule}
                handleChange={handleRoleChange}
                disabled={!isEditMode}
              />
            )}
          </div>
        </div>
        <div className="container-kanan-profil">
          <h2 className="label-profil">Profil</h2>
          <div className="container-foto-profil">
            {profileData && (
              <img
                className="foto-profil"
                src={profileData.data.image}
                alt="Foto Profil"
              />
            )}
          </div>
          <div className="container-nama-alamat">
            <h2 className="label-pemilik-akun">Info Pemilik Akun</h2>
            {profileData && (
              <>
                {/* <FormNamaLengkap
                  name={profileData.data.name}
                  disabled={!isEditMode}
                  // onChange={(e) => setNama(e.target.value)}
                /> */}

                <form className="container-profil-nama">
                  <p className="hint-nama-lengkap">Nama lengkap</p>
                  <div className="textfield-nama-lengkap">
                    <input
                      type="text"
                      value={nama}
                      placeholder={profileData?.data?.name}
                      onChange={(e) => setNama(e?.target?.value)}
                    />
                  </div>
                </form>
                <form className="container-profil-tanggal-lahir">
                  <p className="hint-tanggal-lahir">Tanggal Lahir</p>
                  <div className="textfield-tanggal-lahir">
                    <input
                      type="date"
                      // placeholder="dsdsd"
                      value={profileData?.data?.birthDate}
                      onChange={(e) => setTanggal(e.target.value)}
                    />
                  </div>
                </form>
                <form className="container-profil-alamat">
                  <p className="hint-alamat">Alamat</p>
                  <div className="textarea-alamat">
                    <textarea
                      value={alamat}
                      placeholder={
                        profileData?.data?.address === null
                          ? "Masukan Alamat"
                          : profileData?.data?.address
                      }
                      onChange={(e) => setAlamat(e.target.value)}
                      // disabled={disabled}
                    ></textarea>
                  </div>
                </form>

                {/* <FormTanggalLahir dateOfBirth={profileData.data.birthDate} /> */}
                {/* <Alamat address={profileData.data.address} /> */}
              </>
            )}
          </div>
          <div className="container-hp-email">
            <h2 className="label-hp-email">Info Pemilik Akun</h2>
            {profileData && (
              <>
                <form className="container-profil-nomor-hp">
                  <p className="hint-nomor-hp">Nomor Hp</p>
                  <div className="textfield-nomor-hp">
                    <input
                      type="text"
                      placeholder={
                        profileData?.data?.phoneNumber === null
                          ? "Masukan Nomor Hp"
                          : profileData?.data?.phoneNumber
                      }
                      value={nomor}
                      onChange={(e) => setNomor(e.target.value)}
                    />
                  </div>
                </form>
                {/* <FormNomorHp phoneNumber={profileData.data.phoneNumber} /> */}
                <FormEmailProfil
                  email={profileData.data.email}
                  disabled={!isEditMode}
                />
              </>
            )}
            <a href="/Homepage" className="keluar-akun" onClick={handleLogout}>
              Keluar Akun
            </a>
          </div>
          <div className="button-simpan">
            <button type="button" onClick={handleSimpan}>
              Simpan
            </button>
          </div>
          {/* {isEditMode ? (
            <ButtonSimpan text={"Simpan"} onClick={handleSaveClick}>
              Simpan
            </ButtonSimpan>
          ) : (
            <ButtonSimpan text={"Ubah"} onClick={handleEditClick} />
          )} */}
        </div>
      </div>
      <Footer />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProfilePage;
