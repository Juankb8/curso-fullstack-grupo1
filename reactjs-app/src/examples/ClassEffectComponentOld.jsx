import React from 'react';

export class ClassEffectComponentOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'red'
        };
    }

    componentDidMount() {
        document.title = `Contador: ${this.state.count}`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `Count: ${this.state.count}`;
        }
    }

    componentWillUnmount() {
        console.log('Se ejecutó la función componentWillUnmount');
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Incrementar
                </button>
                <h2>Resultado: {this.state.count}</h2>
            </>
        );
    }
}
