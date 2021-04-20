import path from "path";
import express, {Express, NextFunction, Request, Response} from "express";
import {serverInfo} from "./ServerInfo";
import * as IMAP from "./IMAP";
import * as SMTP from "./SMTP";
import * as Contacts from "./Contacts"; 
import {IContact} from "./Contacts";
