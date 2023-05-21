import { Uploader } from "../components/Uploader";

export const Home = () => {
    return (
        <>
        <div className="container">
        <h1>CarSpeedApp</h1>
        <p>Choose a file to upload, press Upload, wait for loading to end then press save</p>
        
        <Uploader></Uploader>
        </div>
        </>
    )
  };