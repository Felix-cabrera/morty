import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {

    const [resident,getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    },[])
  return (
    <article className="resident">
        <section className="resident__section">
            <img className="resident__image" src={resident?.image} alt="" />
            <div className="resident__status">
                <span className={`resident__status__circle ${resident?.status}`}></span>
                <span className="resident__status__value">{resident?.status}</span>
            </div>
        </section>
        <section className="resident__body">
            <h3 className="resident__name">{resident?.name}</h3>
            <hr className="resident__separador"/>
            <ul className="resident_list">
                <li className="resident__item"><span className="resident__label">Specie</span><span className="resident__value">{resident?.species}</span></li>
                <li className="resident__item"><span className="resident__label">Origin</span><span className="resident__value">{resident?.name}</span></li>
                <li className="resident__item"><span className="resident__label">Episodes where appear</span><span className="resident__value">{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard