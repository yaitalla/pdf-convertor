import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { container, form, btn, input } from './style';

const Ftp = () => {

      // file: '',
      // token: window.localStorage.token,
      // message: 'upload a file from your computer'
  
  const [firstname, setFirstname] = useState('');
  const [XP1, setXP1] = useState('');
  const [currentSituation, setCurrentSituation] = useState('');
  const [jobTitle, setJobTitle] = useState('')


  const getFiles = () => {
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
    axios.get("http://localhost:4000/api/ftp/getUploadedFiles", {headers}).then((res) => {
      console.log(res.data.message);
  }).catch((err) => {
      console.log('YASLOG', err)
    });
  }

  const onChange = (event) => {
    setFileToUpload(event.target.files[0])
  }

  const upload = (event) => {
    if (fileToUpload == null) {
      return
    }
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
    const data = new FormData()
    data.append('file', fileToUpload, fileToUpload.name)
    event.preventDefault();
    axios.post("http://localhost:4000/api/ftp/upload", data, {headers}).then((res) => {
      console.log(res.data.message)
		}).catch((err) => {
			console.log('YASLOG', err)
		});
  }

  const editName = (event) => {
    setFirstname(event.target.value)
  }
  const editCurrentSituation = (event) => {
    setCurrentSituation(event.target.value)
  }
  const editJobTitle = (event) => {
    setJobTitle(event.target.value)
  }
  const editXP1 = (event) => {
    setXP1(event.target.value)
  }
  const alamanoPdf = () => {
    const data = {
      name: firstname,
      jobTitle: jobTitle,
      currentSituation: currentSituation,
      XP1: XP1
    }
    console.log(data)
    axios.post("http://localhost:4000/api/ftp/alamanoPdf", data).then((res) => {
      console.log('retrouvez ce fichier dans ./server/');
    }).catch((err) => {
      console.log('YASLOG', err)
    })
    // .then(() => axios.get('fetchPDF', {responseType : 'blob'}))
    //   .then((res) => {
    //     const pdfBlob = new Blob([res.data], {type: 'application/pdf ' }) 
    //   })
    //   .catch((err) => {
    //     console.log('YASLOG', err)
    //   });
  }

    return (
      <div style={container}>
        <h2 >Resume form</h2>
      
        <form style={form} method="get" onSubmit={alamanoPdf}>
          <input
                placeholder="first name"
                label="edit name"
                name="name"
                style={input}
                onChange={editName}
                value={firstname}
          />
          <input
                placeholder="Job Title"
                label="jobTitle"
                style={input}
                name="jobTile"
                onChange={editJobTitle}
                value={jobTitle}
          />
          <input
                placeholder="current situation"
                label="currentSituation"
                name="currentSituation"
                style={input}
                onChange={editCurrentSituation}
                value={currentSituation}
          />
          <input
                placeholder="experience 1"
                label="XP1"
                name="XP1"
                style={input}
                onChange={editXP1}
                value={XP1}
          />
            <button  style={btn} type="submit" name="">create CV</button>
        </form>
      </div>
    )
  }

export default Ftp;
