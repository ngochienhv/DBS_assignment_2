import React from 'react'
import { Form } from "react-bootstrap";
import Textfield from "@atlaskit/textfield";
import { useState } from 'react';

function ItemCustomer() {
    const [CustomerInfo,SetCustomerInfo] = useState({HoTen:'',SDT:'',Email:'',Tinh:'',Quan:'',Phuong:'', Duong:'', GhiChu:''})
    const ChangeHoTen = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,HoTen: e.target.value}));
        SetCustomerInfo({...CustomerInfo,HoTen: e.target.value});
    }
    const ChangeSDT = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,SDT: e.target.value}));
        SetCustomerInfo({...CustomerInfo,SDT: e.target.value});
    }
    const ChangeEmail = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Email: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Email: e.target.value});
    }
    const ChangeTinh = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Tinh: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Tinh: e.target.value});
    }
    const ChangeQuan = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Quan: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Quan: e.target.value});
    }
    const ChangePhuong = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Phuong: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Phuong: e.target.value});
    }
    const ChangeDuong = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Duong: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Duong: e.target.value});
    }
    const ChangeGhiChu = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,GhiChu: e.target.value}));
        SetCustomerInfo({...CustomerInfo,GhiChu: e.target.value});
    }
    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Th??ng tin kh??ch h??ng</h3>
            </div>

            <tbody>
                <Textfield placeholder='H??? T??n' value={CustomerInfo.HoTen} onChange={ChangeHoTen}></Textfield>
                <Textfield placeholder='S??? ??i???n tho???i' value={CustomerInfo.SDT} onChange={ChangeSDT}></Textfield>
                <Textfield placeholder='Email' value={CustomerInfo.Email} onChange={ChangeEmail}></Textfield>
                <Textfield placeholder='T???nh.Th??nh ph???' value={CustomerInfo.Tinh} onChange={ChangeTinh}></Textfield>
                <Textfield placeholder='Qu???n/Huy???n' value={CustomerInfo.Quan} onChange={ChangeQuan}></Textfield>
                <Textfield placeholder='Ph?????ng/X??' value={CustomerInfo.Phuong} onChange={ChangePhuong}></Textfield>
                <Textfield placeholder='S??? nh??, T??n ???????ng' value={CustomerInfo.Duong} onChange={ChangeDuong}></Textfield>
                <Form.Control as="textarea" rows={6} placeholder="Ghi ch?? cho c???a h??ng" value={CustomerInfo.GhiChu} onChange={ChangeGhiChu}/>
            </tbody>
        </div>
    )
}

export default ItemCustomer

