import api from "./api-helper";

export const handlePhotoUpload = async (e) => {
    e.preventDefault();
    await api.post("/photos");
}

export const dropHandler = (e) => {

}

export const processFile = (e) => {
    const file = e.target.file;
    function getBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return reader.result
    }
    getBase64(file);
}

