import './apraksts.css';


// interface DatiProps {
//     virsraksts: string;
//     attels: string;
//     apraksts: string
// }
export default function Apraksts({dati}:any) {

  return (
    <div className="descBlock">
        <h5>{dati.virsraksts}</h5>
        <img src={dati.attels} />
        <p>{dati.apraksts}</p>
    </div>
  )
}
