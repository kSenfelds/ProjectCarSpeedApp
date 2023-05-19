import {  useState } from 'react';
import { Car } from '../Types/Car';
import {  deleteCars, putCars } from '../api';
import "../Styles/uploader.scss";

export const allCars: Car[] = [];
export const Uploader = () => {
  const [files, setFiles] = useState<FileList | undefined| null>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFiles(event.dataTransfer?.files);
  };

  const handleFileUpload = async (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
      const fileContents = fileReader.result as string;
      // Here you can process the contents of the file
      fileContents.split("\n").forEach((line) => {
        
        const [date, speed, licence]= line.split("\t");
        const car: Car = {  timeStamp: new Date(date.replace("T", "")), speed: Number(speed), licencePlate: licence.replace("\r", "") };
        console.log(allCars.length);
        allCars.push(car);
      });
      fileReader.onloadend = () => {
        setLoading(false);};
    };
    
  };  

  return (
    <>
      {!files && (
        <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
          <input type="file" onChange={(event) => setFiles(event.target.files)} />
        </div>
      )}
      {files && Array.from(files).map((file, index) => (
        <div key={index}>
          <p>{file.name}</p>
          <button onClick={() => {handleFileUpload(file); setLoading(true)}}>{loading? "Loading": "Upload"}</button>
          <button onClick={() => 
            putCars(allCars)
          }>{loading? "Loading": "Save"}</button>
        </div>
      ))}

      <button className='Button-delete' onClick={
        () => {
          deleteCars();
        }
      }>Delete files from DB</button>
    </>
  );
};