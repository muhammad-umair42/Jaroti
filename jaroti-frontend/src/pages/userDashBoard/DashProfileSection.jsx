/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ProfileImg from '../../assets/profiledummy.jpg';
import { makeRequest } from './../../Api/axios';
const DashProfileSection = ({ user, ApiUser = false }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  //Will act as input is clicked
  const handleClickProfile = () => {
    fileInputRef.current.click();
  };

  const handleProfileChange = event => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profilePicture', file);

    setSelectedImage(formData);
  };

  const handleProfileUpdate = async e => {
    e.preventDefault();

    if (!selectedImage) {
      toast.error('Please select Image');
      return;
    }

    const reqParams = {
      method: 'post',
      url: `/users/user/updateprofileimage/${user._id}`,
      dispatch,
      reqData: selectedImage,
      reqType: `${ApiUser ? 'updateApiUserProfile' : 'updateProfilePicture'}`,
    };

    const { success } = toast.promise(makeRequest(reqParams), {
      pending: 'Uploading Profile Picture 🔄',
      success: 'Uploaded Successfully 👌',
      error: 'Oop! Try Again Later 🤯',
    });
    if (success) {
      setSelectedImage(null);
      return null;
    }
    if (ApiUser && success) {
      window.location.reload();
    }

    return;
  };

  return (
    <div className="w-full md:w-max flex flex-col justify-center items-center py-8 px-10 gap-5 shadow-2xl rounded-lg">
      <img
        src={user?.profileImg ? `${user?.profileImg}` : ProfileImg}
        className="w-[15vw] h-[15vw] rounded-full border-4 border-primary-500 object-cover"
        alt=""
      />
      <button
        className=" hover:bg-red-700 hover:text-white transition duration-300 ease px-3 py-2 border border-slate-400 rounded-lg bg-white font-bold text-xs uppercase"
        onClick={handleClickProfile}
      >
        Upload New
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleProfileChange}
      />
      <button
        className=" hover:bg-white hover:text-black transition text-white duration-300 ease px-3 py-2 border border-slate-400 rounded-lg bg-red-700 font-bold text-xs uppercase"
        onClick={handleProfileUpdate}
      >
        Upload
      </button>
    </div>
  );
};

export default DashProfileSection;
