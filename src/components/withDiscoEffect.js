import React from 'react';


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function withDiscoEffect(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
          super(props);
          this.state = { innerWidth: 0, innerHeight: 0, randomColor: null};
          this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
  
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
  
      componentWillUnmount() {
          window.removeEventListener('resize', this.updateWindowDimensions);
      }
  
      updateWindowDimensions() {
        const randomColor = getRandomColor();
        this.setState({ 
            innerWidth: window.innerWidth, 
            innerHeight: window.innerHeight,
            bgColor: randomColor,
            fontColor: (randomColor.replace('#','0x')) > (0xffffff/2) ? '#333' : '#fff',
        });
    }
  
      render() {
        return <WrappedComponent 
              {...this.state}
              {...this.props}
          />;
      }
    };
  }