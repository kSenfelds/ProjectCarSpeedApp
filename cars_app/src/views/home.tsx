import { Uploader } from "../components/Uploader";

export const Home = () => {
    return (
        <>
        <div className="container">
        <h1>CarSpeedApp</h1>
        <p>CarSpeedApp is a web application that allows you to upload a CSV file with the data of the cars that have passed through a certain point, and then display the data in a table and a graph.</p>
        <p>It also allows you to filter the data by speed and date.</p>

        <Uploader></Uploader>
        </div>
        </>
    )
  };