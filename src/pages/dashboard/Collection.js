import React, {useEffect} from "react";
import { connect } from "react-redux";
import "./styles.collection.scss";
import DashboardNav from "../../component/DashboardNav";
import Spinner from "../../component/Spinner";
import { axiosWithAuthSpotify } from '../../utils/axiosWithAuth'

const Collection = (props) => {

  useEffect(() => {
    axiosWithAuthSpotify()
    .get('search?q=queen%2039&type=track,artist')
    .then( res => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <DashboardNav />
      <div className="listContainer">
        {props.isFetching ? (
          <div className="spinnerContainer">
            <Spinner />
          </div>
        ) : (
          props.songListData.map((e) => {
            return (
              <div className="card" key={e.id}>
                <div className="albumPlaceholder">
                  <img src={e.album_art} alt={e.name} />
                </div>
                <h3>{e.title}</h3>
                <h4>{e.artist}</h4>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songListData: state.songListData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(Collection);
