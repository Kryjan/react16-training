import React, { Component } from "react";

export default function DiscoHoc(WrappedComponent) {
    return class DiscoHocWrapper extends Component {
        constructor(props) {
            super(props);
            this.updateColors = this.updateColors.bind(this);
        }

        componentDidMount() {
            window.addEventListener('resize', this.updateColors);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateColors);
        }

        updateColors() {
            const bgColor = this.getRandomColor();
            this.setState({
                bgColor,
                color: this.pickFontColor(bgColor),
            })
        }

        getRandomColor() {
            const hexAlpha = '0123456789ABCDEF';
            return [...Array(6)]
                .map(_ => (Math.floor(Math.random() * 16)))
                .map(randIndex => hexAlpha[randIndex])
                .reduce((acc, nextHex) => `${acc}${nextHex}`, '#');
        }

        pickFontColor(bgColor) {
            return bgColor.replace('#', '0x') > (0xffffff / 2) ? '#333' : '#fff'
        }

        render() {
            return <WrappedComponent
                {...this.props}
                {...this.state}
            />
        }
    }
};
