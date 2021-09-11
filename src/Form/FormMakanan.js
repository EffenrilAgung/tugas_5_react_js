import React, { Component } from 'react'

class FormMakanan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesanan: "",
            jumlah: ""
        }
        this.headlerChange = this.headlerChange.bind(this)
        this.headlerSubmit = this.headlerSubmit.bind(this)
        this.headlerSubmitJumlah = this.headlerSubmitJumlah.bind(this)
        this.pesanan = React.createRef()

    }
    headlerChange(e) {
        this.setState({
            pesanan: e.target.value
        })
    }
    headlerSubmitJumlah(e) {
        this.setState({
            jumlah: e.target.value
        })
    }
    headlerSubmit(e) {
        e.preventDefault()
        alert(
            "Pesanan Anda Adalah : " + this.state.pesanan + "| Jumlah Pesanan : " + this.state.jumlah
        )
        this.setState({
            pesanan: '',
            jumlah: ''
        })
        this.pesanan.current.focus()
    }

    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.headlerSubmit}>
                        <input type="text" value={this.state.pesanan} placeholder="Masukkan Pesanan Anda" onChange={this.headlerChange} ref={this.pesanan} />
                        <input type="number" value={this.state.jumlah} onChange={this.headlerSubmitJumlah} placeholder="Masukkan Pesanan Anda" />
                        <br /><br />
                        <input type="submit" value="Pesan" />
                    </form>
                </center>
            </div>
        )
    }
}

export default FormMakanan