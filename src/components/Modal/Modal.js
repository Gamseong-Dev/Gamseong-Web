import React, {Component} from 'react';

class Modal extends Component {
  render(){
    const styles = {
      modalIsOpen: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '100'
      },
      modalIsClosed: {
        display: 'none'
      }
    }

    let modalStyles = this.props.open ? styles.modalIsOpen : styles.modalIsClosed;
    console.log(this.props.children);

    return (
      <div style={modalStyles}>{this.props.children}</div>
    );
  }
}

export default Modal;
