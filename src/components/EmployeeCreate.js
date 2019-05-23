import React, { Component } from "react";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, CustomButton
} from "./common";
import { Picker } from "react-native";

onChangeText={text =this.props.employeeUpdate({
              prop: "name",
              value: text })}
onChangeText={text =this.props.employeeUpdate({ 
    prop: "phone",
    value: text })}



const mapStateToProps = state => {
const { name, phone, shift } =
state.employeeForm;
return { name, phone, shift };
};
export default connect(mapStateToProps,{ employeeUpdate })(EmployeeCreate);