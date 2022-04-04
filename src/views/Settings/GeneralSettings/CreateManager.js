import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Card from "reactstrap/lib/Card";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import FormGroup from "reactstrap/lib/FormGroup";
import LaddaButton from "components/laddaButton/LaddaButton";
import CardFooter from "reactstrap/lib/CardFooter";
import SimpleSelect from "components/Form/SimpleSelect/SimpleSelect";
import { useData } from "hooks/useData/useData";
import { useForm } from "hooks/useForm/useForm";
import { post } from "lib/ajax/post";
import CustomLoadingOverlay from "components/CustomLoadingOverlay/CustomLoadingOverlay";

const CreateManager = props => {
    // get the slug or id from props.match.params.
    const validate = function () {
        const error = {};
        if (form.password !== form.repeatPassword) {
            error.password = 'رمز یا رمز تکرار شده اشتباه است.'
            error.repeatPassword = 'رمز یا رمز تکرار شده اشتباه است.'
        }
        return error;
    }

    const createManager = async function () {
        const formData = new FormData();
        console.log('form', form)
        Object.entries(form).map(([key, value]) => formData.append(key, value))
        await post(null, null, null, `/create_manager`, formData)
    }
    const { files, form, setForm, submitting, handleSubmit, bind, bindFile, errors: error, } = useForm(createManager, validate);
    const [roles, , fetchRoles] = useData('/get-roles');

    return (
        <Card className="w-100">
            <form onSubmit={handleSubmit}>
                <CardHeader>{'ایجاد کاربر'}</CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="12" md="3">
                            <FormGroup>
                                <Label>نام مدیر</Label>
                                <Input type="text" placeholder="نام و نام خانوادگی را وارد کنید" required {...bind('fullname')} />
                            </FormGroup>
                        </Col>

                        <Col xs='12' md='3'>
                            <FormGroup>
                                <Label>نام کاربری</Label>
                                <Input placeholder="نام کاربری را وارد کنید" required {...bind('username')} />
                            </FormGroup>
                        </Col>

                        <Col xs='12' md='3'>
                            <FormGroup>
                                <Label>رمز عبور</Label>
                                <Input type="password" placeholder="رمز عبور را وارد کنید" required {...bind('password')} />
                            </FormGroup>
                        </Col>

                        <Col xs='12' md='3'>
                            <FormGroup>
                                <Label>تکرار رمز عبور</Label>
                                <Input type="password" placeholder="رمز عبور را تکرار کنید" required {...bind('repeatPassword')} />
                            </FormGroup>
                        </Col>

                        <Col xs="12" md="3">
                            <FormGroup>
                                <Label>موبایل</Label>
                                <Input placeholder="شماره موبایل را وارد کنید" required {...bind('mobile')} />
                            </FormGroup>
                        </Col>
                        <Col xs="12" className="mt-3" >
                            <FormGroup className="w-50">
                                <CustomLoadingOverlay loading={fetchRoles}>
                                    <Label>نقش را وارد کنید</Label>
                                    <SimpleSelect options={roles} {...bind('role')} />
                                </CustomLoadingOverlay>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>

                <CardFooter>
                    <LaddaButton loading={submitting} color="primary" type="submit">ایجاد</LaddaButton>
                </CardFooter>
            </form>
        </Card>
    )
}

export default CreateManager;