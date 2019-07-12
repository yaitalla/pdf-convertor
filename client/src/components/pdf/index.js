import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { container, btnWrapper, btn, input } from './style';

const Ftp = () => {

      // file: '',
      // token: window.localStorage.token,
      // message: 'upload a file from your computer'
  
  const [firstname, setFirstname] = useState('');
  const [cSumary, setCSumary] = useState('');
  const [project, setProject] = useState('');
  const [age, setAge] = useState(0)


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
  const editSumary = (event) => {
    setCSumary(event.target.value)
  }
  const editProject = (event) => {
    setProject(event.target.value)
  }
  const editAge = (event) => {
    setAge(event.target.value)
  }
  const alamanoPdf = () => {
    const data = {
      name: firstname,
      age: age,
      sumary: cSumary,
      previous: project
    }
    console.log(data)
    axios.post("http://localhost:4000/api/ftp/alamanoPdf", data).then((res) => {
      console.log('retrouvez ce fichier dans ./server/');
    }).then(() => axios.get('fetchPDF', {responseType : 'blob'}))
      .then((res) => {
        const pdfBlob = new Blob([res.data], {type: 'application/pdf ' }) 
      })
      .catch((err) => {
        console.log('YASLOG', err)
      });
  }

    return (
      <div style={container}>
        <h2 >PDF Converter</h2>
        <form onSubmit={upload} encType="multipart/form-data">
          <input  type="file" onChange={onChange} name="sampleFile"/>
          <button type="submit" style={btn} type="submit" >upload file</button>
        </form>
        <form method="get" action="http://localhost:4000/api/ftp/download" encType="multipart/form-data">
          <button style={btn} type="submit" >download</button>
        </form>
      
        <form method="get" onSubmit={getFiles}>
          <button style={btn} type="submit" name="" value="dfile">get files</button>
        </form>
      
        <form method="get" onSubmit={alamanoPdf}>
          <input
                placeholder="first name"
                label="edit name"
                name="name"
                onChange={editName}
                value={firstname}
          />
          <input
                placeholder="Career sumary"
                label="sumary"
                name="sumary"
                onChange={editSumary}
                value={cSumary}
          />
          <input
                placeholder="age"
                label="age"
                name="age"
                onChange={editAge}
                value={age == 0 ? "" : age}
          />
          <input
                placeholder="project"
                label="previous project"
                name="project"
                onChange={editProject}
                value={project}
          />
            <button  style={btn} type="submit" name="">create pdf Alamano</button>
        </form>
      </div>
    )
  }

export default Ftp;
