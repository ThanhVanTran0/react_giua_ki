import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';

import './Upload.css'

// Path within Database for metadata (also used for file Storage path)
const filesPath = 'uploadedFiles';

const handlers = {
  // Uploads files and push's objects containing metadata to database at dbPath
  onFilesDrop: props => files => {
    files.map(file => {
      let upload = props.firebase.storage().ref(`images/${file.name}`).put(file);
      upload.on('state_changed', function(snapshot){
       
      }, function(error) {
      }, function() {
        upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          props.pushUrlImg(downloadURL);
          props.onClose();
        });
      });
    })
  }
};

const enhancerPropsTypes = {
  firebase: PropTypes.object.isRequired
};

// Component Enhancer that adds props.firebase and creates a listener for
// files them passes them into props.uploadedFiles
const enhance = compose(
  // Create listeners for Real Time Database which write to redux store
  firebaseConnect([{ path: filesPath }]),
  // connect redux state to props
  connect(({ firebase: { data } }) => ({
    uploadedFiles: data[filesPath]
  })),
  // Set proptypes of props used within handlers
  setPropTypes(enhancerPropsTypes),
  // Add handlers as props
  withHandlers(handlers)
);

const Uploader = ({ uploadedFiles, onFileDelete, onFilesDrop }) => (
    <Dropzone onDrop={onFilesDrop} className="dropzone">
      <div>Drag and drop files here or click to select</div>
    </Dropzone>
);

Uploader.propTypes = {
  firebase: PropTypes.object.isRequired,
  uploadedFiles: PropTypes.object
};

// Apply enhancer to component on export
export default enhance(Uploader);