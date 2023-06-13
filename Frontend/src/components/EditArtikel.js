import React, {useState, useEffect} from 'react'
import axios  from "axios";
import {useParams, useNavigate } from 'react-router-dom';

const EditArtikel = () => {
    const [Judul, setJudul] = useState("");
    const [Body, setBody] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    getArtikelById(); 

},[]);


    const getArtikelById = async () => {
        const response =  await axios.get(`http://localhost:5000/artikel/${id}`);
        setJudul(response.data.Judul);
        setFile(response.data.image);
        setPreview(response.data.url);
        setBody(response.data.Body);



    }
    


    const loadimage = (e) => { 
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));



    };


    const updateArtikel = async(e) =>{

        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("Judul", Judul);
        formData.append("Body", Body);

        try {
            await axios.patch(`http://localhost:5000/artikel/${id}`, formData, {
                headers:{
                    "Content-Type":"multipart/form-data"
                }

            });
            navigate("/")

        } catch (error) {

            console.log(error)
            
        }
      


    }
  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <form onSubmit={updateArtikel}>
                <div className="field">
                    <label className="label"> Judul Artikel</label>
                    <div className="control">
                        <input type="text" className="input" value={Judul} 
                        onChange={(e) => setJudul(e.target.value)} 
                        placeholder='Title Artikel'
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label"> Body Artikel</label>
                    <div className="control">
                        <textarea type="textarea" className="Body" value={Body} 
                        onChange={(e) => setBody(e.target.value)} 
                        placeholder='Body Artikel'
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label"> Image </label>
                    <div className="control">
                        <div className="file">
                            <label className="file-label">
                                <input type="file" className='file-input' onChange={loadimage} />
                                <span className='file-cta'>
                                <span className='file-label'>Choose a file....</span>
                                </span>
                            </label>
                        </div>
                        
                    </div>
                </div>
               
                {preview ? (
                    <figure className='image is-128x128'>

                        <img src={preview} alt="Preview Image"/>

                    </figure>

                ):(
                    ""
                )}
                <div className="field">
                    <div className="control">
                        <button type='submit'  className="button is-success">
                            Update
                        </button>
                    </div>
                </div>


            </form>
        </div>
    </div>
  )
}

export default EditArtikel
