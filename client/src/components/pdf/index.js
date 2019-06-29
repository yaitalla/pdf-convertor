import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { container, btnWrapper, btn, input } from './style';

const Ftp = () => {

      // file: '',
      // token: window.localStorage.token,
      // message: 'upload a file from your computer'
  
  const [savedFiles, setSavedFiles] = useState('');
  const [chosenFile, setChosenFile] = useState(null);
  const [fileToUpload, setFileToUpload] = useState(null);


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

  const download = () => {
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
    }
     return axios.get("http://localhost:4000/api/ftp/download",  {headers: headers}).then((res) => {
      console.log(res)  
  }).catch((err) => {
      console.log('YASLOG', err)
    });
  };

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
  const screenShotResume = () => {
    axios.get("http://localhost:4000/api/ftp/screenshot").then((res) => {
      console.log('ok');
  }).catch((err) => {
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
        <form method="get" onSubmit={screenShotResume}>
          <button  style={btn} type="submit" name="">screenshot cv</button>
        </form>
      </div>
    )
  }

export default Ftp;
