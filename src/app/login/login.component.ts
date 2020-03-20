import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  closeResult: string;
  loginForm:FormGroup;
  resetForm: FormGroup;
  reactiveForm: FormGroup;
  otpForm: FormGroup;
  passwordExpiryForm: FormGroup
  @ViewChild('reset',{static:true}) resetModal;  
  @ViewChild('reactive',{static:true}) reactiveModal;  
  @ViewChild('otp',{static:true}) otpModel;

  data: any = 
  {
    "success":true,
    "result":{
       "code":"0",
       "message":"",
       "session_id":"116980655596745065724504075729",
       "user_data_response":{
          "user_data":{
             "login_id":"sakama01@dqt",
             "first_name":"Mahesh",
             "last_name":"Saka",
             "email_address":"mahesh.saka@lexisnexisrisk.com",
             "phone":"",
             "phone_ext":"",
             "enabled":"1",
             "employee_id":"00000285768",
             "user_type":"Internal",
             "id_type":"Permanent",
             "internal_type_status":"FTE_Contractor"
          },
          "user_login_data":{
             "first_login_date":"2019-06-19T17:14:14Z",
             "last_login_date":"2020-03-20T08:27:09Z",
             "login_count":"2241",
             "password_expire_date":"",
             "wrong_password_login_attempts":"0",
             "password_lockout":"",
             "reset_password_required":"0"
          },
          "profiles":"",
          "groups":{
             "Group":[
                {
                   "group_name":"Customer Test Data Query Tool",
                   "group_code":"CTQUERYTOOL",
                   "group_description":"Customer Test Data Query Tool"
                },
                {
                   "group_name":"MBS Auth Ext",
                   "group_code":"MBSAUTHEXT",
                   "group_description":"MBS Auth External app roles and permission"
                }
             ]
          },
          "roles":{
             "Role":[
                {
                   "role_name":"Customer Manager",
                   "role_code":"CTQUERYTOOL_CM",
                   "role_description":"This role has the functionality to request new users",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "role_name":"External",
                   "role_code":"CTQUERYTOOL_USER",
                   "role_description":"External",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "role_name":"Internal",
                   "role_code":"CTQUERYTOOL_ADMIN",
                   "role_description":"Internal",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "role_name":"View",
                   "role_code":"CTQUERYTOOL_VIEW",
                   "role_description":"View",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "role_name":"Admin All Access",
                   "role_code":"MBSAUTHEXT_ADMIN_ALL_ACCESS",
                   "role_description":"Admin All Access",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "role_name":"CTDQT Group Admin",
                   "role_code":"MBSAUTHEXT_GROUPADMIN_CTDQT",
                   "role_description":"CTDQT Group Admin",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "role_name":"MAE Domain  Admin",
                   "role_code":"MBSAUTHEXT_DOMAINADMIN_MAE",
                   "role_description":"MAE Domain  Admin",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "role_name":"MBS Domain Admin",
                   "role_code":"MBSAUTHEXT_DOMAINADMIN_MBS",
                   "role_description":"MBS Domain Admin",
                   "group_code":"MBSAUTHEXT"
                }
             ]
          },
          "permissions":{
             "Permission":[
                {
                   "permission_name":"Add AccountID",
                   "permission_code":"MBSAUTHEXT_ADD_ACCOUNTID",
                   "permission_description":"Add account ID to a user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add Bulk Users",
                   "permission_code":"MBSAUTHEXT_ADDBULKUSERS",
                   "permission_description":"Allows to add multiple users at once",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add Domain",
                   "permission_code":"MBSAUTHEXT_ADDDOMAIN",
                   "permission_description":"Allows users to add external domains",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add IP restriction",
                   "permission_code":"MBSAUTHEXT_ADD_IP_RESTRICTION",
                   "permission_description":"Add IP restriction to users",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add NVP",
                   "permission_code":"MBSAUTHEXT_ADD_NVP",
                   "permission_description":"Add Name-Value pair to a user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add Permission",
                   "permission_code":"MBSAUTHEXT_ADDPERM",
                   "permission_description":"Add Permission",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add Role",
                   "permission_code":"MBSAUTHEXT_ADDROLE",
                   "permission_description":"Add Role",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add Security Answer",
                   "permission_code":"MBSAUTHEXT_ADD_SECURITY_ANSWER",
                   "permission_description":"urity Answer",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Add User",
                   "permission_code":"MBSAUTHEXT_ADDUSER",
                   "permission_description":"Add User",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Administrator",
                   "permission_code":"CTQUERYTOOL_ADMIN",
                   "permission_description":"Administrator",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "permission_name":"AdminSearchUserNVP",
                   "permission_code":"MBSAUTHEXT_SEARCH_USER_NVP",
                   "permission_description":"Admin Search User NVP permissions",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"CDP Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_CDP",
                   "permission_description":"Admin of users in the CDP Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Change Password",
                   "permission_code":"MBSAUTHEXT_CHANGEPW",
                   "permission_description":"Change Password for user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Check User IP",
                   "permission_code":"MBSAUTHEXT_CHECK_USER_IP",
                   "permission_description":"Checks if a user's IP address is within their range of IP addresses.",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Check User Sec Q\/A",
                   "permission_code":"MBSAUTHEXT_CHECK_USERSEC_QANDA",
                   "permission_description":"Check user security question and answer",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Disable User",
                   "permission_code":"MBSAUTHEXT_DISABLEUSER",
                   "permission_description":"Disable User",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"DQT Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_DQT",
                   "permission_description":"Admin of users in the DQT Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"eCrash Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_ECRASH",
                   "permission_description":"Admin of users in the eCrash Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Edit External Domains",
                   "permission_code":"MBSAUTHEXT_EDITDOMAIN",
                   "permission_description":"Edit External Domains",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Edit Group",
                   "permission_code":"MBSAUTHEXT_EDITGROUP",
                   "permission_description":"Edit Group",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Edit Permission",
                   "permission_code":"MBSAUTHEXT_EDITPERM",
                   "permission_description":"Edit Permission",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Edit Role",
                   "permission_code":"MBSAUTHEXT_EDITROLE",
                   "permission_description":"Edit Role",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Edit User",
                   "permission_code":"MBSAUTHEXT_EDITUSER",
                   "permission_description":"Edit User",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"EPIC Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_EPIC",
                   "permission_description":"Admin of users in the EPIC Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Get User Data",
                   "permission_code":"MBSAUTHEXT_GETUSER",
                   "permission_description":"Get User Data",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type AGENCY",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_AGENCY",
                   "permission_description":"Assign users and permission to AGENCY groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type ALIRTS",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_ALIRTS",
                   "permission_description":"Assign users and permission to ALIRTS groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type BACKOFFICE_TEST",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_BACKOFFICE_TEST",
                   "permission_description":"Assign users and permission to BACKOFFICE_TEST groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type BCODEDCODER",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_BCODEDCODER",
                   "permission_description":"Assign users and permission to BCODEDCODER groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type BSUKIC",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_BSUKIC",
                   "permission_description":"Assign users and permission to BSUKIC groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type CDP",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_CDP",
                   "permission_description":"Assign users and permissions to CDP groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type CILINK",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_CILINK",
                   "permission_description":"Assign users and permissions to CILINK groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type CLMD",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_CLMD",
                   "permission_description":"Assign users and permission to CLMD groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type CRU",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_CRU",
                   "permission_description":"Assign users and permissions to TopSecret groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type CTDQT",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_CTDQT",
                   "permission_description":"Assign users and permissions to CTDQT groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type ECRASH",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_ECRASH",
                   "permission_description":"Assign users and permission to ECRASH groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type FIRST",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_FIRST",
                   "permission_description":"Assign users and permission to FIRST groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type FRAUDGOV",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_FRAUDGOV",
                   "permission_description":"Assign users and permission to FRAUDGOV groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type GOVFCRA",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_GOVFCRA",
                   "permission_description":"Assign users and permission to GOVFCRA groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type IDS",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_IDS",
                   "permission_description":"Assign users and permission to IDS groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type IEAP",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_IEAP",
                   "permission_description":"Assign users and permissions to IEAP groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type IQR",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_IQR",
                   "permission_description":"Assign users and permission to IQR groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type JEFFTEST11",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_JEFFTEST11",
                   "permission_description":"Assign users and permission to JEFFTEST11 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type LEXIS",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_LEXIS",
                   "permission_description":"Assign users and permission to LEXIS groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type LEXIS1",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_LEXIS1",
                   "permission_description":"Assign users and permission to LEXIS1 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type LEXIS10",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_LEXIS10",
                   "permission_description":"Assign users and permission to LEXIS10 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type LEXIS8",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_LEXIS8",
                   "permission_description":"Assign users and permission to LEXIS8 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type MAETEST",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_MAETEST",
                   "permission_description":"Assign users and permission to MAETEST groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type MAPVIEW",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_MAPVIEW",
                   "permission_description":"Assign users and permission to MAPVIEW groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type MBSEXT",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_MBSEXT",
                   "permission_description":"Assign users and permission to MBSEXT groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type MKTPBASE",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_MKTPBASE",
                   "permission_description":"Assign users and permission to MKTPBASE groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NAC",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NAC",
                   "permission_description":"Assign users and permission to NAC groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NEWORDER",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NEWORDER",
                   "permission_description":"Assign users and permission to NEWORDER groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NEWORDER3",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NEWORDER3",
                   "permission_description":"Assign users and permission to NEWORDER3 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NOWISGOODMENTOCOME",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NOWISGOODMENTOCOME",
                   "permission_description":"Assign users and permission to NOWISGOODMENTOCOME groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NOWISGOODMENTOCOME20",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NOWISGOODMENTOCOME20",
                   "permission_description":"Assign users and permission to NOWISGOODMENTOCOME20 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NOWISGOODNOWISBADTESTINGFOR",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NOWISGOODNOWISBADTESTINGFOR",
                   "permission_description":"Assign users and permission to NOWISGOODNOWISBADTESTINGFOR groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NOWISGOODNOWISBADTESTINGFOR1",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NOWISGOODNOWISBADTESTINGFOR1",
                   "permission_description":"Assign users and permission to NOWISGOODNOWISBADTESTINGFOR1 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type NOWISGOODNOWISBADTESTINGFOR8",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_NOWISGOODNOWISBADTESTINGFOR8",
                   "permission_description":"Assign users and permission to NOWISGOODNOWISBADTESTINGFOR8 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type PBASE",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_PBASE",
                   "permission_description":"Assign users and permission to PBASE groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type QATEST12",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_QATEST12",
                   "permission_description":"Assign users and permission to QATEST12 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type ROW",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_ROW",
                   "permission_description":"Assign users and permission to ROW groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type SAMPLE_STRING_2",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_SAMPLE_STRING_2",
                   "permission_description":"Assign users and permission to SAMPLE_STRING_2 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type TEST02",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_TEST02",
                   "permission_description":"Assign users and permission to TEST02 groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type TIME_T",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_TIME_T",
                   "permission_description":"Assign users and permission to TIME_T groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type TLMXD",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_TLMXD",
                   "permission_description":"Assign users and permission to TLMXD groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Group Type TopSecret",
                   "permission_code":"MBSAUTHEXT_GROUPTYPE_TOPSECRET",
                   "permission_description":"Assign users and permissions to TopSecret groups only",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"HCAR Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_HCAR",
                   "permission_description":"Admin of users in the HCAR Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IAP Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IAP",
                   "permission_description":"Admin of users in the IAP Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IDM Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IDM",
                   "permission_description":"Admin of users in the IDM Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IDS Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IDS",
                   "permission_description":"Admin of users in the IDS Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IDSNA Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IDSNA",
                   "permission_description":"Admin of users in the IDSNA Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IDSRISK Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IDSRISK",
                   "permission_description":"Admin of users in the IDSRISK Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IESP Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IESP",
                   "permission_description":"Admin of users in the IESP Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"INSQ Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_INSQ",
                   "permission_description":"Admin of users in the INSQ Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"IVG Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_IVG",
                   "permission_description":"Admin of users in the IVG Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"MBS Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_MBS",
                   "permission_description":"Admin of users in the MBS Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"MCA Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_MCA",
                   "permission_description":"Admin of users in the MCA Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"MFA Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_MFA",
                   "permission_description":"Admin of users in the MFA Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Refresh Cache",
                   "permission_code":"MBSAUTHEXT_REFRESH",
                   "permission_description":"Refresh Cached server values",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Remove AccountId",
                   "permission_code":"MBSAUTHEXT_REMOVE_ACCOUNTID",
                   "permission_description":"Remove AccountId from user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Remove IP Restriction",
                   "permission_code":"MBSAUTHEXT_REMOVE_IP_RESTRICTION",
                   "permission_description":"Remove IP restriction from a user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Remove NVP",
                   "permission_code":"MBSAUTHEXT_REMOVE_NVP",
                   "permission_description":"Remove NVP from user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Remove Security Quest-Answer",
                   "permission_code":"MBSAUTHEXT_REMOVE_SECURITY_ANSWER",
                   "permission_description":"Remove security question and answer from a user",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"ROW Domain Admin",
                   "permission_code":"MBSAUTHEXT_DOMAINTYPE_ROW",
                   "permission_description":"Admin of users in the ROW Domain",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Search User",
                   "permission_code":"MBSAUTHEXT_SEARCH_USER",
                   "permission_description":"Search for users in the MAE system",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Send Email",
                   "permission_code":"MBSAUTHEXT_SEND_EMAIL",
                   "permission_description":"Send Email",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Set Expire Date",
                   "permission_code":"MBSAUTHEXT_SET_PW_EXPIRE_DATE",
                   "permission_description":"Set users password expire date",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"Unlock Account",
                   "permission_code":"MBSAUTHEXT_UNLOCK_ACCOUNT",
                   "permission_description":"Unlock Account",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"User",
                   "permission_code":"CTQUERYTOOL_USER",
                   "permission_description":"User",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "permission_name":"View",
                   "permission_code":"CTQUERYTOOL_VIEW",
                   "permission_description":"View",
                   "group_code":"CTQUERYTOOL"
                },
                {
                   "permission_name":"View",
                   "permission_code":"MBSAUTHEXT_VIEW",
                   "permission_description":"View",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"View Application Data",
                   "permission_code":"MBSAUTHEXT_VIEW_APPLICATION_DATA",
                   "permission_description":"View Application data",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"View Domains",
                   "permission_code":"MBSAUTHEXT_VIEWDOMAINS",
                   "permission_description":"View domains",
                   "group_code":"MBSAUTHEXT"
                },
                {
                   "permission_name":"View User Sec Questions",
                   "permission_code":"MBSAUTHEXT_VIEW_USER_SEC_QUESTIONS",
                   "permission_description":"View User Sec Questions",
                   "group_code":"MBSAUTHEXT"
                }
             ]
          },
          "account_ids":"",
          "ip_restrictions":""
       },
       "otpResult":{
          "success":true,
          "result":{
             "code":"0",
             "message":"",
             "session_id":"112043878224438413588292669721"
          }
       }
    }
 }
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  //to open model 
  open(model) { 
    this.modalService.open(model, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {  
    this.loginForm = this.formBuilder.group({
      mailaddress: ['',[Validators.required,Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]],
    pwd: ['', [Validators.required,Validators.minLength(6)]]
  });  
      this.resetForm = this.formBuilder.group({
          email: ['',[Validators.required,Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )]]
      }); 
      this.reactiveForm = this.formBuilder.group({
        email: ['',[Validators.required,Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )]]
    }); 
    this.otpForm = this.formBuilder.group({
      otp: ['',[Validators.required,Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )]]
  });
  this.passwordExpiryForm = this.formBuilder.group({
    password: ['', [Validators.required,Validators.minLength(6)]],
  confirmPassword: ['', [Validators.required,Validators.minLength(6)]]
});
  }

  submit(data){
   
      if(this.data.success == true){
        console.log(this.data["result"]["session_id"])
        console.log(this.data["result"]["result"]["session_id"])
      
        if(this.data["result"]["code"] == 0){
            this.open(this.otpModel)
        }
        else if(this.data["result"]["code"] == 1){
          this.open(this.resetModal)
        }
        else if(this.data["result"]["code"]  == 2){
          this.open(this.reactiveModal)
        }
      }
      else{
        console.log("error message of invalid credentials")
      }    
  }

  resetData(data){
   console.log(data);
   this.resetForm.reset();
  }
  reactiveData(data){
    console.log(data);
    this.reactiveForm.reset();
   }
   otpData(data){
     console.log(data);
   }
   passwordExpired(data){
     console.log(data)
   }
}
