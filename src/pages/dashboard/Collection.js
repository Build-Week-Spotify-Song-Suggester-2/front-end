import React from "react";
import { connect } from 'react-redux'
import './styles.collection.scss'
import DashboardNav from '../../component/DashboardNav'

const Collection = (props) => {
  return (
    <div>
        <DashboardNav />
      <div className="listContainer">
        {props.songListData.map((e) => {
          return (
            <div className="card" key={e.id}>
              <div className="albumPlaceholder"></div>
              <h3>{e.title}</h3>
              <h4>{e.artist}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {

    return {
        songListData: state.songListData
    }
}

export default connect(mapStateToProps, {})(Collection);
