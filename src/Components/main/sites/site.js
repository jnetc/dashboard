import React from 'react'
import { Link } from 'react-router-dom'

export default class Site extends React.Component {


  render() {    
    const { id, buildingName, address, floorAndWing, people, mashine, numOfPeople, alerts } = this.props.data
    const hoveredListOfPeople = people.map((pl, index) => {
      return <li key={ index }>{`${pl}`}</li>
    })
    const hoveredListOfMashine = mashine.map((msh, index) => {
      return <li key={ index }>{`${msh}`}</li>
    })

    return (
      <div className="db__item__block" id={id}>
        <Link to={`/sites/${id}`} className="db__item__site">
          <i className="icon-sites-building"></i>
          <div className="main_in_line col-pos">
            <div className="row__title">Building</div>
            <div className="fcline cut_name">{ buildingName }</div>
            <span className="sensor__timestamp">{ address }</span>
          </div>
          <div className="other_in_line wl-m col-pos">
            <div className="row__title">Floor & Wing</div>
            <div className="fcline">{ floorAndWing }</div>
          </div>
          <div className="other_in_line wl-l col-pos people_hovered">
            <div className="row__title">People</div>
            <div className="fcline">{ people }</div>
            <ul className="peoples__mashines">
              { hoveredListOfPeople }, 
              { hoveredListOfMashine }
            </ul>
          </div>
          <div className="other_in_line wl-m col-pos ailine">
            <div className="row__title">№ of people</div>
            <div className="fcline">{ numOfPeople }</div>
          </div>
          <div className="other_in_line wl-xs col-pos ailine">
            <div className="row__title">Alerts</div>
            <div className={ alerts === 0 ? "fcline" : "fcline status-alert-c"}>{ alerts }</div>
          </div>
          {alerts !== 0 && <i className="icon-sites-alert"></i>}
          <i className="icon-arrow"></i>
        </Link>
        {/* <ul className="peoples__mashines">
          <li>List of all</li>
        </ul> */}
      </div>
    )
  }
}