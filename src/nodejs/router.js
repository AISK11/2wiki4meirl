#!/usr/bin/env node
"use strict";

const express = require('express');
const router = express.Router({ strict: true, caseSensitive: true });

const templateData = {
  "header": {
    "img": "",
    "href": "",
    "activeSubroute": ""
  },
  "title": "",
  "view": ""
};

const PublicDir = `${__dirname}/../public`;
router.use(express.static(PublicDir));

/*******************************************************************************
**                                     /*                                     **
*******************************************************************************/
router.all("/*", (req, res, next) => {
  templateData.header.img = "/svg/logo.svg";
  templateData.header.href = "/";
  next();
});

/*******************************************************************************
**                                    Home                                    **
*******************************************************************************/
router.all("/", (req, res) => {
  templateData.header.activeSubroute = "home";
  templateData.title = "Home";
  templateData.view = `${PublicDir}/views/home/home.html`;
  res.render(`${PublicDir}/ejs/template.ejs`, { "template": templateData });
});

/*******************************************************************************
**                                   Notes                                    **
*******************************************************************************/
router.all("/notes*", (req, res, next) => {
  templateData.header.activeSubroute = "notes";
  next();
});

router.all("/notes", (req, res) => {
  templateData.title = "Notes";
  templateData.view = `${PublicDir}/views/notes/notes.html`;
  res.render(`${PublicDir}/ejs/template.ejs`, { "template": templateData });
});




/*******************************************************************************
**                                   Tools                                    **
*******************************************************************************/
router.all("/tools*", (req, res, next) => {
  templateData.header.activeSubroute = "tools";
  next();
});

router.all("/tools", (req, res) => {
  templateData.title = "Tools";
  templateData.view = `${PublicDir}/views/tools/tools.html`;
  res.render(`${PublicDir}/ejs/template.ejs`, { "template": templateData });
});

/*******************************************************************************
**                                 Downloads                                  **
*******************************************************************************/
router.all("/downloads*", (req, res, next) => {
  templateData.header.activeSubroute = "downloads";
  next();
});

router.all("/downloads", (req, res) => {
  templateData.title = "Downloads";
  templateData.view = `${PublicDir}/views/downloads/downloads.html`;
  res.render(`${PublicDir}/ejs/template.ejs`, { "template": templateData });
});

/*******************************************************************************
**                                   About                                    **
*******************************************************************************/
router.all("/about*", (req, res, next) => {
  templateData.header.activeSubroute = "about";
  next();
});

router.all("/about", (req, res) => {
  templateData.title = "About";
  templateData.view = `${PublicDir}/views/about/about.html`;
  res.render(`${PublicDir}/ejs/template.ejs`, { "template": templateData });
});

module.exports = router;
