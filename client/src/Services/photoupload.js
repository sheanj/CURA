import api from "./api-helper";

export const handlePhotoUpload = async (e) => {
    e.preventDefault();
    await api.post("/photos");
}

export const dropHandler = (e) => {

}

export const processFile = (e) => {
    const file = e.target.files[0];
    function getBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return reader.result
    }
    getBase64(file);
}

// export const handleClickRemove = (e) =>{
//   PhotoUpload.classList.remove("hasFile");
//   setTimeout(() => {
//     img.src = "";
//   }, 250);
//   input.type = "text";
//   input.type = "file";
// }
