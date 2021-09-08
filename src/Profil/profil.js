import React from 'react'

const profil = props => {
    const {FullName, Bio, Profession }= props

    return (
        <div>
            <p>{props.children}</p> 
            <h2>Je me nomme {FullName}</h2>
            <p> {Bio}</p>
            <p>{Profession} En 2ieme année</p> 
            <button className="btn btn-primary btn-lg" 
            onClick={() => props.alertMyhandleName("Doumbia Vamoussa")}>
                Alert
            </button> 
        </div>
    )
}
export default profil;