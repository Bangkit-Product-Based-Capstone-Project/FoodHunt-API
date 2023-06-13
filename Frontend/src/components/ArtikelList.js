import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const ArtikelList = () => {
  const [Artikel, setArtikel] = useState([]);

  useEffect(() => {
    getArtikel();
  }, []);

  const getArtikel = async () => {
    const response = await axios.get("http://localhost:5000/artikel");
    setArtikel(response.data);
  };

  const deleteArtikel = async (ArtikelId) => {

    try {

      await axios.delete(`http://localhost:5000/artikel/${ArtikelId}`);
      getArtikel();
      
    } catch (error) {

      console.log(error);
      
    }
  }

  return (
    <div className="container mt-5">
      <Link to="/add" className="button is succes">Add New</Link>
      <div className="columns is-multiline">
        {Artikel.map((Artikel) => (
          <div className="column is-one-quarter" key={Artikel.id}>
            <div className="card">
            <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{Artikel.Judul}</p>
                  </div>
                </div>
              </div>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={Artikel.url} alt="image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-6">{Artikel.Body}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
              
                <Link to={`edit/${Artikel.id}`} className="card-footer-item">Edit</Link>
                <a onClick={()=> deleteArtikel(Artikel.id)} className="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtikelList;
