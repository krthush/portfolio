/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      mobileNav: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['projects']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['project'],
  data: function data() {
    return {
      moreInfo: false,
      videoLinks: []
    };
  },
  created: function created() {
    // fetching only the video links
    this.videoLinks = this.project.links.filter(function (link) {
      return link.name == 'Video';
    });
  },
  mounted: function mounted() {
    this.videoLinks.forEach(function (link) {
      $("#" + link.id + "modal").on('hidden.bs.modal', function (e) {
        var vid = document.getElementById(link.id + "video");
        vid.pause();
      });
    });
  },
  methods: {
    toggleMoreInfo: function toggleMoreInfo(event) {
      this.moreInfo = !this.moreInfo;

      /* If scroll at bottom, auto scrolls down for user */
      // var d = document.documentElement;
      // var offset = d.scrollTop + window.innerHeight;
      // var height = d.offsetHeight;
      // if (offset >= height) {
      //     $('html, body').animate({ scrollTop: document.body.scrollHeight }, 500);
      // }
    },
    videoClicked: function videoClicked(videoId) {
      var vid = document.getElementById(videoId);
      vid.play();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      reveal: false,
      revealTime: 3000,
      sections: [{
        name: 'Startups',
        projects: [{
          name: 'Faved - Managed marketplace for influencer sponsorships',
          points: ["Worked on integrations for hundreds of brands such as Athletic Greens, NordVPN, Notion and more, with thousands of creators such as Linus Tech Tips, ColdFusion, Dami Lee and more.", "I handle building our platform for brands to book sponsorships, creator data / onboarding tech, and also hire super⭐s to join us!"],
          links: [{
            name: 'Website',
            link: 'https://favedd.com'
          }]
        }, {
          name: 'Favorited - Platform for influencers to easily earn money and rewards from brands',
          points: ["Website built using Next.js and Vercel (thereby being serverless and very scalable). Used ISR (incremental static regeneration) with SWR (stale-while-revalidate) so that pages are cached and served with data as quickly as possible.", "Designed and built front-end UI for sharing favorite products similar to Instagram's UI for photos.", "Built an API to generate an entire 'post' just from a product link or name - this involved using web scrapping techniques to fetch link previews (images + description) as well as using a SERP (search engine results page) API for further product information and easy posting.", "Setup platform to link with many affiliate providers (Awin, CJ, Sovrn, etc.) for shared products to automatically start earning commissions for influencers.", "Linked platform to Youtube APIs so that influencers can easily manage their product links for their video descriptions through Faved."],
          links: [{
            name: 'Website',
            link: 'https://myfaved.co'
          }, {
            name: 'Link Previews',
            link: 'https://krthush.medium.com/how-to-create-link-previews-like-social-media-apps-open-source-api-45797d758200'
          }]
        }, {
          name: 'Created a productivity smartwatch with a succesful Kickstarter campaign and delivery.',
          points: ['Successfully funded and delivered Kickstarter for £13k with 180 backers.', 'Worked with OEM suppliers from China to modify and build smartwatch.', 'Made early prototypes with an Android smartwatch app, then modified to work with OEM watches using the OpenWatch TWRP.', 'Brand building - designed website, promoted social media, shot photos, videos and more.'],
          links: [{
            name: 'Kickstarter',
            link: 'https://www.kickstarter.com/projects/thush/emit-smartwatch-change-your-perspective-on-time'
          }]
        }, {
          name: 'Desktop & Web time tracking app aimed at automating lawyer timesheets - seed round funded.',
          points: ['Successfully fund raised £150k from angel investors, unfortunately had to shutdown after 1 year due to lack of traction.', 'Worked with large AWS tech stack: Kinesis Firehose for stream data from desktop app, Lambdas for data processing, DynamoDB & S3 for storage.', 'Developed desktop app leveraging Windows Hooks for deep level of desktop usage tracking.', 'Experimented with noob levels of ML for categorizing desktop work log data.'],
          links: [{
            name: 'Pitchdeck',
            link: '/download/emit_pitchdeck.pdf'
          }]
        }, {
          name: 'Engagement survey app for Web/iOS/Android actively used by Brandsmiths (London law firm).',
          points: ['Coded with Nativescript for rapid cross-platform development - also leveraged webviews to keep shared codebase for major UI components.', 'Collaborated with head partner of the firm to make app for better informed appraisal decisions.', 'Paid for by the firm, currently in use with potential for further expansion and work.'],
          links: [{
            name: 'Github',
            link: 'https://github.com/krthush/emitapp-mobile'
          }]
        }]
      }, {
        name: 'Projects',
        projects: [{
          name: 'Android app that prevents you forgetting to stay in touch.',
          points: ['Built a realtime chat platform with encryption (web & mobile) using pusher channels with google FCM.', 'Adapted the Notification Listener Service to get complete tracking of phone notifications.', 'Modified the Accessibility Service to automate phone actions - specifically sending messages on other IM platforms.', 'Designed graphics and visuals based around trees - was pretty.', '300+ happy and active users.'],
          links: [{
            name: 'Website',
            link: 'https://www.producthunt.com/products/nurture-smartest-personal-crm-ever/'
          }]
        }, {
          name: 'Unity game project focused on building a solid foundation for 2D movement.',
          points: ['Built using the unity game engine, but without using the standard physics engine (no rigidbodies / 2D physics - which allows for tighter controls).', 'Project open sourced, with easy to follow documentation on github.', 'Positive feedback from devs (3.8k video views, 150 likes, 20 github stars).'],
          links: [{
            name: 'Youtube',
            link: 'https://www.youtube.com/watch?v=SVACshnciMk'
          }, {
            name: 'Github',
            link: 'https://github.com/krthush/2d-unity-movement'
          }]
        }, {
          name: 'A reddit style website for pain points (frequent and intense problems) and ideas.',
          points: ['Built to help ideate for myself and rest of the emit Team (Stephen & Pius).', 'Anyone with burning problems and cool ideas feel free to post!'],
          links: [{
            name: 'Github',
            link: 'https://github.com/krthush/painpoints'
          }]
        }, {
          name: 'Chatbot to help manage and announce events for a game server.',
          points: ['Was able to (remotely) manage an active game server through sending commands to a Discord bot (e.g. $startup to boot the server).'],
          links: [{
            name: 'Github',
            link: 'https://github.com/krthush/dst-discord-bot'
          }, {
            name: 'Discord',
            link: 'https://discord.gg/VbQdy8mpMD'
          }]
        }, {
          name: 'University learning management system (LMS) with a social media component.',
          points: ['Built during university to try make educational content on the internet easier.', 'Talked to university ICT and Engineering department to host university content + student login using SAML.', 'Halted due to university studies and large work required to build entire LMS.'],
          links: [{
            name: 'Github',
            link: 'https://github.com/krthush/painpoints'
          }]
        }, {
          name: 'Landing page for idea to use car windows as digital advertising space.',
          points: ['Contact with numerous drivers and companies looking for advertising who showed interest.', 'Tested with smartphone/portable screen combination.', 'Did not continued due to high cost of screen vs. size/ease of viewing from far outside car.'],
          links: [{
            name: 'Github',
            link: 'https://github.com/krthush/karvert'
          }]
        }]
      }, {
        name: 'University',
        projects: [{
          name: 'Project allocation website and process for engineering students.',
          points: ['As part of my final year project, worked with head of year to improve the site.', 'Created website with much friendlier UI/UX and also made it mobile friendly.'],
          links: [{
            name: 'Report',
            link: '/download/Thushaan-Rajaratnam-ME4-Final-Report.pdf'
          }, {
            name: 'Github',
            link: 'https://github.com/krthush/fyp'
          }]
        }, {
          name: 'Designed and prototyped a space manipulator (vision controlled robotic arm fit for space)',
          points: ['As part of my 3rd year group project, made a robotic arm that was controllable by human motion and wireless up to 10m.', 'Developed with Xbox Kinect, using frameworks/libraries based around vision computer vision to calculate joint angles.', 'Setup all the electronics (kinect, wireless sensors, servo motors) and Arduino code around controlling them.'],
          links: [{
            name: 'Video',
            link: '/videos/dmt.mp4'
          }, {
            name: 'Report',
            link: '/download/Group_33_Space_Manipulator_DMT.pdf'
          }, {
            name: 'Github',
            link: 'https://github.com/krthush/dmt'
          }]
        }, {
          name: 'Programmed an embedded C program to control a small rover to find an target and come back.',
          points: ['Developed with low level embedded C (controlled PWM motors, IR/RFID readers, LCD display and more).', 'Rover was unofficially - only because there werent official races year wide - the fastest.'],
          links: [{
            name: 'Video',
            link: '/videos/ecm.mp4'
          }, {
            name: 'Github',
            link: 'https://github.com/krthush/BombFinderV2.X'
          }]
        }]
      }]
    };
  },
  created: function created() {
    // giving unique keys to elements
    this.sections.forEach(function (section, sectionIndex) {
      section.id = 'section' + sectionIndex;
      section.projects.forEach(function (project, projectIndex) {
        project.id = 'section' + sectionIndex + 'project' + projectIndex;
        project.links.forEach(function (link, linkIndex) {
          link.id = 'section' + sectionIndex + 'project' + projectIndex + 'link' + linkIndex;
        });
      });
    });
  },
  mounted: function mounted() {
    setTimeout(this.revealContent, this.revealTime);
  },
  methods: {
    revealContent: function revealContent() {
      this.reveal = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var typed = new (typed_js__WEBPACK_IMPORTED_MODULE_0___default())('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 20,
      fadeOut: true
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", {
    staticClass: "navbar justify-content-end fix-top"
  }, [_c("a", {
    staticClass: "clean-a header-link mx-4 d-none d-md-block",
    attrs: {
      href: "https://github.com/krthush"
    }
  }, [_vm._v("Github")]), _vm._v(" "), _c("a", {
    staticClass: "clean-a header-link mx-4 d-none d-md-block",
    attrs: {
      href: "https://www.linkedin.com/in/thushaan-rajaratnam-98452414b/"
    }
  }, [_vm._v("LinkedIn")]), _vm._v(" "), _c("a", {
    staticClass: "clean-a header-link mx-4 d-none d-md-block",
    attrs: {
      href: "/download/Thushaan-Rajaratnam-CV.pdf"
    }
  }, [_vm._v("CV")]), _vm._v(" "), _c("button", {
    staticClass: "clean-button nav-icon-holder d-flex align-items-center d-md-none",
    on: {
      click: function click($event) {
        _vm.mobileNav = !_vm.mobileNav;
      }
    }
  }, [_c("div", {
    staticClass: "nav-icon mx-auto",
    "class": {
      open: _vm.mobileNav
    }
  }, [_c("div")])]), _vm._v(" "), _c("div", {
    staticClass: "mobile-nav d-md-none d-flex justify-content-center align-items-center",
    "class": {
      open: _vm.mobileNav
    }
  }, [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.mobileNav ? _c("li", {
    staticClass: "list-unstyled text-center"
  }, [_c("ul", {
    staticClass: "my-header-link"
  }, [_c("a", {
    staticClass: "clean-a header-link",
    attrs: {
      href: "https://github.com/krthush"
    }
  }, [_vm._v("Github")])]), _vm._v(" "), _c("ul", {
    staticClass: "my-header-link"
  }, [_c("a", {
    staticClass: "clean-a header-link",
    attrs: {
      href: "https://www.linkedin.com/in/thushaan-rajaratnam-98452414b/"
    }
  }, [_vm._v("LinkedIn")])]), _vm._v(" "), _c("ul", {
    staticClass: "my-header-link"
  }, [_c("a", {
    staticClass: "clean-a header-link",
    attrs: {
      href: "/download/Thushaan-Rajaratnam-CV.pdf"
    }
  }, [_vm._v("CV")])])]) : _vm._e()])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-4 row margin-b"
  }, [_c("div", {
    staticClass: "col"
  }, _vm._l(_vm.projects, function (project) {
    return _c("project-list-item", {
      key: project.id,
      attrs: {
        project: project
      }
    });
  }), 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "my-4 row"
  }, [_c("div", {
    staticClass: "col mb-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-10"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("button", {
    staticClass: "clean-button",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#" + _vm.project.id + "points"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMoreInfo();
      }
    }
  }, [_c("span", {
    staticClass: "sub-heading"
  }, [_vm._v("\n                                " + _vm._s(_vm.project.name) + "\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "collapse points",
    attrs: {
      id: _vm.project.id + "points"
    }
  }, [_c("div", {
    staticClass: "my-4 points-text"
  }, [_c("li", {
    staticClass: "list-unstyled"
  }, _vm._l(_vm.project.points, function (point) {
    return _c("ul", [_vm._v(_vm._s(point))]);
  }), 0)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2",
    staticStyle: {
      "min-width": "50px",
      "flex-grow": "10"
    }
  }, [_c("transition-group", {
    staticClass: "d-flex flex-column",
    attrs: {
      name: "slide-fade",
      appear: "",
      tag: "div"
    }
  }, [_vm._l(_vm.project.links, function (link, index) {
    return _vm.moreInfo ? [link.name == "Video" ? _c("button", {
      key: "btn-" + link.id,
      staticClass: "mt-2 clean-button site-link slide-fade mx-auto",
      "class": {
        "mt-4": index > 0
      },
      attrs: {
        type: "button",
        "data-toggle": "modal",
        "data-target": "#" + link.id + "modal"
      },
      on: {
        click: function click($event) {
          return _vm.videoClicked(link.id + "video");
        }
      }
    }, [_vm._v("\n                            Video\n                        ")]) : _c("a", {
      key: "link-" + link.id,
      staticClass: "mt-2 clean-a site-link slide-fade mx-auto",
      "class": {
        "mt-4": index > 0
      },
      attrs: {
        href: link.link
      }
    }, [_vm._v("\n                            " + _vm._s(link.name) + "\n                        ")])] : _vm._e();
  })], 2)], 1)]), _vm._v(" "), _vm._l(_vm.videoLinks, function (link) {
    return _c("div", {
      staticClass: "modal modal-wide fade",
      attrs: {
        id: link.id + "modal",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true"
      }
    }, [_c("div", {
      staticClass: "modal-dialog modal-dialog-centered video-dialog",
      attrs: {
        role: "document"
      }
    }, [_c("div", {
      staticClass: "modal-content video-content"
    }, [_c("div", {
      staticClass: "modal-body"
    }, [_c("div", {
      staticClass: "row w-100"
    }, [_c("div", {
      staticClass: "col-12 relative-position p-0"
    }, [_vm._m(0, true), _vm._v(" "), _c("video", {
      staticClass: "w-100",
      attrs: {
        id: link.id + "video",
        controls: ""
      }
    }, [_c("source", {
      attrs: {
        src: link.link,
        type: "video/mp4"
      }
    })])])])])])])]);
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "close close-btn",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.reveal ? _c("div", {
    staticClass: "fade-in col px-4"
  }, _vm._l(_vm.sections, function (section) {
    return _c("div", {
      key: section.id
    }, [_c("h1", {
      staticClass: "sub-heading"
    }, [_vm._v(_vm._s(section.name) + ":")]), _vm._v(" "), _c("project-list", {
      attrs: {
        projects: section.projects
      }
    })], 1);
  }), 0) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col welcome-text text-center px-4"
  }, [_c("div", {
    attrs: {
      id: "typed-strings"
    }
  }, [_c("p", [_vm._v("Hi, I'm Thush")]), _vm._v(" "), _c("p", [_vm._v("You'll find what I've made here.")])]), _vm._v(" "), _c("span", {
    attrs: {
      id: "typed"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ProjectList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProjectList.vue */ "./resources/js/components/ProjectList.vue");
/* harmony import */ var _components_ProjectListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectListItem.vue */ "./resources/js/components/ProjectListItem.vue");
/* harmony import */ var _components_TheWelcomeContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TheWelcomeContent.vue */ "./resources/js/components/TheWelcomeContent.vue");
/* harmony import */ var _components_TheWelcomeText_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TheWelcomeText.vue */ "./resources/js/components/TheWelcomeText.vue");
/* harmony import */ var _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AppHeader.vue */ "./resources/js/components/AppHeader.vue");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = (__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")["default"]);

/**
 * Import and register components
 */






// Register components globally
Vue.component('project-list', _components_ProjectList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.component('project-list-item', _components_ProjectListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
Vue.component('the-welcome-content', _components_TheWelcomeContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
Vue.component('the-welcome-text', _components_TheWelcomeText_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('app-header', _components_AppHeader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap  v5.3.3 (https://getbootstrap.com/)\n * Copyright 2011-2024 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n[data-v-0851419a]:root,\n[data-bs-theme=light][data-v-0851419a] {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-primary-rgb: 13, 110, 253;\n  --bs-secondary-rgb: 108, 117, 125;\n  --bs-success-rgb: 25, 135, 84;\n  --bs-info-rgb: 13, 202, 240;\n  --bs-warning-rgb: 255, 193, 7;\n  --bs-danger-rgb: 220, 53, 69;\n  --bs-light-rgb: 248, 249, 250;\n  --bs-dark-rgb: 33, 37, 41;\n  --bs-primary-text-emphasis: #052c65;\n  --bs-secondary-text-emphasis: #2b2f32;\n  --bs-success-text-emphasis: #0a3622;\n  --bs-info-text-emphasis: #055160;\n  --bs-warning-text-emphasis: #664d03;\n  --bs-danger-text-emphasis: #58151c;\n  --bs-light-text-emphasis: #495057;\n  --bs-dark-text-emphasis: #495057;\n  --bs-primary-bg-subtle: #cfe2ff;\n  --bs-secondary-bg-subtle: #e2e3e5;\n  --bs-success-bg-subtle: #d1e7dd;\n  --bs-info-bg-subtle: #cff4fc;\n  --bs-warning-bg-subtle: #fff3cd;\n  --bs-danger-bg-subtle: #f8d7da;\n  --bs-light-bg-subtle: #fcfcfd;\n  --bs-dark-bg-subtle: #ced4da;\n  --bs-primary-border-subtle: #9ec5fe;\n  --bs-secondary-border-subtle: #c4c8cb;\n  --bs-success-border-subtle: #a3cfbb;\n  --bs-info-border-subtle: #9eeaf9;\n  --bs-warning-border-subtle: #ffe69c;\n  --bs-danger-border-subtle: #f1aeb5;\n  --bs-light-border-subtle: #e9ecef;\n  --bs-dark-border-subtle: #adb5bd;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg: #fff;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-emphasis-color: #000;\n  --bs-emphasis-color-rgb: 0, 0, 0;\n  --bs-secondary-color: rgba(33, 37, 41, 0.75);\n  --bs-secondary-color-rgb: 33, 37, 41;\n  --bs-secondary-bg: #e9ecef;\n  --bs-secondary-bg-rgb: 233, 236, 239;\n  --bs-tertiary-color: rgba(33, 37, 41, 0.5);\n  --bs-tertiary-color-rgb: 33, 37, 41;\n  --bs-tertiary-bg: #f8f9fa;\n  --bs-tertiary-bg-rgb: 248, 249, 250;\n  --bs-heading-color: inherit;\n  --bs-link-color: #0d6efd;\n  --bs-link-color-rgb: 13, 110, 253;\n  --bs-link-decoration: underline;\n  --bs-link-hover-color: #0a58ca;\n  --bs-link-hover-color-rgb: 10, 88, 202;\n  --bs-code-color: #d63384;\n  --bs-highlight-color: #212529;\n  --bs-highlight-bg: #fff3cd;\n  --bs-border-width: 1px;\n  --bs-border-style: solid;\n  --bs-border-color: #dee2e6;\n  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);\n  --bs-border-radius: 0.375rem;\n  --bs-border-radius-sm: 0.25rem;\n  --bs-border-radius-lg: 0.5rem;\n  --bs-border-radius-xl: 1rem;\n  --bs-border-radius-xxl: 2rem;\n  --bs-border-radius-2xl: var(--bs-border-radius-xxl);\n  --bs-border-radius-pill: 50rem;\n  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-focus-ring-width: 0.25rem;\n  --bs-focus-ring-opacity: 0.25;\n  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);\n  --bs-form-valid-color: #198754;\n  --bs-form-valid-border-color: #198754;\n  --bs-form-invalid-color: #dc3545;\n  --bs-form-invalid-border-color: #dc3545;\n}\n[data-bs-theme=dark][data-v-0851419a] {\n  color-scheme: dark;\n  --bs-body-color: #dee2e6;\n  --bs-body-color-rgb: 222, 226, 230;\n  --bs-body-bg: #212529;\n  --bs-body-bg-rgb: 33, 37, 41;\n  --bs-emphasis-color: #fff;\n  --bs-emphasis-color-rgb: 255, 255, 255;\n  --bs-secondary-color: rgba(222, 226, 230, 0.75);\n  --bs-secondary-color-rgb: 222, 226, 230;\n  --bs-secondary-bg: #343a40;\n  --bs-secondary-bg-rgb: 52, 58, 64;\n  --bs-tertiary-color: rgba(222, 226, 230, 0.5);\n  --bs-tertiary-color-rgb: 222, 226, 230;\n  --bs-tertiary-bg: #2b3035;\n  --bs-tertiary-bg-rgb: 43, 48, 53;\n  --bs-primary-text-emphasis: #6ea8fe;\n  --bs-secondary-text-emphasis: #a7acb1;\n  --bs-success-text-emphasis: #75b798;\n  --bs-info-text-emphasis: #6edff6;\n  --bs-warning-text-emphasis: #ffda6a;\n  --bs-danger-text-emphasis: #ea868f;\n  --bs-light-text-emphasis: #f8f9fa;\n  --bs-dark-text-emphasis: #dee2e6;\n  --bs-primary-bg-subtle: #031633;\n  --bs-secondary-bg-subtle: #161719;\n  --bs-success-bg-subtle: #051b11;\n  --bs-info-bg-subtle: #032830;\n  --bs-warning-bg-subtle: #332701;\n  --bs-danger-bg-subtle: #2c0b0e;\n  --bs-light-bg-subtle: #343a40;\n  --bs-dark-bg-subtle: #1a1d20;\n  --bs-primary-border-subtle: #084298;\n  --bs-secondary-border-subtle: #41464b;\n  --bs-success-border-subtle: #0f5132;\n  --bs-info-border-subtle: #087990;\n  --bs-warning-border-subtle: #997404;\n  --bs-danger-border-subtle: #842029;\n  --bs-light-border-subtle: #495057;\n  --bs-dark-border-subtle: #343a40;\n  --bs-heading-color: inherit;\n  --bs-link-color: #6ea8fe;\n  --bs-link-hover-color: #8bb9fe;\n  --bs-link-color-rgb: 110, 168, 254;\n  --bs-link-hover-color-rgb: 139, 185, 254;\n  --bs-code-color: #e685b5;\n  --bs-highlight-color: #dee2e6;\n  --bs-highlight-bg: #664d03;\n  --bs-border-color: #495057;\n  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);\n  --bs-form-valid-color: #75b798;\n  --bs-form-valid-border-color: #75b798;\n  --bs-form-invalid-color: #ea868f;\n  --bs-form-invalid-border-color: #ea868f;\n}\n*[data-v-0851419a],\n*[data-v-0851419a]::before,\n*[data-v-0851419a]::after {\n  box-sizing: border-box;\n}\n@media (prefers-reduced-motion: no-preference) {\n[data-v-0851419a]:root {\n    scroll-behavior: smooth;\n}\n}\nbody[data-v-0851419a] {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhr[data-v-0851419a] {\n  margin: 1rem 0;\n  color: inherit;\n  border: 0;\n  border-top: var(--bs-border-width) solid;\n  opacity: 0.25;\n}\nh6[data-v-0851419a], .h6[data-v-0851419a], h5[data-v-0851419a], .h5[data-v-0851419a], h4[data-v-0851419a], .h4[data-v-0851419a], h3[data-v-0851419a], .h3[data-v-0851419a], h2[data-v-0851419a], .h2[data-v-0851419a], h1[data-v-0851419a], .h1[data-v-0851419a] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n  color: var(--bs-heading-color);\n}\nh1[data-v-0851419a], .h1[data-v-0851419a] {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\nh1[data-v-0851419a], .h1[data-v-0851419a] {\n    font-size: 2.5rem;\n}\n}\nh2[data-v-0851419a], .h2[data-v-0851419a] {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\nh2[data-v-0851419a], .h2[data-v-0851419a] {\n    font-size: 2rem;\n}\n}\nh3[data-v-0851419a], .h3[data-v-0851419a] {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\nh3[data-v-0851419a], .h3[data-v-0851419a] {\n    font-size: 1.75rem;\n}\n}\nh4[data-v-0851419a], .h4[data-v-0851419a] {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\nh4[data-v-0851419a], .h4[data-v-0851419a] {\n    font-size: 1.5rem;\n}\n}\nh5[data-v-0851419a], .h5[data-v-0851419a] {\n  font-size: 1.25rem;\n}\nh6[data-v-0851419a], .h6[data-v-0851419a] {\n  font-size: 1rem;\n}\np[data-v-0851419a] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title][data-v-0851419a] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress[data-v-0851419a] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol[data-v-0851419a],\nul[data-v-0851419a] {\n  padding-left: 2rem;\n}\nol[data-v-0851419a],\nul[data-v-0851419a],\ndl[data-v-0851419a] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol[data-v-0851419a],\nul ul[data-v-0851419a],\nol ul[data-v-0851419a],\nul ol[data-v-0851419a] {\n  margin-bottom: 0;\n}\ndt[data-v-0851419a] {\n  font-weight: 700;\n}\ndd[data-v-0851419a] {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote[data-v-0851419a] {\n  margin: 0 0 1rem;\n}\nb[data-v-0851419a],\nstrong[data-v-0851419a] {\n  font-weight: bolder;\n}\nsmall[data-v-0851419a], .small[data-v-0851419a] {\n  font-size: 0.875em;\n}\nmark[data-v-0851419a], .mark[data-v-0851419a] {\n  padding: 0.1875em;\n  color: var(--bs-highlight-color);\n  background-color: var(--bs-highlight-bg);\n}\nsub[data-v-0851419a],\nsup[data-v-0851419a] {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub[data-v-0851419a] {\n  bottom: -0.25em;\n}\nsup[data-v-0851419a] {\n  top: -0.5em;\n}\na[data-v-0851419a] {\n  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));\n  text-decoration: underline;\n}\na[data-v-0851419a]:hover {\n  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);\n}\na[data-v-0851419a]:not([href]):not([class]), a[data-v-0851419a]:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre[data-v-0851419a],\ncode[data-v-0851419a],\nkbd[data-v-0851419a],\nsamp[data-v-0851419a] {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n}\npre[data-v-0851419a] {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code[data-v-0851419a] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\ncode[data-v-0851419a] {\n  font-size: 0.875em;\n  color: var(--bs-code-color);\n  word-wrap: break-word;\n}\na > code[data-v-0851419a] {\n  color: inherit;\n}\nkbd[data-v-0851419a] {\n  padding: 0.1875rem 0.375rem;\n  font-size: 0.875em;\n  color: var(--bs-body-bg);\n  background-color: var(--bs-body-color);\n  border-radius: 0.25rem;\n}\nkbd kbd[data-v-0851419a] {\n  padding: 0;\n  font-size: 1em;\n}\nfigure[data-v-0851419a] {\n  margin: 0 0 1rem;\n}\nimg[data-v-0851419a],\nsvg[data-v-0851419a] {\n  vertical-align: middle;\n}\ntable[data-v-0851419a] {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\ncaption[data-v-0851419a] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-secondary-color);\n  text-align: left;\n}\nth[data-v-0851419a] {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nthead[data-v-0851419a],\ntbody[data-v-0851419a],\ntfoot[data-v-0851419a],\ntr[data-v-0851419a],\ntd[data-v-0851419a],\nth[data-v-0851419a] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\nlabel[data-v-0851419a] {\n  display: inline-block;\n}\nbutton[data-v-0851419a] {\n  border-radius: 0;\n}\nbutton[data-v-0851419a]:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput[data-v-0851419a],\nbutton[data-v-0851419a],\nselect[data-v-0851419a],\noptgroup[data-v-0851419a],\ntextarea[data-v-0851419a] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton[data-v-0851419a],\nselect[data-v-0851419a] {\n  text-transform: none;\n}\n[role=button][data-v-0851419a] {\n  cursor: pointer;\n}\nselect[data-v-0851419a] {\n  word-wrap: normal;\n}\nselect[data-v-0851419a]:disabled {\n  opacity: 1;\n}\n[list][data-v-0851419a]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\nbutton[data-v-0851419a],\n[type=button][data-v-0851419a],\n[type=reset][data-v-0851419a],\n[type=submit][data-v-0851419a] {\n  -webkit-appearance: button;\n}\nbutton[data-v-0851419a]:not(:disabled),\n[type=button][data-v-0851419a]:not(:disabled),\n[type=reset][data-v-0851419a]:not(:disabled),\n[type=submit][data-v-0851419a]:not(:disabled) {\n  cursor: pointer;\n}\n[data-v-0851419a]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ntextarea[data-v-0851419a] {\n  resize: vertical;\n}\nfieldset[data-v-0851419a] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend[data-v-0851419a] {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\nlegend[data-v-0851419a] {\n    font-size: 1.5rem;\n}\n}\nlegend + *[data-v-0851419a] {\n  clear: left;\n}\n[data-v-0851419a]::-webkit-datetime-edit-fields-wrapper,[data-v-0851419a]::-webkit-datetime-edit-text,[data-v-0851419a]::-webkit-datetime-edit-minute,[data-v-0851419a]::-webkit-datetime-edit-hour-field,[data-v-0851419a]::-webkit-datetime-edit-day-field,[data-v-0851419a]::-webkit-datetime-edit-month-field,[data-v-0851419a]::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n[data-v-0851419a]::-webkit-inner-spin-button {\n  height: auto;\n}\n[type=search][data-v-0851419a] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n[data-v-0851419a]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n[data-v-0851419a]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n[data-v-0851419a]::file-selector-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput[data-v-0851419a] {\n  display: inline-block;\n}\niframe[data-v-0851419a] {\n  border: 0;\n}\nsummary[data-v-0851419a] {\n  display: list-item;\n  cursor: pointer;\n}\nprogress[data-v-0851419a] {\n  vertical-align: baseline;\n}\n[hidden][data-v-0851419a] {\n  display: none !important;\n}\n.lead[data-v-0851419a] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1[data-v-0851419a] {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-1[data-v-0851419a] {\n    font-size: 5rem;\n}\n}\n.display-2[data-v-0851419a] {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-2[data-v-0851419a] {\n    font-size: 4.5rem;\n}\n}\n.display-3[data-v-0851419a] {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-3[data-v-0851419a] {\n    font-size: 4rem;\n}\n}\n.display-4[data-v-0851419a] {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-4[data-v-0851419a] {\n    font-size: 3.5rem;\n}\n}\n.display-5[data-v-0851419a] {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-5[data-v-0851419a] {\n    font-size: 3rem;\n}\n}\n.display-6[data-v-0851419a] {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n.display-6[data-v-0851419a] {\n    font-size: 2.5rem;\n}\n}\n.list-unstyled[data-v-0851419a] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline[data-v-0851419a] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item[data-v-0851419a] {\n  display: inline-block;\n}\n.list-inline-item[data-v-0851419a]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism[data-v-0851419a] {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n.blockquote[data-v-0851419a] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote[data-v-0851419a] > :last-child {\n  margin-bottom: 0;\n}\n.blockquote-footer[data-v-0851419a] {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer[data-v-0851419a]::before {\n  content: \"— \";\n}\n.img-fluid[data-v-0851419a] {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail[data-v-0851419a] {\n  padding: 0.25rem;\n  background-color: var(--bs-body-bg);\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  max-width: 100%;\n  height: auto;\n}\n.figure[data-v-0851419a] {\n  display: inline-block;\n}\n.figure-img[data-v-0851419a] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption[data-v-0851419a] {\n  font-size: 0.875em;\n  color: var(--bs-secondary-color);\n}\n.container[data-v-0851419a],\n.container-fluid[data-v-0851419a],\n.container-xxl[data-v-0851419a],\n.container-xl[data-v-0851419a],\n.container-lg[data-v-0851419a],\n.container-md[data-v-0851419a],\n.container-sm[data-v-0851419a] {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * .5);\n  padding-left: calc(var(--bs-gutter-x) * .5);\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n.container-sm[data-v-0851419a], .container[data-v-0851419a] {\n    max-width: 540px;\n}\n}\n@media (min-width: 768px) {\n.container-md[data-v-0851419a], .container-sm[data-v-0851419a], .container[data-v-0851419a] {\n    max-width: 720px;\n}\n}\n@media (min-width: 992px) {\n.container-lg[data-v-0851419a], .container-md[data-v-0851419a], .container-sm[data-v-0851419a], .container[data-v-0851419a] {\n    max-width: 960px;\n}\n}\n@media (min-width: 1200px) {\n.container-xl[data-v-0851419a], .container-lg[data-v-0851419a], .container-md[data-v-0851419a], .container-sm[data-v-0851419a], .container[data-v-0851419a] {\n    max-width: 1140px;\n}\n}\n@media (min-width: 1400px) {\n.container-xxl[data-v-0851419a], .container-xl[data-v-0851419a], .container-lg[data-v-0851419a], .container-md[data-v-0851419a], .container-sm[data-v-0851419a], .container[data-v-0851419a] {\n    max-width: 1320px;\n}\n}\n[data-v-0851419a]:root {\n  --bs-breakpoint-xs: 0;\n  --bs-breakpoint-sm: 576px;\n  --bs-breakpoint-md: 768px;\n  --bs-breakpoint-lg: 992px;\n  --bs-breakpoint-xl: 1200px;\n  --bs-breakpoint-xxl: 1400px;\n}\n.row[data-v-0851419a] {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-.5 * var(--bs-gutter-x));\n  margin-left: calc(-.5 * var(--bs-gutter-x));\n}\n.row > *[data-v-0851419a] {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * .5);\n  padding-left: calc(var(--bs-gutter-x) * .5);\n  margin-top: var(--bs-gutter-y);\n}\n.col[data-v-0851419a] {\n  flex: 1 0 0%;\n}\n.row-cols-auto > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: auto;\n}\n.row-cols-1 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.row-cols-2 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.row-cols-3 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n.row-cols-4 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.row-cols-5 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.row-cols-6 > *[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n.col-auto[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: auto;\n}\n.col-1[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n.col-2[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n.col-3[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.col-4[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n.col-5[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n.col-6[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.col-7[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n.col-8[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n.col-9[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 75%;\n}\n.col-10[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n.col-11[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n.col-12[data-v-0851419a] {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.offset-1[data-v-0851419a] {\n  margin-left: 8.33333333%;\n}\n.offset-2[data-v-0851419a] {\n  margin-left: 16.66666667%;\n}\n.offset-3[data-v-0851419a] {\n  margin-left: 25%;\n}\n.offset-4[data-v-0851419a] {\n  margin-left: 33.33333333%;\n}\n.offset-5[data-v-0851419a] {\n  margin-left: 41.66666667%;\n}\n.offset-6[data-v-0851419a] {\n  margin-left: 50%;\n}\n.offset-7[data-v-0851419a] {\n  margin-left: 58.33333333%;\n}\n.offset-8[data-v-0851419a] {\n  margin-left: 66.66666667%;\n}\n.offset-9[data-v-0851419a] {\n  margin-left: 75%;\n}\n.offset-10[data-v-0851419a] {\n  margin-left: 83.33333333%;\n}\n.offset-11[data-v-0851419a] {\n  margin-left: 91.66666667%;\n}\n.g-0[data-v-0851419a],\n.gx-0[data-v-0851419a] {\n  --bs-gutter-x: 0;\n}\n.g-0[data-v-0851419a],\n.gy-0[data-v-0851419a] {\n  --bs-gutter-y: 0;\n}\n.g-1[data-v-0851419a],\n.gx-1[data-v-0851419a] {\n  --bs-gutter-x: 0.25rem;\n}\n.g-1[data-v-0851419a],\n.gy-1[data-v-0851419a] {\n  --bs-gutter-y: 0.25rem;\n}\n.g-2[data-v-0851419a],\n.gx-2[data-v-0851419a] {\n  --bs-gutter-x: 0.5rem;\n}\n.g-2[data-v-0851419a],\n.gy-2[data-v-0851419a] {\n  --bs-gutter-y: 0.5rem;\n}\n.g-3[data-v-0851419a],\n.gx-3[data-v-0851419a] {\n  --bs-gutter-x: 1rem;\n}\n.g-3[data-v-0851419a],\n.gy-3[data-v-0851419a] {\n  --bs-gutter-y: 1rem;\n}\n.g-4[data-v-0851419a],\n.gx-4[data-v-0851419a] {\n  --bs-gutter-x: 1.5rem;\n}\n.g-4[data-v-0851419a],\n.gy-4[data-v-0851419a] {\n  --bs-gutter-y: 1.5rem;\n}\n.g-5[data-v-0851419a],\n.gx-5[data-v-0851419a] {\n  --bs-gutter-x: 3rem;\n}\n.g-5[data-v-0851419a],\n.gy-5[data-v-0851419a] {\n  --bs-gutter-y: 3rem;\n}\n@media (min-width: 576px) {\n.col-sm[data-v-0851419a] {\n    flex: 1 0 0%;\n}\n.row-cols-sm-auto > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-sm-1 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-sm-2 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-sm-3 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.row-cols-sm-4 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-sm-5 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-sm-6 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-sm-auto[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-sm-1[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-sm-2[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-sm-3[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-sm-4[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-sm-5[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-sm-6[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-sm-7[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-sm-8[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-sm-9[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-sm-10[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-sm-11[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-sm-12[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-sm-0[data-v-0851419a] {\n    margin-left: 0;\n}\n.offset-sm-1[data-v-0851419a] {\n    margin-left: 8.33333333%;\n}\n.offset-sm-2[data-v-0851419a] {\n    margin-left: 16.66666667%;\n}\n.offset-sm-3[data-v-0851419a] {\n    margin-left: 25%;\n}\n.offset-sm-4[data-v-0851419a] {\n    margin-left: 33.33333333%;\n}\n.offset-sm-5[data-v-0851419a] {\n    margin-left: 41.66666667%;\n}\n.offset-sm-6[data-v-0851419a] {\n    margin-left: 50%;\n}\n.offset-sm-7[data-v-0851419a] {\n    margin-left: 58.33333333%;\n}\n.offset-sm-8[data-v-0851419a] {\n    margin-left: 66.66666667%;\n}\n.offset-sm-9[data-v-0851419a] {\n    margin-left: 75%;\n}\n.offset-sm-10[data-v-0851419a] {\n    margin-left: 83.33333333%;\n}\n.offset-sm-11[data-v-0851419a] {\n    margin-left: 91.66666667%;\n}\n.g-sm-0[data-v-0851419a],\n.gx-sm-0[data-v-0851419a] {\n    --bs-gutter-x: 0;\n}\n.g-sm-0[data-v-0851419a],\n.gy-sm-0[data-v-0851419a] {\n    --bs-gutter-y: 0;\n}\n.g-sm-1[data-v-0851419a],\n.gx-sm-1[data-v-0851419a] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-sm-1[data-v-0851419a],\n.gy-sm-1[data-v-0851419a] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-sm-2[data-v-0851419a],\n.gx-sm-2[data-v-0851419a] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-sm-2[data-v-0851419a],\n.gy-sm-2[data-v-0851419a] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-sm-3[data-v-0851419a],\n.gx-sm-3[data-v-0851419a] {\n    --bs-gutter-x: 1rem;\n}\n.g-sm-3[data-v-0851419a],\n.gy-sm-3[data-v-0851419a] {\n    --bs-gutter-y: 1rem;\n}\n.g-sm-4[data-v-0851419a],\n.gx-sm-4[data-v-0851419a] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-sm-4[data-v-0851419a],\n.gy-sm-4[data-v-0851419a] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-sm-5[data-v-0851419a],\n.gx-sm-5[data-v-0851419a] {\n    --bs-gutter-x: 3rem;\n}\n.g-sm-5[data-v-0851419a],\n.gy-sm-5[data-v-0851419a] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 768px) {\n.col-md[data-v-0851419a] {\n    flex: 1 0 0%;\n}\n.row-cols-md-auto > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-md-1 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-md-2 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-md-3 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.row-cols-md-4 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-md-5 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-md-6 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-md-auto[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-md-1[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-md-2[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-md-3[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-md-4[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-md-5[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-md-6[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-md-7[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-md-8[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-md-9[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-md-10[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-md-11[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-md-12[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-md-0[data-v-0851419a] {\n    margin-left: 0;\n}\n.offset-md-1[data-v-0851419a] {\n    margin-left: 8.33333333%;\n}\n.offset-md-2[data-v-0851419a] {\n    margin-left: 16.66666667%;\n}\n.offset-md-3[data-v-0851419a] {\n    margin-left: 25%;\n}\n.offset-md-4[data-v-0851419a] {\n    margin-left: 33.33333333%;\n}\n.offset-md-5[data-v-0851419a] {\n    margin-left: 41.66666667%;\n}\n.offset-md-6[data-v-0851419a] {\n    margin-left: 50%;\n}\n.offset-md-7[data-v-0851419a] {\n    margin-left: 58.33333333%;\n}\n.offset-md-8[data-v-0851419a] {\n    margin-left: 66.66666667%;\n}\n.offset-md-9[data-v-0851419a] {\n    margin-left: 75%;\n}\n.offset-md-10[data-v-0851419a] {\n    margin-left: 83.33333333%;\n}\n.offset-md-11[data-v-0851419a] {\n    margin-left: 91.66666667%;\n}\n.g-md-0[data-v-0851419a],\n.gx-md-0[data-v-0851419a] {\n    --bs-gutter-x: 0;\n}\n.g-md-0[data-v-0851419a],\n.gy-md-0[data-v-0851419a] {\n    --bs-gutter-y: 0;\n}\n.g-md-1[data-v-0851419a],\n.gx-md-1[data-v-0851419a] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-md-1[data-v-0851419a],\n.gy-md-1[data-v-0851419a] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-md-2[data-v-0851419a],\n.gx-md-2[data-v-0851419a] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-md-2[data-v-0851419a],\n.gy-md-2[data-v-0851419a] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-md-3[data-v-0851419a],\n.gx-md-3[data-v-0851419a] {\n    --bs-gutter-x: 1rem;\n}\n.g-md-3[data-v-0851419a],\n.gy-md-3[data-v-0851419a] {\n    --bs-gutter-y: 1rem;\n}\n.g-md-4[data-v-0851419a],\n.gx-md-4[data-v-0851419a] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-md-4[data-v-0851419a],\n.gy-md-4[data-v-0851419a] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-md-5[data-v-0851419a],\n.gx-md-5[data-v-0851419a] {\n    --bs-gutter-x: 3rem;\n}\n.g-md-5[data-v-0851419a],\n.gy-md-5[data-v-0851419a] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 992px) {\n.col-lg[data-v-0851419a] {\n    flex: 1 0 0%;\n}\n.row-cols-lg-auto > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-lg-1 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-lg-2 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-lg-3 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.row-cols-lg-4 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-lg-5 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-lg-6 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-lg-auto[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-lg-1[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-lg-2[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-lg-3[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-lg-4[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-lg-5[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-lg-6[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-lg-7[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-lg-8[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-lg-9[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-lg-10[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-lg-11[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-lg-12[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-lg-0[data-v-0851419a] {\n    margin-left: 0;\n}\n.offset-lg-1[data-v-0851419a] {\n    margin-left: 8.33333333%;\n}\n.offset-lg-2[data-v-0851419a] {\n    margin-left: 16.66666667%;\n}\n.offset-lg-3[data-v-0851419a] {\n    margin-left: 25%;\n}\n.offset-lg-4[data-v-0851419a] {\n    margin-left: 33.33333333%;\n}\n.offset-lg-5[data-v-0851419a] {\n    margin-left: 41.66666667%;\n}\n.offset-lg-6[data-v-0851419a] {\n    margin-left: 50%;\n}\n.offset-lg-7[data-v-0851419a] {\n    margin-left: 58.33333333%;\n}\n.offset-lg-8[data-v-0851419a] {\n    margin-left: 66.66666667%;\n}\n.offset-lg-9[data-v-0851419a] {\n    margin-left: 75%;\n}\n.offset-lg-10[data-v-0851419a] {\n    margin-left: 83.33333333%;\n}\n.offset-lg-11[data-v-0851419a] {\n    margin-left: 91.66666667%;\n}\n.g-lg-0[data-v-0851419a],\n.gx-lg-0[data-v-0851419a] {\n    --bs-gutter-x: 0;\n}\n.g-lg-0[data-v-0851419a],\n.gy-lg-0[data-v-0851419a] {\n    --bs-gutter-y: 0;\n}\n.g-lg-1[data-v-0851419a],\n.gx-lg-1[data-v-0851419a] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-lg-1[data-v-0851419a],\n.gy-lg-1[data-v-0851419a] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-lg-2[data-v-0851419a],\n.gx-lg-2[data-v-0851419a] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-lg-2[data-v-0851419a],\n.gy-lg-2[data-v-0851419a] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-lg-3[data-v-0851419a],\n.gx-lg-3[data-v-0851419a] {\n    --bs-gutter-x: 1rem;\n}\n.g-lg-3[data-v-0851419a],\n.gy-lg-3[data-v-0851419a] {\n    --bs-gutter-y: 1rem;\n}\n.g-lg-4[data-v-0851419a],\n.gx-lg-4[data-v-0851419a] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-lg-4[data-v-0851419a],\n.gy-lg-4[data-v-0851419a] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-lg-5[data-v-0851419a],\n.gx-lg-5[data-v-0851419a] {\n    --bs-gutter-x: 3rem;\n}\n.g-lg-5[data-v-0851419a],\n.gy-lg-5[data-v-0851419a] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 1200px) {\n.col-xl[data-v-0851419a] {\n    flex: 1 0 0%;\n}\n.row-cols-xl-auto > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-xl-1 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-xl-2 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-xl-3 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.row-cols-xl-4 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-xl-5 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-xl-6 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xl-auto[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-xl-1[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-xl-2[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xl-3[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-xl-4[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-xl-5[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-xl-6[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-xl-7[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-xl-8[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-xl-9[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-xl-10[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-xl-11[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-xl-12[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-xl-0[data-v-0851419a] {\n    margin-left: 0;\n}\n.offset-xl-1[data-v-0851419a] {\n    margin-left: 8.33333333%;\n}\n.offset-xl-2[data-v-0851419a] {\n    margin-left: 16.66666667%;\n}\n.offset-xl-3[data-v-0851419a] {\n    margin-left: 25%;\n}\n.offset-xl-4[data-v-0851419a] {\n    margin-left: 33.33333333%;\n}\n.offset-xl-5[data-v-0851419a] {\n    margin-left: 41.66666667%;\n}\n.offset-xl-6[data-v-0851419a] {\n    margin-left: 50%;\n}\n.offset-xl-7[data-v-0851419a] {\n    margin-left: 58.33333333%;\n}\n.offset-xl-8[data-v-0851419a] {\n    margin-left: 66.66666667%;\n}\n.offset-xl-9[data-v-0851419a] {\n    margin-left: 75%;\n}\n.offset-xl-10[data-v-0851419a] {\n    margin-left: 83.33333333%;\n}\n.offset-xl-11[data-v-0851419a] {\n    margin-left: 91.66666667%;\n}\n.g-xl-0[data-v-0851419a],\n.gx-xl-0[data-v-0851419a] {\n    --bs-gutter-x: 0;\n}\n.g-xl-0[data-v-0851419a],\n.gy-xl-0[data-v-0851419a] {\n    --bs-gutter-y: 0;\n}\n.g-xl-1[data-v-0851419a],\n.gx-xl-1[data-v-0851419a] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-xl-1[data-v-0851419a],\n.gy-xl-1[data-v-0851419a] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-xl-2[data-v-0851419a],\n.gx-xl-2[data-v-0851419a] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-xl-2[data-v-0851419a],\n.gy-xl-2[data-v-0851419a] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-xl-3[data-v-0851419a],\n.gx-xl-3[data-v-0851419a] {\n    --bs-gutter-x: 1rem;\n}\n.g-xl-3[data-v-0851419a],\n.gy-xl-3[data-v-0851419a] {\n    --bs-gutter-y: 1rem;\n}\n.g-xl-4[data-v-0851419a],\n.gx-xl-4[data-v-0851419a] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-xl-4[data-v-0851419a],\n.gy-xl-4[data-v-0851419a] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-xl-5[data-v-0851419a],\n.gx-xl-5[data-v-0851419a] {\n    --bs-gutter-x: 3rem;\n}\n.g-xl-5[data-v-0851419a],\n.gy-xl-5[data-v-0851419a] {\n    --bs-gutter-y: 3rem;\n}\n}\n@media (min-width: 1400px) {\n.col-xxl[data-v-0851419a] {\n    flex: 1 0 0%;\n}\n.row-cols-xxl-auto > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.row-cols-xxl-1 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.row-cols-xxl-2 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.row-cols-xxl-3 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.row-cols-xxl-4 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.row-cols-xxl-5 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 20%;\n}\n.row-cols-xxl-6 > *[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xxl-auto[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: auto;\n}\n.col-xxl-1[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n}\n.col-xxl-2[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n}\n.col-xxl-3[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 25%;\n}\n.col-xxl-4[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n}\n.col-xxl-5[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n}\n.col-xxl-6[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.col-xxl-7[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n}\n.col-xxl-8[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n}\n.col-xxl-9[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 75%;\n}\n.col-xxl-10[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n}\n.col-xxl-11[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n}\n.col-xxl-12[data-v-0851419a] {\n    flex: 0 0 auto;\n    width: 100%;\n}\n.offset-xxl-0[data-v-0851419a] {\n    margin-left: 0;\n}\n.offset-xxl-1[data-v-0851419a] {\n    margin-left: 8.33333333%;\n}\n.offset-xxl-2[data-v-0851419a] {\n    margin-left: 16.66666667%;\n}\n.offset-xxl-3[data-v-0851419a] {\n    margin-left: 25%;\n}\n.offset-xxl-4[data-v-0851419a] {\n    margin-left: 33.33333333%;\n}\n.offset-xxl-5[data-v-0851419a] {\n    margin-left: 41.66666667%;\n}\n.offset-xxl-6[data-v-0851419a] {\n    margin-left: 50%;\n}\n.offset-xxl-7[data-v-0851419a] {\n    margin-left: 58.33333333%;\n}\n.offset-xxl-8[data-v-0851419a] {\n    margin-left: 66.66666667%;\n}\n.offset-xxl-9[data-v-0851419a] {\n    margin-left: 75%;\n}\n.offset-xxl-10[data-v-0851419a] {\n    margin-left: 83.33333333%;\n}\n.offset-xxl-11[data-v-0851419a] {\n    margin-left: 91.66666667%;\n}\n.g-xxl-0[data-v-0851419a],\n.gx-xxl-0[data-v-0851419a] {\n    --bs-gutter-x: 0;\n}\n.g-xxl-0[data-v-0851419a],\n.gy-xxl-0[data-v-0851419a] {\n    --bs-gutter-y: 0;\n}\n.g-xxl-1[data-v-0851419a],\n.gx-xxl-1[data-v-0851419a] {\n    --bs-gutter-x: 0.25rem;\n}\n.g-xxl-1[data-v-0851419a],\n.gy-xxl-1[data-v-0851419a] {\n    --bs-gutter-y: 0.25rem;\n}\n.g-xxl-2[data-v-0851419a],\n.gx-xxl-2[data-v-0851419a] {\n    --bs-gutter-x: 0.5rem;\n}\n.g-xxl-2[data-v-0851419a],\n.gy-xxl-2[data-v-0851419a] {\n    --bs-gutter-y: 0.5rem;\n}\n.g-xxl-3[data-v-0851419a],\n.gx-xxl-3[data-v-0851419a] {\n    --bs-gutter-x: 1rem;\n}\n.g-xxl-3[data-v-0851419a],\n.gy-xxl-3[data-v-0851419a] {\n    --bs-gutter-y: 1rem;\n}\n.g-xxl-4[data-v-0851419a],\n.gx-xxl-4[data-v-0851419a] {\n    --bs-gutter-x: 1.5rem;\n}\n.g-xxl-4[data-v-0851419a],\n.gy-xxl-4[data-v-0851419a] {\n    --bs-gutter-y: 1.5rem;\n}\n.g-xxl-5[data-v-0851419a],\n.gx-xxl-5[data-v-0851419a] {\n    --bs-gutter-x: 3rem;\n}\n.g-xxl-5[data-v-0851419a],\n.gy-xxl-5[data-v-0851419a] {\n    --bs-gutter-y: 3rem;\n}\n}\n.table[data-v-0851419a] {\n  --bs-table-color-type: initial;\n  --bs-table-bg-type: initial;\n  --bs-table-color-state: initial;\n  --bs-table-bg-state: initial;\n  --bs-table-color: var(--bs-emphasis-color);\n  --bs-table-bg: var(--bs-body-bg);\n  --bs-table-border-color: var(--bs-border-color);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--bs-emphasis-color);\n  --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05);\n  --bs-table-active-color: var(--bs-emphasis-color);\n  --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1);\n  --bs-table-hover-color: var(--bs-emphasis-color);\n  --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  vertical-align: top;\n  border-color: var(--bs-table-border-color);\n}\n.table > :not(caption) > * > *[data-v-0851419a] {\n  padding: 0.5rem 0.5rem;\n  color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));\n  background-color: var(--bs-table-bg);\n  border-bottom-width: var(--bs-border-width);\n  box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));\n}\n.table > tbody[data-v-0851419a] {\n  vertical-align: inherit;\n}\n.table > thead[data-v-0851419a] {\n  vertical-align: bottom;\n}\n.table-group-divider[data-v-0851419a] {\n  border-top: calc(var(--bs-border-width) * 2) solid currentcolor;\n}\n.caption-top[data-v-0851419a] {\n  caption-side: top;\n}\n.table-sm > :not(caption) > * > *[data-v-0851419a] {\n  padding: 0.25rem 0.25rem;\n}\n.table-bordered > :not(caption) > *[data-v-0851419a] {\n  border-width: var(--bs-border-width) 0;\n}\n.table-bordered > :not(caption) > * > *[data-v-0851419a] {\n  border-width: 0 var(--bs-border-width);\n}\n.table-borderless > :not(caption) > * > *[data-v-0851419a] {\n  border-bottom-width: 0;\n}\n.table-borderless[data-v-0851419a] > :not(:first-child) {\n  border-top-width: 0;\n}\n.table-striped > tbody > tr:nth-of-type(odd) > *[data-v-0851419a] {\n  --bs-table-color-type: var(--bs-table-striped-color);\n  --bs-table-bg-type: var(--bs-table-striped-bg);\n}\n.table-striped-columns > :not(caption) > tr[data-v-0851419a] > :nth-child(even) {\n  --bs-table-color-type: var(--bs-table-striped-color);\n  --bs-table-bg-type: var(--bs-table-striped-bg);\n}\n.table-active[data-v-0851419a] {\n  --bs-table-color-state: var(--bs-table-active-color);\n  --bs-table-bg-state: var(--bs-table-active-bg);\n}\n.table-hover > tbody > tr:hover > *[data-v-0851419a] {\n  --bs-table-color-state: var(--bs-table-hover-color);\n  --bs-table-bg-state: var(--bs-table-hover-bg);\n}\n.table-primary[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #cfe2ff;\n  --bs-table-border-color: #a6b5cc;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-secondary[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #e2e3e5;\n  --bs-table-border-color: #b5b6b7;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-success[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #d1e7dd;\n  --bs-table-border-color: #a7b9b1;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-info[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #cff4fc;\n  --bs-table-border-color: #a6c3ca;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-warning[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #fff3cd;\n  --bs-table-border-color: #ccc2a4;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-danger[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #f8d7da;\n  --bs-table-border-color: #c6acae;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-light[data-v-0851419a] {\n  --bs-table-color: #000;\n  --bs-table-bg: #f8f9fa;\n  --bs-table-border-color: #c6c7c8;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-dark[data-v-0851419a] {\n  --bs-table-color: #fff;\n  --bs-table-bg: #212529;\n  --bs-table-border-color: #4d5154;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-responsive[data-v-0851419a] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 575.98px) {\n.table-responsive-sm[data-v-0851419a] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 767.98px) {\n.table-responsive-md[data-v-0851419a] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 991.98px) {\n.table-responsive-lg[data-v-0851419a] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 1199.98px) {\n.table-responsive-xl[data-v-0851419a] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n@media (max-width: 1399.98px) {\n.table-responsive-xxl[data-v-0851419a] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n}\n.form-label[data-v-0851419a] {\n  margin-bottom: 0.5rem;\n}\n.col-form-label[data-v-0851419a] {\n  padding-top: calc(0.375rem + var(--bs-border-width));\n  padding-bottom: calc(0.375rem + var(--bs-border-width));\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg[data-v-0851419a] {\n  padding-top: calc(0.5rem + var(--bs-border-width));\n  padding-bottom: calc(0.5rem + var(--bs-border-width));\n  font-size: 1.25rem;\n}\n.col-form-label-sm[data-v-0851419a] {\n  padding-top: calc(0.25rem + var(--bs-border-width));\n  padding-bottom: calc(0.25rem + var(--bs-border-width));\n  font-size: 0.875rem;\n}\n.form-text[data-v-0851419a] {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-secondary-color);\n}\n.form-control[data-v-0851419a] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: var(--bs-body-bg);\n  background-clip: padding-box;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-control[data-v-0851419a] {\n    transition: none;\n}\n}\n.form-control[type=file][data-v-0851419a] {\n  overflow: hidden;\n}\n.form-control[type=file][data-v-0851419a]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control[data-v-0851419a]:focus {\n  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control[data-v-0851419a]::-webkit-date-and-time-value {\n  min-width: 85px;\n  height: 1.5em;\n  margin: 0;\n}\n.form-control[data-v-0851419a]::-webkit-datetime-edit {\n  display: block;\n  padding: 0;\n}\n.form-control[data-v-0851419a]::-moz-placeholder {\n  color: var(--bs-secondary-color);\n  opacity: 1;\n}\n.form-control[data-v-0851419a]::placeholder {\n  color: var(--bs-secondary-color);\n  opacity: 1;\n}\n.form-control[data-v-0851419a]:disabled {\n  background-color: var(--bs-secondary-bg);\n  opacity: 1;\n}\n.form-control[data-v-0851419a]::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  margin-inline-end: 0.75rem;\n  color: var(--bs-body-color);\n  background-color: var(--bs-tertiary-bg);\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: var(--bs-border-width);\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-control[data-v-0851419a]::file-selector-button {\n    transition: none;\n}\n}\n.form-control[data-v-0851419a]:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: var(--bs-secondary-bg);\n}\n.form-control-plaintext[data-v-0851419a] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  background-color: transparent;\n  border: solid transparent;\n  border-width: var(--bs-border-width) 0;\n}\n.form-control-plaintext[data-v-0851419a]:focus {\n  outline: 0;\n}\n.form-control-plaintext.form-control-sm[data-v-0851419a], .form-control-plaintext.form-control-lg[data-v-0851419a] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm[data-v-0851419a] {\n  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n.form-control-sm[data-v-0851419a]::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-lg[data-v-0851419a] {\n  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n.form-control-lg[data-v-0851419a]::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  margin-inline-end: 1rem;\n}\ntextarea.form-control[data-v-0851419a] {\n  min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));\n}\ntextarea.form-control-sm[data-v-0851419a] {\n  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n}\ntextarea.form-control-lg[data-v-0851419a] {\n  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n}\n.form-control-color[data-v-0851419a] {\n  width: 3rem;\n  height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));\n  padding: 0.375rem;\n}\n.form-control-color[data-v-0851419a]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color[data-v-0851419a]::-moz-color-swatch {\n  border: 0 !important;\n  border-radius: var(--bs-border-radius);\n}\n.form-control-color[data-v-0851419a]::-webkit-color-swatch {\n  border: 0 !important;\n  border-radius: var(--bs-border-radius);\n}\n.form-control-color.form-control-sm[data-v-0851419a] {\n  height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n}\n.form-control-color.form-control-lg[data-v-0851419a] {\n  height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n}\n.form-select[data-v-0851419a] {\n  --bs-form-select-bg-img: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-select[data-v-0851419a] {\n    transition: none;\n}\n}\n.form-select[data-v-0851419a]:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple][data-v-0851419a], .form-select[size][data-v-0851419a]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select[data-v-0851419a]:disabled {\n  background-color: var(--bs-secondary-bg);\n}\n.form-select[data-v-0851419a]:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 var(--bs-body-color);\n}\n.form-select-sm[data-v-0851419a] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n.form-select-lg[data-v-0851419a] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n[data-bs-theme=dark] .form-select[data-v-0851419a] {\n  --bs-form-select-bg-img: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n}\n.form-check[data-v-0851419a] {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input[data-v-0851419a] {\n  float: left;\n  margin-left: -1.5em;\n}\n.form-check-reverse[data-v-0851419a] {\n  padding-right: 1.5em;\n  padding-left: 0;\n  text-align: right;\n}\n.form-check-reverse .form-check-input[data-v-0851419a] {\n  float: right;\n  margin-right: -1.5em;\n  margin-left: 0;\n}\n.form-check-input[data-v-0851419a] {\n  --bs-form-check-bg: var(--bs-body-bg);\n  flex-shrink: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: var(--bs-form-check-bg);\n  background-image: var(--bs-form-check-bg-image);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  -webkit-print-color-adjust: exact;\n          print-color-adjust: exact;\n}\n.form-check-input[type=checkbox][data-v-0851419a] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio][data-v-0851419a] {\n  border-radius: 50%;\n}\n.form-check-input[data-v-0851419a]:active {\n  filter: brightness(90%);\n}\n.form-check-input[data-v-0851419a]:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input[data-v-0851419a]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox][data-v-0851419a] {\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio][data-v-0851419a] {\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox][data-v-0851419a]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input[data-v-0851419a]:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label[data-v-0851419a], .form-check-input:disabled ~ .form-check-label[data-v-0851419a] {\n  cursor: default;\n  opacity: 0.5;\n}\n.form-switch[data-v-0851419a] {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input[data-v-0851419a] {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: var(--bs-form-switch-bg);\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-switch .form-check-input[data-v-0851419a] {\n    transition: none;\n}\n}\n.form-switch .form-check-input[data-v-0851419a]:focus {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input[data-v-0851419a]:checked {\n  background-position: right center;\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-switch.form-check-reverse[data-v-0851419a] {\n  padding-right: 2.5em;\n  padding-left: 0;\n}\n.form-switch.form-check-reverse .form-check-input[data-v-0851419a] {\n  margin-right: -2.5em;\n  margin-left: 0;\n}\n.form-check-inline[data-v-0851419a] {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-check[data-v-0851419a] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn[data-v-0851419a], .btn-check:disabled + .btn[data-v-0851419a] {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n[data-bs-theme=dark] .form-switch .form-check-input[data-v-0851419a]:not(:checked):not(:focus) {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e\");\n}\n.form-range[data-v-0851419a] {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n}\n.form-range[data-v-0851419a]:focus {\n  outline: 0;\n}\n.form-range[data-v-0851419a]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range[data-v-0851419a]:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range[data-v-0851419a]::-moz-focus-outer {\n  border: 0;\n}\n.form-range[data-v-0851419a]::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-range[data-v-0851419a]::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n}\n}\n.form-range[data-v-0851419a]::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range[data-v-0851419a]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: var(--bs-secondary-bg);\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range[data-v-0851419a]::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  -moz-appearance: none;\n       appearance: none;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-range[data-v-0851419a]::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n}\n}\n.form-range[data-v-0851419a]::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range[data-v-0851419a]::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: var(--bs-secondary-bg);\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range[data-v-0851419a]:disabled {\n  pointer-events: none;\n}\n.form-range[data-v-0851419a]:disabled::-webkit-slider-thumb {\n  background-color: var(--bs-secondary-color);\n}\n.form-range[data-v-0851419a]:disabled::-moz-range-thumb {\n  background-color: var(--bs-secondary-color);\n}\n.form-floating[data-v-0851419a] {\n  position: relative;\n}\n.form-floating > .form-control[data-v-0851419a],\n.form-floating > .form-control-plaintext[data-v-0851419a],\n.form-floating > .form-select[data-v-0851419a] {\n  height: calc(3.5rem + calc(var(--bs-border-width) * 2));\n  min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));\n  line-height: 1.25;\n}\n.form-floating > label[data-v-0851419a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  border: var(--bs-border-width) solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.form-floating > label[data-v-0851419a] {\n    transition: none;\n}\n}\n.form-floating > .form-control[data-v-0851419a],\n.form-floating > .form-control-plaintext[data-v-0851419a] {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control[data-v-0851419a]::-moz-placeholder, .form-floating > .form-control-plaintext[data-v-0851419a]::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control[data-v-0851419a]::placeholder,\n.form-floating > .form-control-plaintext[data-v-0851419a]::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control[data-v-0851419a]:not(:-moz-placeholder-shown), .form-floating > .form-control-plaintext[data-v-0851419a]:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control[data-v-0851419a]:focus, .form-floating > .form-control[data-v-0851419a]:not(:placeholder-shown),\n.form-floating > .form-control-plaintext[data-v-0851419a]:focus,\n.form-floating > .form-control-plaintext[data-v-0851419a]:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control[data-v-0851419a]:-webkit-autofill,\n.form-floating > .form-control-plaintext[data-v-0851419a]:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select[data-v-0851419a] {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label[data-v-0851419a] {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label[data-v-0851419a],\n.form-floating > .form-control:not(:placeholder-shown) ~ label[data-v-0851419a],\n.form-floating > .form-control-plaintext ~ label[data-v-0851419a],\n.form-floating > .form-select ~ label[data-v-0851419a] {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label[data-v-0851419a]::after {\n  position: absolute;\n  inset: 1rem 0.375rem;\n  z-index: -1;\n  height: 1.5em;\n  content: \"\";\n  background-color: var(--bs-body-bg);\n  border-radius: var(--bs-border-radius);\n}\n.form-floating > .form-control:focus ~ label[data-v-0851419a]::after,\n.form-floating > .form-control:not(:placeholder-shown) ~ label[data-v-0851419a]::after,\n.form-floating > .form-control-plaintext ~ label[data-v-0851419a]::after,\n.form-floating > .form-select ~ label[data-v-0851419a]::after {\n  position: absolute;\n  inset: 1rem 0.375rem;\n  z-index: -1;\n  height: 1.5em;\n  content: \"\";\n  background-color: var(--bs-body-bg);\n  border-radius: var(--bs-border-radius);\n}\n.form-floating > .form-control:-webkit-autofill ~ label[data-v-0851419a] {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control-plaintext ~ label[data-v-0851419a] {\n  border-width: var(--bs-border-width) 0;\n}\n.form-floating > :disabled ~ label[data-v-0851419a],\n.form-floating > .form-control:disabled ~ label[data-v-0851419a] {\n  color: #6c757d;\n}\n.form-floating > :disabled ~ label[data-v-0851419a]::after,\n.form-floating > .form-control:disabled ~ label[data-v-0851419a]::after {\n  background-color: var(--bs-secondary-bg);\n}\n.input-group[data-v-0851419a] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control[data-v-0851419a],\n.input-group > .form-select[data-v-0851419a],\n.input-group > .form-floating[data-v-0851419a] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control[data-v-0851419a]:focus,\n.input-group > .form-select[data-v-0851419a]:focus,\n.input-group > .form-floating[data-v-0851419a]:focus-within {\n  z-index: 5;\n}\n.input-group .btn[data-v-0851419a] {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn[data-v-0851419a]:focus {\n  z-index: 5;\n}\n.input-group-text[data-v-0851419a] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-tertiary-bg);\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n}\n.input-group-lg > .form-control[data-v-0851419a],\n.input-group-lg > .form-select[data-v-0851419a],\n.input-group-lg > .input-group-text[data-v-0851419a],\n.input-group-lg > .btn[data-v-0851419a] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n.input-group-sm > .form-control[data-v-0851419a],\n.input-group-sm > .form-select[data-v-0851419a],\n.input-group-sm > .input-group-text[data-v-0851419a],\n.input-group-sm > .btn[data-v-0851419a] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n.input-group-lg > .form-select[data-v-0851419a],\n.input-group-sm > .form-select[data-v-0851419a] {\n  padding-right: 3rem;\n}\n.input-group[data-v-0851419a]:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group:not(.has-validation) > .dropdown-toggle[data-v-0851419a]:nth-last-child(n+3),\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control[data-v-0851419a],\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select[data-v-0851419a] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation[data-v-0851419a] > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group.has-validation > .dropdown-toggle[data-v-0851419a]:nth-last-child(n+4),\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control[data-v-0851419a],\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select[data-v-0851419a] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[data-v-0851419a] > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: calc(var(--bs-border-width) * -1);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .form-floating:not(:first-child) > .form-control[data-v-0851419a],\n.input-group > .form-floating:not(:first-child) > .form-select[data-v-0851419a] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.valid-feedback[data-v-0851419a] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-form-valid-color);\n}\n.valid-tooltip[data-v-0851419a] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: var(--bs-success);\n  border-radius: var(--bs-border-radius);\n}\n.was-validated :valid ~ .valid-feedback[data-v-0851419a],\n.was-validated :valid ~ .valid-tooltip[data-v-0851419a],\n.is-valid ~ .valid-feedback[data-v-0851419a],\n.is-valid ~ .valid-tooltip[data-v-0851419a] {\n  display: block;\n}\n.was-validated .form-control[data-v-0851419a]:valid, .form-control.is-valid[data-v-0851419a] {\n  border-color: var(--bs-form-valid-border-color);\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control[data-v-0851419a]:valid:focus, .form-control.is-valid[data-v-0851419a]:focus {\n  border-color: var(--bs-form-valid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n.was-validated textarea.form-control[data-v-0851419a]:valid, textarea.form-control.is-valid[data-v-0851419a] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select[data-v-0851419a]:valid, .form-select.is-valid[data-v-0851419a] {\n  border-color: var(--bs-form-valid-border-color);\n}\n.was-validated .form-select[data-v-0851419a]:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"][data-v-0851419a], .form-select.is-valid[data-v-0851419a]:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"][data-v-0851419a] {\n  --bs-form-select-bg-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  padding-right: 4.125rem;\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select[data-v-0851419a]:valid:focus, .form-select.is-valid[data-v-0851419a]:focus {\n  border-color: var(--bs-form-valid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n.was-validated .form-control-color[data-v-0851419a]:valid, .form-control-color.is-valid[data-v-0851419a] {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input[data-v-0851419a]:valid, .form-check-input.is-valid[data-v-0851419a] {\n  border-color: var(--bs-form-valid-border-color);\n}\n.was-validated .form-check-input[data-v-0851419a]:valid:checked, .form-check-input.is-valid[data-v-0851419a]:checked {\n  background-color: var(--bs-form-valid-color);\n}\n.was-validated .form-check-input[data-v-0851419a]:valid:focus, .form-check-input.is-valid[data-v-0851419a]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label[data-v-0851419a], .form-check-input.is-valid ~ .form-check-label[data-v-0851419a] {\n  color: var(--bs-form-valid-color);\n}\n.form-check-inline .form-check-input ~ .valid-feedback[data-v-0851419a] {\n  margin-left: 0.5em;\n}\n.was-validated .input-group > .form-control[data-v-0851419a]:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid[data-v-0851419a],\n.was-validated .input-group > .form-select[data-v-0851419a]:not(:focus):valid,\n.input-group > .form-select:not(:focus).is-valid[data-v-0851419a],\n.was-validated .input-group > .form-floating[data-v-0851419a]:not(:focus-within):valid,\n.input-group > .form-floating:not(:focus-within).is-valid[data-v-0851419a] {\n  z-index: 3;\n}\n.invalid-feedback[data-v-0851419a] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-form-invalid-color);\n}\n.invalid-tooltip[data-v-0851419a] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: var(--bs-danger);\n  border-radius: var(--bs-border-radius);\n}\n.was-validated :invalid ~ .invalid-feedback[data-v-0851419a],\n.was-validated :invalid ~ .invalid-tooltip[data-v-0851419a],\n.is-invalid ~ .invalid-feedback[data-v-0851419a],\n.is-invalid ~ .invalid-tooltip[data-v-0851419a] {\n  display: block;\n}\n.was-validated .form-control[data-v-0851419a]:invalid, .form-control.is-invalid[data-v-0851419a] {\n  border-color: var(--bs-form-invalid-border-color);\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control[data-v-0851419a]:invalid:focus, .form-control.is-invalid[data-v-0851419a]:focus {\n  border-color: var(--bs-form-invalid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n.was-validated textarea.form-control[data-v-0851419a]:invalid, textarea.form-control.is-invalid[data-v-0851419a] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select[data-v-0851419a]:invalid, .form-select.is-invalid[data-v-0851419a] {\n  border-color: var(--bs-form-invalid-border-color);\n}\n.was-validated .form-select[data-v-0851419a]:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"][data-v-0851419a], .form-select.is-invalid[data-v-0851419a]:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"][data-v-0851419a] {\n  --bs-form-select-bg-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  padding-right: 4.125rem;\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select[data-v-0851419a]:invalid:focus, .form-select.is-invalid[data-v-0851419a]:focus {\n  border-color: var(--bs-form-invalid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n.was-validated .form-control-color[data-v-0851419a]:invalid, .form-control-color.is-invalid[data-v-0851419a] {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input[data-v-0851419a]:invalid, .form-check-input.is-invalid[data-v-0851419a] {\n  border-color: var(--bs-form-invalid-border-color);\n}\n.was-validated .form-check-input[data-v-0851419a]:invalid:checked, .form-check-input.is-invalid[data-v-0851419a]:checked {\n  background-color: var(--bs-form-invalid-color);\n}\n.was-validated .form-check-input[data-v-0851419a]:invalid:focus, .form-check-input.is-invalid[data-v-0851419a]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label[data-v-0851419a], .form-check-input.is-invalid ~ .form-check-label[data-v-0851419a] {\n  color: var(--bs-form-invalid-color);\n}\n.form-check-inline .form-check-input ~ .invalid-feedback[data-v-0851419a] {\n  margin-left: 0.5em;\n}\n.was-validated .input-group > .form-control[data-v-0851419a]:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid[data-v-0851419a],\n.was-validated .input-group > .form-select[data-v-0851419a]:not(:focus):invalid,\n.input-group > .form-select:not(:focus).is-invalid[data-v-0851419a],\n.was-validated .input-group > .form-floating[data-v-0851419a]:not(:focus-within):invalid,\n.input-group > .form-floating:not(:focus-within).is-invalid[data-v-0851419a] {\n  z-index: 4;\n}\n.btn[data-v-0851419a] {\n  --bs-btn-padding-x: 0.75rem;\n  --bs-btn-padding-y: 0.375rem;\n  --bs-btn-font-family: ;\n  --bs-btn-font-size: 1rem;\n  --bs-btn-font-weight: 400;\n  --bs-btn-line-height: 1.5;\n  --bs-btn-color: var(--bs-body-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-width: var(--bs-border-width);\n  --bs-btn-border-color: transparent;\n  --bs-btn-border-radius: var(--bs-border-radius);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  --bs-btn-disabled-opacity: 0.65;\n  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);\n  display: inline-block;\n  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);\n  font-family: var(--bs-btn-font-family);\n  font-size: var(--bs-btn-font-size);\n  font-weight: var(--bs-btn-font-weight);\n  line-height: var(--bs-btn-line-height);\n  color: var(--bs-btn-color);\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);\n  border-radius: var(--bs-btn-border-radius);\n  background-color: var(--bs-btn-bg);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.btn[data-v-0851419a] {\n    transition: none;\n}\n}\n.btn[data-v-0851419a]:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n}\n.btn-check + .btn[data-v-0851419a]:hover {\n  color: var(--bs-btn-color);\n  background-color: var(--bs-btn-bg);\n  border-color: var(--bs-btn-border-color);\n}\n.btn[data-v-0851419a]:focus-visible {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:focus-visible + .btn[data-v-0851419a] {\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:checked + .btn[data-v-0851419a], :not(.btn-check) + .btn[data-v-0851419a]:active, .btn[data-v-0851419a]:first-child:active, .btn.active[data-v-0851419a], .btn.show[data-v-0851419a] {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: var(--bs-btn-active-border-color);\n}\n.btn-check:checked + .btn[data-v-0851419a]:focus-visible, :not(.btn-check) + .btn[data-v-0851419a]:active:focus-visible, .btn[data-v-0851419a]:first-child:active:focus-visible, .btn.active[data-v-0851419a]:focus-visible, .btn.show[data-v-0851419a]:focus-visible {\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:checked:focus-visible + .btn[data-v-0851419a] {\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn[data-v-0851419a]:disabled, .btn.disabled[data-v-0851419a], fieldset:disabled .btn[data-v-0851419a] {\n  color: var(--bs-btn-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-btn-disabled-bg);\n  border-color: var(--bs-btn-disabled-border-color);\n  opacity: var(--bs-btn-disabled-opacity);\n}\n.btn-primary[data-v-0851419a] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0b5ed7;\n  --bs-btn-hover-border-color: #0a58ca;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0a58ca;\n  --bs-btn-active-border-color: #0a53be;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #0d6efd;\n  --bs-btn-disabled-border-color: #0d6efd;\n}\n.btn-secondary[data-v-0851419a] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #6c757d;\n  --bs-btn-border-color: #6c757d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #5c636a;\n  --bs-btn-hover-border-color: #565e64;\n  --bs-btn-focus-shadow-rgb: 130, 138, 145;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #565e64;\n  --bs-btn-active-border-color: #51585e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #6c757d;\n  --bs-btn-disabled-border-color: #6c757d;\n}\n.btn-success[data-v-0851419a] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #157347;\n  --bs-btn-hover-border-color: #146c43;\n  --bs-btn-focus-shadow-rgb: 60, 153, 110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #146c43;\n  --bs-btn-active-border-color: #13653f;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #198754;\n  --bs-btn-disabled-border-color: #198754;\n}\n.btn-info[data-v-0851419a] {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #31d2f2;\n  --bs-btn-hover-border-color: #25cff2;\n  --bs-btn-focus-shadow-rgb: 11, 172, 204;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #3dd5f3;\n  --bs-btn-active-border-color: #25cff2;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #0dcaf0;\n  --bs-btn-disabled-border-color: #0dcaf0;\n}\n.btn-warning[data-v-0851419a] {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffca2c;\n  --bs-btn-hover-border-color: #ffc720;\n  --bs-btn-focus-shadow-rgb: 217, 164, 6;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffcd39;\n  --bs-btn-active-border-color: #ffc720;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #ffc107;\n  --bs-btn-disabled-border-color: #ffc107;\n}\n.btn-danger[data-v-0851419a] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #dc3545;\n  --bs-btn-border-color: #dc3545;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #bb2d3b;\n  --bs-btn-hover-border-color: #b02a37;\n  --bs-btn-focus-shadow-rgb: 225, 83, 97;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #b02a37;\n  --bs-btn-active-border-color: #a52834;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #dc3545;\n  --bs-btn-disabled-border-color: #dc3545;\n}\n.btn-light[data-v-0851419a] {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #f8f9fa;\n  --bs-btn-border-color: #f8f9fa;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #d3d4d5;\n  --bs-btn-hover-border-color: #c6c7c8;\n  --bs-btn-focus-shadow-rgb: 211, 212, 213;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #c6c7c8;\n  --bs-btn-active-border-color: #babbbc;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #f8f9fa;\n  --bs-btn-disabled-border-color: #f8f9fa;\n}\n.btn-dark[data-v-0851419a] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #212529;\n  --bs-btn-border-color: #212529;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #424649;\n  --bs-btn-hover-border-color: #373b3e;\n  --bs-btn-focus-shadow-rgb: 66, 70, 73;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #4d5154;\n  --bs-btn-active-border-color: #373b3e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #212529;\n  --bs-btn-disabled-border-color: #212529;\n}\n.btn-outline-primary[data-v-0851419a] {\n  --bs-btn-color: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0d6efd;\n  --bs-btn-hover-border-color: #0d6efd;\n  --bs-btn-focus-shadow-rgb: 13, 110, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0d6efd;\n  --bs-btn-active-border-color: #0d6efd;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0d6efd;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0d6efd;\n  --bs-gradient: none;\n}\n.btn-outline-secondary[data-v-0851419a] {\n  --bs-btn-color: #6c757d;\n  --bs-btn-border-color: #6c757d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #6c757d;\n  --bs-btn-hover-border-color: #6c757d;\n  --bs-btn-focus-shadow-rgb: 108, 117, 125;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #6c757d;\n  --bs-btn-active-border-color: #6c757d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #6c757d;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #6c757d;\n  --bs-gradient: none;\n}\n.btn-outline-success[data-v-0851419a] {\n  --bs-btn-color: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #198754;\n  --bs-btn-hover-border-color: #198754;\n  --bs-btn-focus-shadow-rgb: 25, 135, 84;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #198754;\n  --bs-btn-active-border-color: #198754;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #198754;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #198754;\n  --bs-gradient: none;\n}\n.btn-outline-info[data-v-0851419a] {\n  --bs-btn-color: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #0dcaf0;\n  --bs-btn-hover-border-color: #0dcaf0;\n  --bs-btn-focus-shadow-rgb: 13, 202, 240;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #0dcaf0;\n  --bs-btn-active-border-color: #0dcaf0;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0dcaf0;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0dcaf0;\n  --bs-gradient: none;\n}\n.btn-outline-warning[data-v-0851419a] {\n  --bs-btn-color: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffc107;\n  --bs-btn-hover-border-color: #ffc107;\n  --bs-btn-focus-shadow-rgb: 255, 193, 7;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffc107;\n  --bs-btn-active-border-color: #ffc107;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #ffc107;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #ffc107;\n  --bs-gradient: none;\n}\n.btn-outline-danger[data-v-0851419a] {\n  --bs-btn-color: #dc3545;\n  --bs-btn-border-color: #dc3545;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #dc3545;\n  --bs-btn-hover-border-color: #dc3545;\n  --bs-btn-focus-shadow-rgb: 220, 53, 69;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #dc3545;\n  --bs-btn-active-border-color: #dc3545;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #dc3545;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #dc3545;\n  --bs-gradient: none;\n}\n.btn-outline-light[data-v-0851419a] {\n  --bs-btn-color: #f8f9fa;\n  --bs-btn-border-color: #f8f9fa;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #f8f9fa;\n  --bs-btn-hover-border-color: #f8f9fa;\n  --bs-btn-focus-shadow-rgb: 248, 249, 250;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #f8f9fa;\n  --bs-btn-active-border-color: #f8f9fa;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #f8f9fa;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #f8f9fa;\n  --bs-gradient: none;\n}\n.btn-outline-dark[data-v-0851419a] {\n  --bs-btn-color: #212529;\n  --bs-btn-border-color: #212529;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #212529;\n  --bs-btn-hover-border-color: #212529;\n  --bs-btn-focus-shadow-rgb: 33, 37, 41;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #212529;\n  --bs-btn-active-border-color: #212529;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #212529;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #212529;\n  --bs-gradient: none;\n}\n.btn-link[data-v-0851419a] {\n  --bs-btn-font-weight: 400;\n  --bs-btn-color: var(--bs-link-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: transparent;\n  --bs-btn-hover-color: var(--bs-link-hover-color);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-active-color: var(--bs-link-hover-color);\n  --bs-btn-active-border-color: transparent;\n  --bs-btn-disabled-color: #6c757d;\n  --bs-btn-disabled-border-color: transparent;\n  --bs-btn-box-shadow: 0 0 0 #000;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  text-decoration: underline;\n}\n.btn-link[data-v-0851419a]:focus-visible {\n  color: var(--bs-btn-color);\n}\n.btn-link[data-v-0851419a]:hover {\n  color: var(--bs-btn-hover-color);\n}\n.btn-lg[data-v-0851419a], .btn-group-lg > .btn[data-v-0851419a] {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-padding-x: 1rem;\n  --bs-btn-font-size: 1.25rem;\n  --bs-btn-border-radius: var(--bs-border-radius-lg);\n}\n.btn-sm[data-v-0851419a], .btn-group-sm > .btn[data-v-0851419a] {\n  --bs-btn-padding-y: 0.25rem;\n  --bs-btn-padding-x: 0.5rem;\n  --bs-btn-font-size: 0.875rem;\n  --bs-btn-border-radius: var(--bs-border-radius-sm);\n}\n.fade[data-v-0851419a] {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n.fade[data-v-0851419a] {\n    transition: none;\n}\n}\n.fade[data-v-0851419a]:not(.show) {\n  opacity: 0;\n}\n.collapse[data-v-0851419a]:not(.show) {\n  display: none;\n}\n.collapsing[data-v-0851419a] {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing[data-v-0851419a] {\n    transition: none;\n}\n}\n.collapsing.collapse-horizontal[data-v-0851419a] {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.collapsing.collapse-horizontal[data-v-0851419a] {\n    transition: none;\n}\n}\n.dropup[data-v-0851419a],\n.dropend[data-v-0851419a],\n.dropdown[data-v-0851419a],\n.dropstart[data-v-0851419a],\n.dropup-center[data-v-0851419a],\n.dropdown-center[data-v-0851419a] {\n  position: relative;\n}\n.dropdown-toggle[data-v-0851419a] {\n  white-space: nowrap;\n}\n.dropdown-toggle[data-v-0851419a]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle[data-v-0851419a]:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu[data-v-0851419a] {\n  --bs-dropdown-zindex: 1000;\n  --bs-dropdown-min-width: 10rem;\n  --bs-dropdown-padding-x: 0;\n  --bs-dropdown-padding-y: 0.5rem;\n  --bs-dropdown-spacer: 0.125rem;\n  --bs-dropdown-font-size: 1rem;\n  --bs-dropdown-color: var(--bs-body-color);\n  --bs-dropdown-bg: var(--bs-body-bg);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-border-radius: var(--bs-border-radius);\n  --bs-dropdown-border-width: var(--bs-border-width);\n  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-divider-margin-y: 0.5rem;\n  --bs-dropdown-box-shadow: var(--bs-box-shadow);\n  --bs-dropdown-link-color: var(--bs-body-color);\n  --bs-dropdown-link-hover-color: var(--bs-body-color);\n  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);\n  --bs-dropdown-item-padding-x: 1rem;\n  --bs-dropdown-item-padding-y: 0.25rem;\n  --bs-dropdown-header-color: #6c757d;\n  --bs-dropdown-header-padding-x: 1rem;\n  --bs-dropdown-header-padding-y: 0.5rem;\n  position: absolute;\n  z-index: var(--bs-dropdown-zindex);\n  display: none;\n  min-width: var(--bs-dropdown-min-width);\n  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);\n  margin: 0;\n  font-size: var(--bs-dropdown-font-size);\n  color: var(--bs-dropdown-color);\n  text-align: left;\n  list-style: none;\n  background-color: var(--bs-dropdown-bg);\n  background-clip: padding-box;\n  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n  border-radius: var(--bs-dropdown-border-radius);\n}\n.dropdown-menu[data-bs-popper][data-v-0851419a] {\n  top: 100%;\n  left: 0;\n  margin-top: var(--bs-dropdown-spacer);\n}\n.dropdown-menu-start[data-v-0851419a] {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper][data-v-0851419a] {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-end[data-v-0851419a] {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper][data-v-0851419a] {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n.dropdown-menu-sm-start[data-v-0851419a] {\n    --bs-position: start;\n}\n.dropdown-menu-sm-start[data-bs-popper][data-v-0851419a] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-sm-end[data-v-0851419a] {\n    --bs-position: end;\n}\n.dropdown-menu-sm-end[data-bs-popper][data-v-0851419a] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 768px) {\n.dropdown-menu-md-start[data-v-0851419a] {\n    --bs-position: start;\n}\n.dropdown-menu-md-start[data-bs-popper][data-v-0851419a] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-md-end[data-v-0851419a] {\n    --bs-position: end;\n}\n.dropdown-menu-md-end[data-bs-popper][data-v-0851419a] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 992px) {\n.dropdown-menu-lg-start[data-v-0851419a] {\n    --bs-position: start;\n}\n.dropdown-menu-lg-start[data-bs-popper][data-v-0851419a] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-lg-end[data-v-0851419a] {\n    --bs-position: end;\n}\n.dropdown-menu-lg-end[data-bs-popper][data-v-0851419a] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 1200px) {\n.dropdown-menu-xl-start[data-v-0851419a] {\n    --bs-position: start;\n}\n.dropdown-menu-xl-start[data-bs-popper][data-v-0851419a] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-xl-end[data-v-0851419a] {\n    --bs-position: end;\n}\n.dropdown-menu-xl-end[data-bs-popper][data-v-0851419a] {\n    right: 0;\n    left: auto;\n}\n}\n@media (min-width: 1400px) {\n.dropdown-menu-xxl-start[data-v-0851419a] {\n    --bs-position: start;\n}\n.dropdown-menu-xxl-start[data-bs-popper][data-v-0851419a] {\n    right: auto;\n    left: 0;\n}\n.dropdown-menu-xxl-end[data-v-0851419a] {\n    --bs-position: end;\n}\n.dropdown-menu-xxl-end[data-bs-popper][data-v-0851419a] {\n    right: 0;\n    left: auto;\n}\n}\n.dropup .dropdown-menu[data-bs-popper][data-v-0851419a] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: var(--bs-dropdown-spacer);\n}\n.dropup .dropdown-toggle[data-v-0851419a]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle[data-v-0851419a]:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-menu[data-bs-popper][data-v-0851419a] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: var(--bs-dropdown-spacer);\n}\n.dropend .dropdown-toggle[data-v-0851419a]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle[data-v-0851419a]:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle[data-v-0851419a]::after {\n  vertical-align: 0;\n}\n.dropstart .dropdown-menu[data-bs-popper][data-v-0851419a] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: var(--bs-dropdown-spacer);\n}\n.dropstart .dropdown-toggle[data-v-0851419a]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle[data-v-0851419a]::after {\n  display: none;\n}\n.dropstart .dropdown-toggle[data-v-0851419a]::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle[data-v-0851419a]:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle[data-v-0851419a]::before {\n  vertical-align: 0;\n}\n.dropdown-divider[data-v-0851419a] {\n  height: 0;\n  margin: var(--bs-dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--bs-dropdown-divider-bg);\n  opacity: 1;\n}\n.dropdown-item[data-v-0851419a] {\n  display: block;\n  width: 100%;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  clear: both;\n  font-weight: 400;\n  color: var(--bs-dropdown-link-color);\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  border-radius: var(--bs-dropdown-item-border-radius, 0);\n}\n.dropdown-item[data-v-0851419a]:hover, .dropdown-item[data-v-0851419a]:focus {\n  color: var(--bs-dropdown-link-hover-color);\n  background-color: var(--bs-dropdown-link-hover-bg);\n}\n.dropdown-item.active[data-v-0851419a], .dropdown-item[data-v-0851419a]:active {\n  color: var(--bs-dropdown-link-active-color);\n  text-decoration: none;\n  background-color: var(--bs-dropdown-link-active-bg);\n}\n.dropdown-item.disabled[data-v-0851419a], .dropdown-item[data-v-0851419a]:disabled {\n  color: var(--bs-dropdown-link-disabled-color);\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show[data-v-0851419a] {\n  display: block;\n}\n.dropdown-header[data-v-0851419a] {\n  display: block;\n  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: var(--bs-dropdown-header-color);\n  white-space: nowrap;\n}\n.dropdown-item-text[data-v-0851419a] {\n  display: block;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  color: var(--bs-dropdown-link-color);\n}\n.dropdown-menu-dark[data-v-0851419a] {\n  --bs-dropdown-color: #dee2e6;\n  --bs-dropdown-bg: #343a40;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #dee2e6;\n  --bs-dropdown-link-hover-color: #fff;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n}\n.btn-group[data-v-0851419a],\n.btn-group-vertical[data-v-0851419a] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn[data-v-0851419a],\n.btn-group-vertical > .btn[data-v-0851419a] {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn[data-v-0851419a],\n.btn-group > .btn-check:focus + .btn[data-v-0851419a],\n.btn-group > .btn[data-v-0851419a]:hover,\n.btn-group > .btn[data-v-0851419a]:focus,\n.btn-group > .btn[data-v-0851419a]:active,\n.btn-group > .btn.active[data-v-0851419a],\n.btn-group-vertical > .btn-check:checked + .btn[data-v-0851419a],\n.btn-group-vertical > .btn-check:focus + .btn[data-v-0851419a],\n.btn-group-vertical > .btn[data-v-0851419a]:hover,\n.btn-group-vertical > .btn[data-v-0851419a]:focus,\n.btn-group-vertical > .btn[data-v-0851419a]:active,\n.btn-group-vertical > .btn.active[data-v-0851419a] {\n  z-index: 1;\n}\n.btn-toolbar[data-v-0851419a] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group[data-v-0851419a] {\n  width: auto;\n}\n.btn-group[data-v-0851419a] {\n  border-radius: var(--bs-border-radius);\n}\n.btn-group > :not(.btn-check:first-child) + .btn[data-v-0851419a],\n.btn-group > .btn-group[data-v-0851419a]:not(:first-child) {\n  margin-left: calc(var(--bs-border-width) * -1);\n}\n.btn-group > .btn[data-v-0851419a]:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn.dropdown-toggle-split[data-v-0851419a]:first-child,\n.btn-group > .btn-group:not(:last-child) > .btn[data-v-0851419a] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn[data-v-0851419a]:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn[data-v-0851419a],\n.btn-group > .btn-group:not(:first-child) > .btn[data-v-0851419a] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split[data-v-0851419a] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split[data-v-0851419a]::after, .dropup .dropdown-toggle-split[data-v-0851419a]::after, .dropend .dropdown-toggle-split[data-v-0851419a]::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split[data-v-0851419a]::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split[data-v-0851419a], .btn-group-sm > .btn + .dropdown-toggle-split[data-v-0851419a] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split[data-v-0851419a], .btn-group-lg > .btn + .dropdown-toggle-split[data-v-0851419a] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical[data-v-0851419a] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn[data-v-0851419a],\n.btn-group-vertical > .btn-group[data-v-0851419a] {\n  width: 100%;\n}\n.btn-group-vertical > .btn[data-v-0851419a]:not(:first-child),\n.btn-group-vertical > .btn-group[data-v-0851419a]:not(:first-child) {\n  margin-top: calc(var(--bs-border-width) * -1);\n}\n.btn-group-vertical > .btn[data-v-0851419a]:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn[data-v-0851419a] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn[data-v-0851419a],\n.btn-group-vertical > .btn-group:not(:first-child) > .btn[data-v-0851419a] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav[data-v-0851419a] {\n  --bs-nav-link-padding-x: 1rem;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-link-color);\n  --bs-nav-link-hover-color: var(--bs-link-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-secondary-color);\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link[data-v-0851419a] {\n  display: block;\n  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);\n  font-size: var(--bs-nav-link-font-size);\n  font-weight: var(--bs-nav-link-font-weight);\n  color: var(--bs-nav-link-color);\n  text-decoration: none;\n  background: none;\n  border: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.nav-link[data-v-0851419a] {\n    transition: none;\n}\n}\n.nav-link[data-v-0851419a]:hover, .nav-link[data-v-0851419a]:focus {\n  color: var(--bs-nav-link-hover-color);\n}\n.nav-link[data-v-0851419a]:focus-visible {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.nav-link.disabled[data-v-0851419a], .nav-link[data-v-0851419a]:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs[data-v-0851419a] {\n  --bs-nav-tabs-border-width: var(--bs-border-width);\n  --bs-nav-tabs-border-color: var(--bs-border-color);\n  --bs-nav-tabs-border-radius: var(--bs-border-radius);\n  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);\n  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);\n  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);\n  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);\n  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);\n}\n.nav-tabs .nav-link[data-v-0851419a] {\n  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));\n  border: var(--bs-nav-tabs-border-width) solid transparent;\n  border-top-left-radius: var(--bs-nav-tabs-border-radius);\n  border-top-right-radius: var(--bs-nav-tabs-border-radius);\n}\n.nav-tabs .nav-link[data-v-0851419a]:hover, .nav-tabs .nav-link[data-v-0851419a]:focus {\n  isolation: isolate;\n  border-color: var(--bs-nav-tabs-link-hover-border-color);\n}\n.nav-tabs .nav-link.active[data-v-0851419a],\n.nav-tabs .nav-item.show .nav-link[data-v-0851419a] {\n  color: var(--bs-nav-tabs-link-active-color);\n  background-color: var(--bs-nav-tabs-link-active-bg);\n  border-color: var(--bs-nav-tabs-link-active-border-color);\n}\n.nav-tabs .dropdown-menu[data-v-0851419a] {\n  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills[data-v-0851419a] {\n  --bs-nav-pills-border-radius: var(--bs-border-radius);\n  --bs-nav-pills-link-active-color: #fff;\n  --bs-nav-pills-link-active-bg: #0d6efd;\n}\n.nav-pills .nav-link[data-v-0851419a] {\n  border-radius: var(--bs-nav-pills-border-radius);\n}\n.nav-pills .nav-link.active[data-v-0851419a],\n.nav-pills .show > .nav-link[data-v-0851419a] {\n  color: var(--bs-nav-pills-link-active-color);\n  background-color: var(--bs-nav-pills-link-active-bg);\n}\n.nav-underline[data-v-0851419a] {\n  --bs-nav-underline-gap: 1rem;\n  --bs-nav-underline-border-width: 0.125rem;\n  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);\n  gap: var(--bs-nav-underline-gap);\n}\n.nav-underline .nav-link[data-v-0851419a] {\n  padding-right: 0;\n  padding-left: 0;\n  border-bottom: var(--bs-nav-underline-border-width) solid transparent;\n}\n.nav-underline .nav-link[data-v-0851419a]:hover, .nav-underline .nav-link[data-v-0851419a]:focus {\n  border-bottom-color: currentcolor;\n}\n.nav-underline .nav-link.active[data-v-0851419a],\n.nav-underline .show > .nav-link[data-v-0851419a] {\n  font-weight: 700;\n  color: var(--bs-nav-underline-link-active-color);\n  border-bottom-color: currentcolor;\n}\n.nav-fill > .nav-link[data-v-0851419a],\n.nav-fill .nav-item[data-v-0851419a] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified > .nav-link[data-v-0851419a],\n.nav-justified .nav-item[data-v-0851419a] {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.nav-fill .nav-item .nav-link[data-v-0851419a],\n.nav-justified .nav-item .nav-link[data-v-0851419a] {\n  width: 100%;\n}\n.tab-content > .tab-pane[data-v-0851419a] {\n  display: none;\n}\n.tab-content > .active[data-v-0851419a] {\n  display: block;\n}\n.navbar[data-v-0851419a] {\n  --bs-navbar-padding-x: 0;\n  --bs-navbar-padding-y: 0.5rem;\n  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);\n  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);\n  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);\n  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-brand-padding-y: 0.3125rem;\n  --bs-navbar-brand-margin-end: 1rem;\n  --bs-navbar-brand-font-size: 1.25rem;\n  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-nav-link-padding-x: 0.5rem;\n  --bs-navbar-toggler-padding-y: 0.25rem;\n  --bs-navbar-toggler-padding-x: 0.75rem;\n  --bs-navbar-toggler-font-size: 1.25rem;\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);\n  --bs-navbar-toggler-border-radius: var(--bs-border-radius);\n  --bs-navbar-toggler-focus-width: 0.25rem;\n  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);\n}\n.navbar > .container[data-v-0851419a],\n.navbar > .container-fluid[data-v-0851419a],\n.navbar > .container-sm[data-v-0851419a],\n.navbar > .container-md[data-v-0851419a],\n.navbar > .container-lg[data-v-0851419a],\n.navbar > .container-xl[data-v-0851419a],\n.navbar > .container-xxl[data-v-0851419a] {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand[data-v-0851419a] {\n  padding-top: var(--bs-navbar-brand-padding-y);\n  padding-bottom: var(--bs-navbar-brand-padding-y);\n  margin-right: var(--bs-navbar-brand-margin-end);\n  font-size: var(--bs-navbar-brand-font-size);\n  color: var(--bs-navbar-brand-color);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-brand[data-v-0851419a]:hover, .navbar-brand[data-v-0851419a]:focus {\n  color: var(--bs-navbar-brand-hover-color);\n}\n.navbar-nav[data-v-0851419a] {\n  --bs-nav-link-padding-x: 0;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-navbar-color);\n  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link.active[data-v-0851419a], .navbar-nav .nav-link.show[data-v-0851419a] {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-nav .dropdown-menu[data-v-0851419a] {\n  position: static;\n}\n.navbar-text[data-v-0851419a] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-navbar-color);\n}\n.navbar-text a[data-v-0851419a],\n.navbar-text a[data-v-0851419a]:hover,\n.navbar-text a[data-v-0851419a]:focus {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-collapse[data-v-0851419a] {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler[data-v-0851419a] {\n  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);\n  font-size: var(--bs-navbar-toggler-font-size);\n  line-height: 1;\n  color: var(--bs-navbar-color);\n  background-color: transparent;\n  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);\n  border-radius: var(--bs-navbar-toggler-border-radius);\n  transition: var(--bs-navbar-toggler-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.navbar-toggler[data-v-0851419a] {\n    transition: none;\n}\n}\n.navbar-toggler[data-v-0851419a]:hover {\n  text-decoration: none;\n}\n.navbar-toggler[data-v-0851419a]:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);\n}\n.navbar-toggler-icon[data-v-0851419a] {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--bs-navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n.navbar-nav-scroll[data-v-0851419a] {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n@media (min-width: 576px) {\n.navbar-expand-sm[data-v-0851419a] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-sm .navbar-nav[data-v-0851419a] {\n    flex-direction: row;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu[data-v-0851419a] {\n    position: absolute;\n}\n.navbar-expand-sm .navbar-nav .nav-link[data-v-0851419a] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-sm .navbar-nav-scroll[data-v-0851419a] {\n    overflow: visible;\n}\n.navbar-expand-sm .navbar-collapse[data-v-0851419a] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-sm .navbar-toggler[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-sm .offcanvas[data-v-0851419a] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-sm .offcanvas .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-sm .offcanvas .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 768px) {\n.navbar-expand-md[data-v-0851419a] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-md .navbar-nav[data-v-0851419a] {\n    flex-direction: row;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu[data-v-0851419a] {\n    position: absolute;\n}\n.navbar-expand-md .navbar-nav .nav-link[data-v-0851419a] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-md .navbar-nav-scroll[data-v-0851419a] {\n    overflow: visible;\n}\n.navbar-expand-md .navbar-collapse[data-v-0851419a] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-md .navbar-toggler[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-md .offcanvas[data-v-0851419a] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-md .offcanvas .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-md .offcanvas .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 992px) {\n.navbar-expand-lg[data-v-0851419a] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-lg .navbar-nav[data-v-0851419a] {\n    flex-direction: row;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu[data-v-0851419a] {\n    position: absolute;\n}\n.navbar-expand-lg .navbar-nav .nav-link[data-v-0851419a] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-lg .navbar-nav-scroll[data-v-0851419a] {\n    overflow: visible;\n}\n.navbar-expand-lg .navbar-collapse[data-v-0851419a] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-lg .navbar-toggler[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-lg .offcanvas[data-v-0851419a] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-lg .offcanvas .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-lg .offcanvas .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 1200px) {\n.navbar-expand-xl[data-v-0851419a] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-xl .navbar-nav[data-v-0851419a] {\n    flex-direction: row;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu[data-v-0851419a] {\n    position: absolute;\n}\n.navbar-expand-xl .navbar-nav .nav-link[data-v-0851419a] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-xl .navbar-nav-scroll[data-v-0851419a] {\n    overflow: visible;\n}\n.navbar-expand-xl .navbar-collapse[data-v-0851419a] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-xl .navbar-toggler[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-xl .offcanvas[data-v-0851419a] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-xl .offcanvas .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-xl .offcanvas .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n@media (min-width: 1400px) {\n.navbar-expand-xxl[data-v-0851419a] {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.navbar-expand-xxl .navbar-nav[data-v-0851419a] {\n    flex-direction: row;\n}\n.navbar-expand-xxl .navbar-nav .dropdown-menu[data-v-0851419a] {\n    position: absolute;\n}\n.navbar-expand-xxl .navbar-nav .nav-link[data-v-0851419a] {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand-xxl .navbar-nav-scroll[data-v-0851419a] {\n    overflow: visible;\n}\n.navbar-expand-xxl .navbar-collapse[data-v-0851419a] {\n    display: flex !important;\n    flex-basis: auto;\n}\n.navbar-expand-xxl .navbar-toggler[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-xxl .offcanvas[data-v-0851419a] {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n}\n.navbar-expand-xxl .offcanvas .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.navbar-expand-xxl .offcanvas .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n}\n}\n.navbar-expand[data-v-0851419a] {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav[data-v-0851419a] {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu[data-v-0851419a] {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link[data-v-0851419a] {\n  padding-right: var(--bs-navbar-nav-link-padding-x);\n  padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand .navbar-nav-scroll[data-v-0851419a] {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse[data-v-0851419a] {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler[data-v-0851419a] {\n  display: none;\n}\n.navbar-expand .offcanvas[data-v-0851419a] {\n  position: static;\n  z-index: auto;\n  flex-grow: 1;\n  width: auto !important;\n  height: auto !important;\n  visibility: visible !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  transform: none !important;\n  transition: none;\n}\n.navbar-expand .offcanvas .offcanvas-header[data-v-0851419a] {\n  display: none;\n}\n.navbar-expand .offcanvas .offcanvas-body[data-v-0851419a] {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n.navbar-dark[data-v-0851419a],\n.navbar[data-bs-theme=dark][data-v-0851419a] {\n  --bs-navbar-color: rgba(255, 255, 255, 0.55);\n  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);\n  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);\n  --bs-navbar-active-color: #fff;\n  --bs-navbar-brand-color: #fff;\n  --bs-navbar-brand-hover-color: #fff;\n  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n[data-bs-theme=dark] .navbar-toggler-icon[data-v-0851419a] {\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.card[data-v-0851419a] {\n  --bs-card-spacer-y: 1rem;\n  --bs-card-spacer-x: 1rem;\n  --bs-card-title-spacer-y: 0.5rem;\n  --bs-card-title-color: ;\n  --bs-card-subtitle-color: ;\n  --bs-card-border-width: var(--bs-border-width);\n  --bs-card-border-color: var(--bs-border-color-translucent);\n  --bs-card-border-radius: var(--bs-border-radius);\n  --bs-card-box-shadow: ;\n  --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));\n  --bs-card-cap-padding-y: 0.5rem;\n  --bs-card-cap-padding-x: 1rem;\n  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);\n  --bs-card-cap-color: ;\n  --bs-card-height: ;\n  --bs-card-color: ;\n  --bs-card-bg: var(--bs-body-bg);\n  --bs-card-img-overlay-padding: 1rem;\n  --bs-card-group-margin: 0.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: var(--bs-card-height);\n  color: var(--bs-body-color);\n  word-wrap: break-word;\n  background-color: var(--bs-card-bg);\n  background-clip: border-box;\n  border: var(--bs-card-border-width) solid var(--bs-card-border-color);\n  border-radius: var(--bs-card-border-radius);\n}\n.card > hr[data-v-0851419a] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group[data-v-0851419a] {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group[data-v-0851419a]:first-child {\n  border-top-width: 0;\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n.card > .list-group[data-v-0851419a]:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n.card > .card-header + .list-group[data-v-0851419a],\n.card > .list-group + .card-footer[data-v-0851419a] {\n  border-top: 0;\n}\n.card-body[data-v-0851419a] {\n  flex: 1 1 auto;\n  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);\n  color: var(--bs-card-color);\n}\n.card-title[data-v-0851419a] {\n  margin-bottom: var(--bs-card-title-spacer-y);\n  color: var(--bs-card-title-color);\n}\n.card-subtitle[data-v-0851419a] {\n  margin-top: calc(-.5 * var(--bs-card-title-spacer-y));\n  margin-bottom: 0;\n  color: var(--bs-card-subtitle-color);\n}\n.card-text[data-v-0851419a]:last-child {\n  margin-bottom: 0;\n}\n.card-link + .card-link[data-v-0851419a] {\n  margin-left: var(--bs-card-spacer-x);\n}\n.card-header[data-v-0851419a] {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  margin-bottom: 0;\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-header[data-v-0851419a]:first-child {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n}\n.card-footer[data-v-0851419a] {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-footer[data-v-0851419a]:last-child {\n  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);\n}\n.card-header-tabs[data-v-0851419a] {\n  margin-right: calc(-.5 * var(--bs-card-cap-padding-x));\n  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));\n  margin-left: calc(-.5 * var(--bs-card-cap-padding-x));\n  border-bottom: 0;\n}\n.card-header-tabs .nav-link.active[data-v-0851419a] {\n  background-color: var(--bs-card-bg);\n  border-bottom-color: var(--bs-card-bg);\n}\n.card-header-pills[data-v-0851419a] {\n  margin-right: calc(-.5 * var(--bs-card-cap-padding-x));\n  margin-left: calc(-.5 * var(--bs-card-cap-padding-x));\n}\n.card-img-overlay[data-v-0851419a] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--bs-card-img-overlay-padding);\n  border-radius: var(--bs-card-inner-border-radius);\n}\n.card-img[data-v-0851419a],\n.card-img-top[data-v-0851419a],\n.card-img-bottom[data-v-0851419a] {\n  width: 100%;\n}\n.card-img[data-v-0851419a],\n.card-img-top[data-v-0851419a] {\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n.card-img[data-v-0851419a],\n.card-img-bottom[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n.card-group > .card[data-v-0851419a] {\n  margin-bottom: var(--bs-card-group-margin);\n}\n@media (min-width: 576px) {\n.card-group[data-v-0851419a] {\n    display: flex;\n    flex-flow: row wrap;\n}\n.card-group > .card[data-v-0851419a] {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n}\n.card-group > .card + .card[data-v-0851419a] {\n    margin-left: 0;\n    border-left: 0;\n}\n.card-group > .card[data-v-0851419a]:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-top[data-v-0851419a],\n.card-group > .card:not(:last-child) .card-header[data-v-0851419a] {\n    border-top-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-bottom[data-v-0851419a],\n.card-group > .card:not(:last-child) .card-footer[data-v-0851419a] {\n    border-bottom-right-radius: 0;\n}\n.card-group > .card[data-v-0851419a]:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-top[data-v-0851419a],\n.card-group > .card:not(:first-child) .card-header[data-v-0851419a] {\n    border-top-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-bottom[data-v-0851419a],\n.card-group > .card:not(:first-child) .card-footer[data-v-0851419a] {\n    border-bottom-left-radius: 0;\n}\n}\n.accordion[data-v-0851419a] {\n  --bs-accordion-color: var(--bs-body-color);\n  --bs-accordion-bg: var(--bs-body-bg);\n  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n  --bs-accordion-border-color: var(--bs-border-color);\n  --bs-accordion-border-width: var(--bs-border-width);\n  --bs-accordion-border-radius: var(--bs-border-radius);\n  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));\n  --bs-accordion-btn-padding-x: 1.25rem;\n  --bs-accordion-btn-padding-y: 1rem;\n  --bs-accordion-btn-color: var(--bs-body-color);\n  --bs-accordion-btn-bg: var(--bs-accordion-bg);\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-icon-width: 1.25rem;\n  --bs-accordion-btn-icon-transform: rotate(-180deg);\n  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-accordion-body-padding-x: 1.25rem;\n  --bs-accordion-body-padding-y: 1rem;\n  --bs-accordion-active-color: var(--bs-primary-text-emphasis);\n  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);\n}\n.accordion-button[data-v-0851419a] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);\n  font-size: 1rem;\n  color: var(--bs-accordion-btn-color);\n  text-align: left;\n  background-color: var(--bs-accordion-btn-bg);\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: var(--bs-accordion-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.accordion-button[data-v-0851419a] {\n    transition: none;\n}\n}\n.accordion-button[data-v-0851419a]:not(.collapsed) {\n  color: var(--bs-accordion-active-color);\n  background-color: var(--bs-accordion-active-bg);\n  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);\n}\n.accordion-button[data-v-0851419a]:not(.collapsed)::after {\n  background-image: var(--bs-accordion-btn-active-icon);\n  transform: var(--bs-accordion-btn-icon-transform);\n}\n.accordion-button[data-v-0851419a]::after {\n  flex-shrink: 0;\n  width: var(--bs-accordion-btn-icon-width);\n  height: var(--bs-accordion-btn-icon-width);\n  margin-left: auto;\n  content: \"\";\n  background-image: var(--bs-accordion-btn-icon);\n  background-repeat: no-repeat;\n  background-size: var(--bs-accordion-btn-icon-width);\n  transition: var(--bs-accordion-btn-icon-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.accordion-button[data-v-0851419a]::after {\n    transition: none;\n}\n}\n.accordion-button[data-v-0851419a]:hover {\n  z-index: 2;\n}\n.accordion-button[data-v-0851419a]:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: var(--bs-accordion-btn-focus-box-shadow);\n}\n.accordion-header[data-v-0851419a] {\n  margin-bottom: 0;\n}\n.accordion-item[data-v-0851419a] {\n  color: var(--bs-accordion-color);\n  background-color: var(--bs-accordion-bg);\n  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);\n}\n.accordion-item[data-v-0851419a]:first-of-type {\n  border-top-left-radius: var(--bs-accordion-border-radius);\n  border-top-right-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:first-of-type > .accordion-header .accordion-button[data-v-0851419a] {\n  border-top-left-radius: var(--bs-accordion-inner-border-radius);\n  border-top-right-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item[data-v-0851419a]:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item[data-v-0851419a]:last-of-type {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:last-of-type > .accordion-header .accordion-button.collapsed[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item:last-of-type > .accordion-collapse[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n.accordion-body[data-v-0851419a] {\n  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);\n}\n.accordion-flush > .accordion-item[data-v-0851419a] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush > .accordion-item[data-v-0851419a]:first-child {\n  border-top: 0;\n}\n.accordion-flush > .accordion-item[data-v-0851419a]:last-child {\n  border-bottom: 0;\n}\n.accordion-flush > .accordion-item > .accordion-header .accordion-button[data-v-0851419a], .accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed[data-v-0851419a] {\n  border-radius: 0;\n}\n.accordion-flush > .accordion-item > .accordion-collapse[data-v-0851419a] {\n  border-radius: 0;\n}\n[data-bs-theme=dark] .accordion-button[data-v-0851419a]::after {\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n.breadcrumb[data-v-0851419a] {\n  --bs-breadcrumb-padding-x: 0;\n  --bs-breadcrumb-padding-y: 0;\n  --bs-breadcrumb-margin-bottom: 1rem;\n  --bs-breadcrumb-bg: ;\n  --bs-breadcrumb-border-radius: ;\n  --bs-breadcrumb-divider-color: var(--bs-secondary-color);\n  --bs-breadcrumb-item-padding-x: 0.5rem;\n  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);\n  margin-bottom: var(--bs-breadcrumb-margin-bottom);\n  font-size: var(--bs-breadcrumb-font-size);\n  list-style: none;\n  background-color: var(--bs-breadcrumb-bg);\n  border-radius: var(--bs-breadcrumb-border-radius);\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0851419a] {\n  padding-left: var(--bs-breadcrumb-item-padding-x);\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0851419a]::before {\n  float: left;\n  padding-right: var(--bs-breadcrumb-item-padding-x);\n  color: var(--bs-breadcrumb-divider-color);\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active[data-v-0851419a] {\n  color: var(--bs-breadcrumb-item-active-color);\n}\n.pagination[data-v-0851419a] {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: var(--bs-link-color);\n  --bs-pagination-bg: var(--bs-body-bg);\n  --bs-pagination-border-width: var(--bs-border-width);\n  --bs-pagination-border-color: var(--bs-border-color);\n  --bs-pagination-border-radius: var(--bs-border-radius);\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: var(--bs-tertiary-bg);\n  --bs-pagination-hover-border-color: var(--bs-border-color);\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: var(--bs-secondary-bg);\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: var(--bs-secondary-color);\n  --bs-pagination-disabled-bg: var(--bs-secondary-bg);\n  --bs-pagination-disabled-border-color: var(--bs-border-color);\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n.page-link[data-v-0851419a] {\n  position: relative;\n  display: block;\n  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);\n  font-size: var(--bs-pagination-font-size);\n  color: var(--bs-pagination-color);\n  text-decoration: none;\n  background-color: var(--bs-pagination-bg);\n  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.page-link[data-v-0851419a] {\n    transition: none;\n}\n}\n.page-link[data-v-0851419a]:hover {\n  z-index: 2;\n  color: var(--bs-pagination-hover-color);\n  background-color: var(--bs-pagination-hover-bg);\n  border-color: var(--bs-pagination-hover-border-color);\n}\n.page-link[data-v-0851419a]:focus {\n  z-index: 3;\n  color: var(--bs-pagination-focus-color);\n  background-color: var(--bs-pagination-focus-bg);\n  outline: 0;\n  box-shadow: var(--bs-pagination-focus-box-shadow);\n}\n.page-link.active[data-v-0851419a], .active > .page-link[data-v-0851419a] {\n  z-index: 3;\n  color: var(--bs-pagination-active-color);\n  background-color: var(--bs-pagination-active-bg);\n  border-color: var(--bs-pagination-active-border-color);\n}\n.page-link.disabled[data-v-0851419a], .disabled > .page-link[data-v-0851419a] {\n  color: var(--bs-pagination-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-pagination-disabled-bg);\n  border-color: var(--bs-pagination-disabled-border-color);\n}\n.page-item:not(:first-child) .page-link[data-v-0851419a] {\n  margin-left: calc(var(--bs-border-width) * -1);\n}\n.page-item:first-child .page-link[data-v-0851419a] {\n  border-top-left-radius: var(--bs-pagination-border-radius);\n  border-bottom-left-radius: var(--bs-pagination-border-radius);\n}\n.page-item:last-child .page-link[data-v-0851419a] {\n  border-top-right-radius: var(--bs-pagination-border-radius);\n  border-bottom-right-radius: var(--bs-pagination-border-radius);\n}\n.pagination-lg[data-v-0851419a] {\n  --bs-pagination-padding-x: 1.5rem;\n  --bs-pagination-padding-y: 0.75rem;\n  --bs-pagination-font-size: 1.25rem;\n  --bs-pagination-border-radius: var(--bs-border-radius-lg);\n}\n.pagination-sm[data-v-0851419a] {\n  --bs-pagination-padding-x: 0.5rem;\n  --bs-pagination-padding-y: 0.25rem;\n  --bs-pagination-font-size: 0.875rem;\n  --bs-pagination-border-radius: var(--bs-border-radius-sm);\n}\n.badge[data-v-0851419a] {\n  --bs-badge-padding-x: 0.65em;\n  --bs-badge-padding-y: 0.35em;\n  --bs-badge-font-size: 0.75em;\n  --bs-badge-font-weight: 700;\n  --bs-badge-color: #fff;\n  --bs-badge-border-radius: var(--bs-border-radius);\n  display: inline-block;\n  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);\n  font-size: var(--bs-badge-font-size);\n  font-weight: var(--bs-badge-font-weight);\n  line-height: 1;\n  color: var(--bs-badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: var(--bs-badge-border-radius);\n}\n.badge[data-v-0851419a]:empty {\n  display: none;\n}\n.btn .badge[data-v-0851419a] {\n  position: relative;\n  top: -1px;\n}\n.alert[data-v-0851419a] {\n  --bs-alert-bg: transparent;\n  --bs-alert-padding-x: 1rem;\n  --bs-alert-padding-y: 1rem;\n  --bs-alert-margin-bottom: 1rem;\n  --bs-alert-color: inherit;\n  --bs-alert-border-color: transparent;\n  --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);\n  --bs-alert-border-radius: var(--bs-border-radius);\n  --bs-alert-link-color: inherit;\n  position: relative;\n  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);\n  margin-bottom: var(--bs-alert-margin-bottom);\n  color: var(--bs-alert-color);\n  background-color: var(--bs-alert-bg);\n  border: var(--bs-alert-border);\n  border-radius: var(--bs-alert-border-radius);\n}\n.alert-heading[data-v-0851419a] {\n  color: inherit;\n}\n.alert-link[data-v-0851419a] {\n  font-weight: 700;\n  color: var(--bs-alert-link-color);\n}\n.alert-dismissible[data-v-0851419a] {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close[data-v-0851419a] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n.alert-primary[data-v-0851419a] {\n  --bs-alert-color: var(--bs-primary-text-emphasis);\n  --bs-alert-bg: var(--bs-primary-bg-subtle);\n  --bs-alert-border-color: var(--bs-primary-border-subtle);\n  --bs-alert-link-color: var(--bs-primary-text-emphasis);\n}\n.alert-secondary[data-v-0851419a] {\n  --bs-alert-color: var(--bs-secondary-text-emphasis);\n  --bs-alert-bg: var(--bs-secondary-bg-subtle);\n  --bs-alert-border-color: var(--bs-secondary-border-subtle);\n  --bs-alert-link-color: var(--bs-secondary-text-emphasis);\n}\n.alert-success[data-v-0851419a] {\n  --bs-alert-color: var(--bs-success-text-emphasis);\n  --bs-alert-bg: var(--bs-success-bg-subtle);\n  --bs-alert-border-color: var(--bs-success-border-subtle);\n  --bs-alert-link-color: var(--bs-success-text-emphasis);\n}\n.alert-info[data-v-0851419a] {\n  --bs-alert-color: var(--bs-info-text-emphasis);\n  --bs-alert-bg: var(--bs-info-bg-subtle);\n  --bs-alert-border-color: var(--bs-info-border-subtle);\n  --bs-alert-link-color: var(--bs-info-text-emphasis);\n}\n.alert-warning[data-v-0851419a] {\n  --bs-alert-color: var(--bs-warning-text-emphasis);\n  --bs-alert-bg: var(--bs-warning-bg-subtle);\n  --bs-alert-border-color: var(--bs-warning-border-subtle);\n  --bs-alert-link-color: var(--bs-warning-text-emphasis);\n}\n.alert-danger[data-v-0851419a] {\n  --bs-alert-color: var(--bs-danger-text-emphasis);\n  --bs-alert-bg: var(--bs-danger-bg-subtle);\n  --bs-alert-border-color: var(--bs-danger-border-subtle);\n  --bs-alert-link-color: var(--bs-danger-text-emphasis);\n}\n.alert-light[data-v-0851419a] {\n  --bs-alert-color: var(--bs-light-text-emphasis);\n  --bs-alert-bg: var(--bs-light-bg-subtle);\n  --bs-alert-border-color: var(--bs-light-border-subtle);\n  --bs-alert-link-color: var(--bs-light-text-emphasis);\n}\n.alert-dark[data-v-0851419a] {\n  --bs-alert-color: var(--bs-dark-text-emphasis);\n  --bs-alert-bg: var(--bs-dark-bg-subtle);\n  --bs-alert-border-color: var(--bs-dark-border-subtle);\n  --bs-alert-link-color: var(--bs-dark-text-emphasis);\n}\n@keyframes progress-bar-stripes-0851419a {\n0% {\n    background-position-x: 1rem;\n}\n}\n.progress[data-v-0851419a],\n.progress-stacked[data-v-0851419a] {\n  --bs-progress-height: 1rem;\n  --bs-progress-font-size: 0.75rem;\n  --bs-progress-bg: var(--bs-secondary-bg);\n  --bs-progress-border-radius: var(--bs-border-radius);\n  --bs-progress-box-shadow: var(--bs-box-shadow-inset);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #0d6efd;\n  --bs-progress-bar-transition: width 0.6s ease;\n  display: flex;\n  height: var(--bs-progress-height);\n  overflow: hidden;\n  font-size: var(--bs-progress-font-size);\n  background-color: var(--bs-progress-bg);\n  border-radius: var(--bs-progress-border-radius);\n}\n.progress-bar[data-v-0851419a] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--bs-progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-progress-bar-bg);\n  transition: var(--bs-progress-bar-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar[data-v-0851419a] {\n    transition: none;\n}\n}\n.progress-bar-striped[data-v-0851419a] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: var(--bs-progress-height) var(--bs-progress-height);\n}\n.progress-stacked > .progress[data-v-0851419a] {\n  overflow: visible;\n}\n.progress-stacked > .progress > .progress-bar[data-v-0851419a] {\n  width: 100%;\n}\n.progress-bar-animated[data-v-0851419a] {\n  animation: 1s linear infinite progress-bar-stripes-0851419a;\n}\n@media (prefers-reduced-motion: reduce) {\n.progress-bar-animated[data-v-0851419a] {\n    animation: none;\n}\n}\n.list-group[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-body-color);\n  --bs-list-group-bg: var(--bs-body-bg);\n  --bs-list-group-border-color: var(--bs-border-color);\n  --bs-list-group-border-width: var(--bs-border-width);\n  --bs-list-group-border-radius: var(--bs-border-radius);\n  --bs-list-group-item-padding-x: 1rem;\n  --bs-list-group-item-padding-y: 0.5rem;\n  --bs-list-group-action-color: var(--bs-secondary-color);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);\n  --bs-list-group-action-active-color: var(--bs-body-color);\n  --bs-list-group-action-active-bg: var(--bs-secondary-bg);\n  --bs-list-group-disabled-color: var(--bs-secondary-color);\n  --bs-list-group-disabled-bg: var(--bs-body-bg);\n  --bs-list-group-active-color: #fff;\n  --bs-list-group-active-bg: #0d6efd;\n  --bs-list-group-active-border-color: #0d6efd;\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: var(--bs-list-group-border-radius);\n}\n.list-group-numbered[data-v-0851419a] {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > .list-group-item[data-v-0851419a]::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n.list-group-item-action[data-v-0851419a] {\n  width: 100%;\n  color: var(--bs-list-group-action-color);\n  text-align: inherit;\n}\n.list-group-item-action[data-v-0851419a]:hover, .list-group-item-action[data-v-0851419a]:focus {\n  z-index: 1;\n  color: var(--bs-list-group-action-hover-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-action-hover-bg);\n}\n.list-group-item-action[data-v-0851419a]:active {\n  color: var(--bs-list-group-action-active-color);\n  background-color: var(--bs-list-group-action-active-bg);\n}\n.list-group-item[data-v-0851419a] {\n  position: relative;\n  display: block;\n  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);\n  color: var(--bs-list-group-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-bg);\n  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);\n}\n.list-group-item[data-v-0851419a]:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item[data-v-0851419a]:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled[data-v-0851419a], .list-group-item[data-v-0851419a]:disabled {\n  color: var(--bs-list-group-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-list-group-disabled-bg);\n}\n.list-group-item.active[data-v-0851419a] {\n  z-index: 2;\n  color: var(--bs-list-group-active-color);\n  background-color: var(--bs-list-group-active-bg);\n  border-color: var(--bs-list-group-active-border-color);\n}\n.list-group-item + .list-group-item[data-v-0851419a] {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active[data-v-0851419a] {\n  margin-top: calc(-1 * var(--bs-list-group-border-width));\n  border-top-width: var(--bs-list-group-border-width);\n}\n.list-group-horizontal[data-v-0851419a] {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n  border-bottom-left-radius: var(--bs-list-group-border-radius);\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n  border-top-right-radius: var(--bs-list-group-border-radius);\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active[data-v-0851419a] {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item[data-v-0851419a] {\n  border-top-width: var(--bs-list-group-border-width);\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active[data-v-0851419a] {\n  margin-left: calc(-1 * var(--bs-list-group-border-width));\n  border-left-width: var(--bs-list-group-border-width);\n}\n@media (min-width: 576px) {\n.list-group-horizontal-sm[data-v-0851419a] {\n    flex-direction: row;\n}\n.list-group-horizontal-sm > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item.active[data-v-0851419a] {\n    margin-top: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item[data-v-0851419a] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item.active[data-v-0851419a] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 768px) {\n.list-group-horizontal-md[data-v-0851419a] {\n    flex-direction: row;\n}\n.list-group-horizontal-md > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item.active[data-v-0851419a] {\n    margin-top: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item[data-v-0851419a] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item.active[data-v-0851419a] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 992px) {\n.list-group-horizontal-lg[data-v-0851419a] {\n    flex-direction: row;\n}\n.list-group-horizontal-lg > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item.active[data-v-0851419a] {\n    margin-top: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item[data-v-0851419a] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item.active[data-v-0851419a] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 1200px) {\n.list-group-horizontal-xl[data-v-0851419a] {\n    flex-direction: row;\n}\n.list-group-horizontal-xl > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item.active[data-v-0851419a] {\n    margin-top: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item[data-v-0851419a] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item.active[data-v-0851419a] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n@media (min-width: 1400px) {\n.list-group-horizontal-xxl[data-v-0851419a] {\n    flex-direction: row;\n}\n.list-group-horizontal-xxl > .list-group-item[data-v-0851419a]:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-xxl > .list-group-item[data-v-0851419a]:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-xxl > .list-group-item.active[data-v-0851419a] {\n    margin-top: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item[data-v-0851419a] {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item.active[data-v-0851419a] {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n}\n}\n.list-group-flush[data-v-0851419a] {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item[data-v-0851419a] {\n  border-width: 0 0 var(--bs-list-group-border-width);\n}\n.list-group-flush > .list-group-item[data-v-0851419a]:last-child {\n  border-bottom-width: 0;\n}\n.list-group-item-primary[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-primary-text-emphasis);\n  --bs-list-group-bg: var(--bs-primary-bg-subtle);\n  --bs-list-group-border-color: var(--bs-primary-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);\n  --bs-list-group-active-color: var(--bs-primary-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);\n}\n.list-group-item-secondary[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-secondary-text-emphasis);\n  --bs-list-group-bg: var(--bs-secondary-bg-subtle);\n  --bs-list-group-border-color: var(--bs-secondary-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);\n  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);\n}\n.list-group-item-success[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-success-text-emphasis);\n  --bs-list-group-bg: var(--bs-success-bg-subtle);\n  --bs-list-group-border-color: var(--bs-success-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);\n  --bs-list-group-active-color: var(--bs-success-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-success-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);\n}\n.list-group-item-info[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-info-text-emphasis);\n  --bs-list-group-bg: var(--bs-info-bg-subtle);\n  --bs-list-group-border-color: var(--bs-info-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);\n  --bs-list-group-active-color: var(--bs-info-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-info-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);\n}\n.list-group-item-warning[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-warning-text-emphasis);\n  --bs-list-group-bg: var(--bs-warning-bg-subtle);\n  --bs-list-group-border-color: var(--bs-warning-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);\n  --bs-list-group-active-color: var(--bs-warning-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);\n}\n.list-group-item-danger[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-danger-text-emphasis);\n  --bs-list-group-bg: var(--bs-danger-bg-subtle);\n  --bs-list-group-border-color: var(--bs-danger-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);\n  --bs-list-group-active-color: var(--bs-danger-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);\n}\n.list-group-item-light[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-light-text-emphasis);\n  --bs-list-group-bg: var(--bs-light-bg-subtle);\n  --bs-list-group-border-color: var(--bs-light-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);\n  --bs-list-group-active-color: var(--bs-light-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-light-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);\n}\n.list-group-item-dark[data-v-0851419a] {\n  --bs-list-group-color: var(--bs-dark-text-emphasis);\n  --bs-list-group-bg: var(--bs-dark-bg-subtle);\n  --bs-list-group-border-color: var(--bs-dark-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);\n  --bs-list-group-active-color: var(--bs-dark-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);\n}\n.btn-close[data-v-0851419a] {\n  --bs-btn-close-color: #000;\n  --bs-btn-close-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\");\n  --bs-btn-close-opacity: 0.5;\n  --bs-btn-close-hover-opacity: 0.75;\n  --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-btn-close-focus-opacity: 1;\n  --bs-btn-close-disabled-opacity: 0.25;\n  --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: var(--bs-btn-close-color);\n  background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.375rem;\n  opacity: var(--bs-btn-close-opacity);\n}\n.btn-close[data-v-0851419a]:hover {\n  color: var(--bs-btn-close-color);\n  text-decoration: none;\n  opacity: var(--bs-btn-close-hover-opacity);\n}\n.btn-close[data-v-0851419a]:focus {\n  outline: 0;\n  box-shadow: var(--bs-btn-close-focus-shadow);\n  opacity: var(--bs-btn-close-focus-opacity);\n}\n.btn-close[data-v-0851419a]:disabled, .btn-close.disabled[data-v-0851419a] {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  opacity: var(--bs-btn-close-disabled-opacity);\n}\n.btn-close-white[data-v-0851419a] {\n  filter: var(--bs-btn-close-white-filter);\n}\n[data-bs-theme=dark] .btn-close[data-v-0851419a] {\n  filter: var(--bs-btn-close-white-filter);\n}\n.toast[data-v-0851419a] {\n  --bs-toast-zindex: 1090;\n  --bs-toast-padding-x: 0.75rem;\n  --bs-toast-padding-y: 0.5rem;\n  --bs-toast-spacing: 1.5rem;\n  --bs-toast-max-width: 350px;\n  --bs-toast-font-size: 0.875rem;\n  --bs-toast-color: ;\n  --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85);\n  --bs-toast-border-width: var(--bs-border-width);\n  --bs-toast-border-color: var(--bs-border-color-translucent);\n  --bs-toast-border-radius: var(--bs-border-radius);\n  --bs-toast-box-shadow: var(--bs-box-shadow);\n  --bs-toast-header-color: var(--bs-secondary-color);\n  --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85);\n  --bs-toast-header-border-color: var(--bs-border-color-translucent);\n  width: var(--bs-toast-max-width);\n  max-width: 100%;\n  font-size: var(--bs-toast-font-size);\n  color: var(--bs-toast-color);\n  pointer-events: auto;\n  background-color: var(--bs-toast-bg);\n  background-clip: padding-box;\n  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);\n  box-shadow: var(--bs-toast-box-shadow);\n  border-radius: var(--bs-toast-border-radius);\n}\n.toast.showing[data-v-0851419a] {\n  opacity: 0;\n}\n.toast[data-v-0851419a]:not(.show) {\n  display: none;\n}\n.toast-container[data-v-0851419a] {\n  --bs-toast-zindex: 1090;\n  position: absolute;\n  z-index: var(--bs-toast-zindex);\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container[data-v-0851419a] > :not(:last-child) {\n  margin-bottom: var(--bs-toast-spacing);\n}\n.toast-header[data-v-0851419a] {\n  display: flex;\n  align-items: center;\n  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);\n  color: var(--bs-toast-header-color);\n  background-color: var(--bs-toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);\n  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n}\n.toast-header .btn-close[data-v-0851419a] {\n  margin-right: calc(-.5 * var(--bs-toast-padding-x));\n  margin-left: var(--bs-toast-padding-x);\n}\n.toast-body[data-v-0851419a] {\n  padding: var(--bs-toast-padding-x);\n  word-wrap: break-word;\n}\n.modal[data-v-0851419a] {\n  --bs-modal-zindex: 1055;\n  --bs-modal-width: 500px;\n  --bs-modal-padding: 1rem;\n  --bs-modal-margin: 0.5rem;\n  --bs-modal-color: ;\n  --bs-modal-bg: var(--bs-body-bg);\n  --bs-modal-border-color: var(--bs-border-color-translucent);\n  --bs-modal-border-width: var(--bs-border-width);\n  --bs-modal-border-radius: var(--bs-border-radius-lg);\n  --bs-modal-box-shadow: var(--bs-box-shadow-sm);\n  --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));\n  --bs-modal-header-padding-x: 1rem;\n  --bs-modal-header-padding-y: 1rem;\n  --bs-modal-header-padding: 1rem 1rem;\n  --bs-modal-header-border-color: var(--bs-border-color);\n  --bs-modal-header-border-width: var(--bs-border-width);\n  --bs-modal-title-line-height: 1.5;\n  --bs-modal-footer-gap: 0.5rem;\n  --bs-modal-footer-bg: ;\n  --bs-modal-footer-border-color: var(--bs-border-color);\n  --bs-modal-footer-border-width: var(--bs-border-width);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n.modal-dialog[data-v-0851419a] {\n  position: relative;\n  width: auto;\n  margin: var(--bs-modal-margin);\n  pointer-events: none;\n}\n.modal.fade .modal-dialog[data-v-0851419a] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n.modal.fade .modal-dialog[data-v-0851419a] {\n    transition: none;\n}\n}\n.modal.show .modal-dialog[data-v-0851419a] {\n  transform: none;\n}\n.modal.modal-static .modal-dialog[data-v-0851419a] {\n  transform: scale(1.02);\n}\n.modal-dialog-scrollable[data-v-0851419a] {\n  height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-dialog-scrollable .modal-content[data-v-0851419a] {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body[data-v-0851419a] {\n  overflow-y: auto;\n}\n.modal-dialog-centered[data-v-0851419a] {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-content[data-v-0851419a] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: var(--bs-modal-color);\n  pointer-events: auto;\n  background-color: var(--bs-modal-bg);\n  background-clip: padding-box;\n  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);\n  border-radius: var(--bs-modal-border-radius);\n  outline: 0;\n}\n.modal-backdrop[data-v-0851419a] {\n  --bs-backdrop-zindex: 1050;\n  --bs-backdrop-bg: #000;\n  --bs-backdrop-opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-backdrop-zindex);\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bs-backdrop-bg);\n}\n.modal-backdrop.fade[data-v-0851419a] {\n  opacity: 0;\n}\n.modal-backdrop.show[data-v-0851419a] {\n  opacity: var(--bs-backdrop-opacity);\n}\n.modal-header[data-v-0851419a] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  padding: var(--bs-modal-header-padding);\n  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);\n  border-top-left-radius: var(--bs-modal-inner-border-radius);\n  border-top-right-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-header .btn-close[data-v-0851419a] {\n  padding: calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);\n  margin: calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto;\n}\n.modal-title[data-v-0851419a] {\n  margin-bottom: 0;\n  line-height: var(--bs-modal-title-line-height);\n}\n.modal-body[data-v-0851419a] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: var(--bs-modal-padding);\n}\n.modal-footer[data-v-0851419a] {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-footer > *[data-v-0851419a] {\n  margin: calc(var(--bs-modal-footer-gap) * .5);\n}\n@media (min-width: 576px) {\n.modal[data-v-0851419a] {\n    --bs-modal-margin: 1.75rem;\n    --bs-modal-box-shadow: var(--bs-box-shadow);\n}\n.modal-dialog[data-v-0851419a] {\n    max-width: var(--bs-modal-width);\n    margin-right: auto;\n    margin-left: auto;\n}\n.modal-sm[data-v-0851419a] {\n    --bs-modal-width: 300px;\n}\n}\n@media (min-width: 992px) {\n.modal-lg[data-v-0851419a],\n.modal-xl[data-v-0851419a] {\n    --bs-modal-width: 800px;\n}\n}\n@media (min-width: 1200px) {\n.modal-xl[data-v-0851419a] {\n    --bs-modal-width: 1140px;\n}\n}\n.modal-fullscreen[data-v-0851419a] {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content[data-v-0851419a] {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header[data-v-0851419a],\n.modal-fullscreen .modal-footer[data-v-0851419a] {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body[data-v-0851419a] {\n  overflow-y: auto;\n}\n@media (max-width: 575.98px) {\n.modal-fullscreen-sm-down[data-v-0851419a] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-sm-down .modal-content[data-v-0851419a] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal-fullscreen-sm-down .modal-header[data-v-0851419a],\n.modal-fullscreen-sm-down .modal-footer[data-v-0851419a] {\n    border-radius: 0;\n}\n.modal-fullscreen-sm-down .modal-body[data-v-0851419a] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 767.98px) {\n.modal-fullscreen-md-down[data-v-0851419a] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-md-down .modal-content[data-v-0851419a] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal-fullscreen-md-down .modal-header[data-v-0851419a],\n.modal-fullscreen-md-down .modal-footer[data-v-0851419a] {\n    border-radius: 0;\n}\n.modal-fullscreen-md-down .modal-body[data-v-0851419a] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 991.98px) {\n.modal-fullscreen-lg-down[data-v-0851419a] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-lg-down .modal-content[data-v-0851419a] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal-fullscreen-lg-down .modal-header[data-v-0851419a],\n.modal-fullscreen-lg-down .modal-footer[data-v-0851419a] {\n    border-radius: 0;\n}\n.modal-fullscreen-lg-down .modal-body[data-v-0851419a] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 1199.98px) {\n.modal-fullscreen-xl-down[data-v-0851419a] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-xl-down .modal-content[data-v-0851419a] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal-fullscreen-xl-down .modal-header[data-v-0851419a],\n.modal-fullscreen-xl-down .modal-footer[data-v-0851419a] {\n    border-radius: 0;\n}\n.modal-fullscreen-xl-down .modal-body[data-v-0851419a] {\n    overflow-y: auto;\n}\n}\n@media (max-width: 1399.98px) {\n.modal-fullscreen-xxl-down[data-v-0851419a] {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal-fullscreen-xxl-down .modal-content[data-v-0851419a] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal-fullscreen-xxl-down .modal-header[data-v-0851419a],\n.modal-fullscreen-xxl-down .modal-footer[data-v-0851419a] {\n    border-radius: 0;\n}\n.modal-fullscreen-xxl-down .modal-body[data-v-0851419a] {\n    overflow-y: auto;\n}\n}\n.tooltip[data-v-0851419a] {\n  --bs-tooltip-zindex: 1080;\n  --bs-tooltip-max-width: 200px;\n  --bs-tooltip-padding-x: 0.5rem;\n  --bs-tooltip-padding-y: 0.25rem;\n  --bs-tooltip-margin: ;\n  --bs-tooltip-font-size: 0.875rem;\n  --bs-tooltip-color: var(--bs-body-bg);\n  --bs-tooltip-bg: var(--bs-emphasis-color);\n  --bs-tooltip-border-radius: var(--bs-border-radius);\n  --bs-tooltip-opacity: 0.9;\n  --bs-tooltip-arrow-width: 0.8rem;\n  --bs-tooltip-arrow-height: 0.4rem;\n  z-index: var(--bs-tooltip-zindex);\n  display: block;\n  margin: var(--bs-tooltip-margin);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-tooltip-font-size);\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show[data-v-0851419a] {\n  opacity: var(--bs-tooltip-opacity);\n}\n.tooltip .tooltip-arrow[data-v-0851419a] {\n  display: block;\n  width: var(--bs-tooltip-arrow-width);\n  height: var(--bs-tooltip-arrow-height);\n}\n.tooltip .tooltip-arrow[data-v-0851419a]::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top .tooltip-arrow[data-v-0851419a], .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow[data-v-0851419a] {\n  bottom: calc(-1 * var(--bs-tooltip-arrow-height));\n}\n.bs-tooltip-top .tooltip-arrow[data-v-0851419a]::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow[data-v-0851419a]::before {\n  top: -1px;\n  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;\n  border-top-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow[data-v-0851419a], .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow[data-v-0851419a] {\n  left: calc(-1 * var(--bs-tooltip-arrow-height));\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-end .tooltip-arrow[data-v-0851419a]::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow[data-v-0851419a]::before {\n  right: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;\n  border-right-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.bs-tooltip-bottom .tooltip-arrow[data-v-0851419a], .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow[data-v-0851419a] {\n  top: calc(-1 * var(--bs-tooltip-arrow-height));\n}\n.bs-tooltip-bottom .tooltip-arrow[data-v-0851419a]::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow[data-v-0851419a]::before {\n  bottom: -1px;\n  border-width: 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);\n  border-bottom-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow[data-v-0851419a], .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow[data-v-0851419a] {\n  right: calc(-1 * var(--bs-tooltip-arrow-height));\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-start .tooltip-arrow[data-v-0851419a]::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow[data-v-0851419a]::before {\n  left: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);\n  border-left-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.tooltip-inner[data-v-0851419a] {\n  max-width: var(--bs-tooltip-max-width);\n  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);\n  color: var(--bs-tooltip-color);\n  text-align: center;\n  background-color: var(--bs-tooltip-bg);\n  border-radius: var(--bs-tooltip-border-radius);\n}\n.popover[data-v-0851419a] {\n  --bs-popover-zindex: 1070;\n  --bs-popover-max-width: 276px;\n  --bs-popover-font-size: 0.875rem;\n  --bs-popover-bg: var(--bs-body-bg);\n  --bs-popover-border-width: var(--bs-border-width);\n  --bs-popover-border-color: var(--bs-border-color-translucent);\n  --bs-popover-border-radius: var(--bs-border-radius-lg);\n  --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));\n  --bs-popover-box-shadow: var(--bs-box-shadow);\n  --bs-popover-header-padding-x: 1rem;\n  --bs-popover-header-padding-y: 0.5rem;\n  --bs-popover-header-font-size: 1rem;\n  --bs-popover-header-color: inherit;\n  --bs-popover-header-bg: var(--bs-secondary-bg);\n  --bs-popover-body-padding-x: 1rem;\n  --bs-popover-body-padding-y: 1rem;\n  --bs-popover-body-color: var(--bs-body-color);\n  --bs-popover-arrow-width: 1rem;\n  --bs-popover-arrow-height: 0.5rem;\n  --bs-popover-arrow-border: var(--bs-popover-border-color);\n  z-index: var(--bs-popover-zindex);\n  display: block;\n  max-width: var(--bs-popover-max-width);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-popover-font-size);\n  word-wrap: break-word;\n  background-color: var(--bs-popover-bg);\n  background-clip: padding-box;\n  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-radius: var(--bs-popover-border-radius);\n}\n.popover .popover-arrow[data-v-0851419a] {\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  height: var(--bs-popover-arrow-height);\n}\n.popover .popover-arrow[data-v-0851419a]::before, .popover .popover-arrow[data-v-0851419a]::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n  border-width: 0;\n}\n.bs-popover-top > .popover-arrow[data-v-0851419a], .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-0851419a] {\n  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-top > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-0851419a]::before, .bs-popover-top > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-0851419a]::after {\n  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0;\n}\n.bs-popover-top > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-0851419a]::before {\n  bottom: 0;\n  border-top-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-top > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow[data-v-0851419a]::after {\n  bottom: var(--bs-popover-border-width);\n  border-top-color: var(--bs-popover-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-end > .popover-arrow[data-v-0851419a], .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-0851419a] {\n  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-end > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-0851419a]::before, .bs-popover-end > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-0851419a]::after {\n  border-width: calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0;\n}\n.bs-popover-end > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-0851419a]::before {\n  left: 0;\n  border-right-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-end > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow[data-v-0851419a]::after {\n  left: var(--bs-popover-border-width);\n  border-right-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.bs-popover-bottom > .popover-arrow[data-v-0851419a], .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-0851419a] {\n  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-bottom > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-0851419a]::before, .bs-popover-bottom > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-0851419a]::after {\n  border-width: 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height);\n}\n.bs-popover-bottom > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-0851419a]::before {\n  top: 0;\n  border-bottom-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-bottom > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow[data-v-0851419a]::after {\n  top: var(--bs-popover-border-width);\n  border-bottom-color: var(--bs-popover-bg);\n}\n.bs-popover-bottom .popover-header[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header[data-v-0851419a]::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  margin-left: calc(-.5 * var(--bs-popover-arrow-width));\n  content: \"\";\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-start > .popover-arrow[data-v-0851419a], .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-0851419a] {\n  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-start > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-0851419a]::before, .bs-popover-start > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-0851419a]::after {\n  border-width: calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height);\n}\n.bs-popover-start > .popover-arrow[data-v-0851419a]::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-0851419a]::before {\n  right: 0;\n  border-left-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-start > .popover-arrow[data-v-0851419a]::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow[data-v-0851419a]::after {\n  right: var(--bs-popover-border-width);\n  border-left-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.popover-header[data-v-0851419a] {\n  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);\n  margin-bottom: 0;\n  font-size: var(--bs-popover-header-font-size);\n  color: var(--bs-popover-header-color);\n  background-color: var(--bs-popover-header-bg);\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-top-left-radius: var(--bs-popover-inner-border-radius);\n  border-top-right-radius: var(--bs-popover-inner-border-radius);\n}\n.popover-header[data-v-0851419a]:empty {\n  display: none;\n}\n.popover-body[data-v-0851419a] {\n  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);\n  color: var(--bs-popover-body-color);\n}\n.carousel[data-v-0851419a] {\n  position: relative;\n}\n.carousel.pointer-event[data-v-0851419a] {\n  touch-action: pan-y;\n}\n.carousel-inner[data-v-0851419a] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner[data-v-0851419a]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item[data-v-0851419a] {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-item[data-v-0851419a] {\n    transition: none;\n}\n}\n.carousel-item.active[data-v-0851419a],\n.carousel-item-next[data-v-0851419a],\n.carousel-item-prev[data-v-0851419a] {\n  display: block;\n}\n.carousel-item-next[data-v-0851419a]:not(.carousel-item-start),\n.active.carousel-item-end[data-v-0851419a] {\n  transform: translateX(100%);\n}\n.carousel-item-prev[data-v-0851419a]:not(.carousel-item-end),\n.active.carousel-item-start[data-v-0851419a] {\n  transform: translateX(-100%);\n}\n.carousel-fade .carousel-item[data-v-0851419a] {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active[data-v-0851419a],\n.carousel-fade .carousel-item-next.carousel-item-start[data-v-0851419a],\n.carousel-fade .carousel-item-prev.carousel-item-end[data-v-0851419a] {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start[data-v-0851419a],\n.carousel-fade .active.carousel-item-end[data-v-0851419a] {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-fade .active.carousel-item-start[data-v-0851419a],\n.carousel-fade .active.carousel-item-end[data-v-0851419a] {\n    transition: none;\n}\n}\n.carousel-control-prev[data-v-0851419a],\n.carousel-control-next[data-v-0851419a] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-control-prev[data-v-0851419a],\n.carousel-control-next[data-v-0851419a] {\n    transition: none;\n}\n}\n.carousel-control-prev[data-v-0851419a]:hover, .carousel-control-prev[data-v-0851419a]:focus,\n.carousel-control-next[data-v-0851419a]:hover,\n.carousel-control-next[data-v-0851419a]:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev[data-v-0851419a] {\n  left: 0;\n}\n.carousel-control-next[data-v-0851419a] {\n  right: 0;\n}\n.carousel-control-prev-icon[data-v-0851419a],\n.carousel-control-next-icon[data-v-0851419a] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n.carousel-control-prev-icon[data-v-0851419a] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\") /*rtl:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")*/;\n}\n.carousel-control-next-icon[data-v-0851419a] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\") /*rtl:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")*/;\n}\n.carousel-indicators[data-v-0851419a] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n}\n.carousel-indicators [data-bs-target][data-v-0851419a] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n.carousel-indicators [data-bs-target][data-v-0851419a] {\n    transition: none;\n}\n}\n.carousel-indicators .active[data-v-0851419a] {\n  opacity: 1;\n}\n.carousel-caption[data-v-0851419a] {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n.carousel-dark .carousel-control-prev-icon[data-v-0851419a],\n.carousel-dark .carousel-control-next-icon[data-v-0851419a] {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target][data-v-0851419a] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption[data-v-0851419a] {\n  color: #000;\n}\n[data-bs-theme=dark] .carousel .carousel-control-prev-icon[data-v-0851419a],\n[data-bs-theme=dark] .carousel .carousel-control-next-icon[data-v-0851419a], [data-bs-theme=dark].carousel .carousel-control-prev-icon[data-v-0851419a],\n[data-bs-theme=dark].carousel .carousel-control-next-icon[data-v-0851419a] {\n  filter: invert(1) grayscale(100);\n}\n[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target][data-v-0851419a], [data-bs-theme=dark].carousel .carousel-indicators [data-bs-target][data-v-0851419a] {\n  background-color: #000;\n}\n[data-bs-theme=dark] .carousel .carousel-caption[data-v-0851419a], [data-bs-theme=dark].carousel .carousel-caption[data-v-0851419a] {\n  color: #000;\n}\n.spinner-grow[data-v-0851419a],\n.spinner-border[data-v-0851419a] {\n  display: inline-block;\n  width: var(--bs-spinner-width);\n  height: var(--bs-spinner-height);\n  vertical-align: var(--bs-spinner-vertical-align);\n  border-radius: 50%;\n  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);\n}\n@keyframes spinner-border-0851419a {\nto {\n    transform: rotate(360deg) /* rtl:ignore */;\n}\n}\n.spinner-border[data-v-0851419a] {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-border-width: 0.25em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-border;\n  border: var(--bs-spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n.spinner-border-sm[data-v-0851419a] {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n  --bs-spinner-border-width: 0.2em;\n}\n@keyframes spinner-grow-0851419a {\n0% {\n    transform: scale(0);\n}\n50% {\n    opacity: 1;\n    transform: none;\n}\n}\n.spinner-grow[data-v-0851419a] {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-grow;\n  background-color: currentcolor;\n  opacity: 0;\n}\n.spinner-grow-sm[data-v-0851419a] {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n.spinner-border[data-v-0851419a],\n.spinner-grow[data-v-0851419a] {\n    --bs-spinner-animation-speed: 1.5s;\n}\n}\n.offcanvas[data-v-0851419a], .offcanvas-xxl[data-v-0851419a], .offcanvas-xl[data-v-0851419a], .offcanvas-lg[data-v-0851419a], .offcanvas-md[data-v-0851419a], .offcanvas-sm[data-v-0851419a] {\n  --bs-offcanvas-zindex: 1045;\n  --bs-offcanvas-width: 400px;\n  --bs-offcanvas-height: 30vh;\n  --bs-offcanvas-padding-x: 1rem;\n  --bs-offcanvas-padding-y: 1rem;\n  --bs-offcanvas-color: var(--bs-body-color);\n  --bs-offcanvas-bg: var(--bs-body-bg);\n  --bs-offcanvas-border-width: var(--bs-border-width);\n  --bs-offcanvas-border-color: var(--bs-border-color-translucent);\n  --bs-offcanvas-box-shadow: var(--bs-box-shadow-sm);\n  --bs-offcanvas-transition: transform 0.3s ease-in-out;\n  --bs-offcanvas-title-line-height: 1.5;\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm[data-v-0851419a] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n}\n}\n@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-sm[data-v-0851419a] {\n    transition: none;\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-start[data-v-0851419a] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-end[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-top[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.offcanvas-bottom[data-v-0851419a] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.showing[data-v-0851419a], .offcanvas-sm.show[data-v-0851419a]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 575.98px) {\n.offcanvas-sm.showing[data-v-0851419a], .offcanvas-sm.hiding[data-v-0851419a], .offcanvas-sm.show[data-v-0851419a] {\n    visibility: visible;\n}\n}\n@media (min-width: 576px) {\n.offcanvas-sm[data-v-0851419a] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-sm .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.offcanvas-sm .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md[data-v-0851419a] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n}\n}\n@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-md[data-v-0851419a] {\n    transition: none;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-start[data-v-0851419a] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-end[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-top[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.offcanvas-bottom[data-v-0851419a] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.showing[data-v-0851419a], .offcanvas-md.show[data-v-0851419a]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 767.98px) {\n.offcanvas-md.showing[data-v-0851419a], .offcanvas-md.hiding[data-v-0851419a], .offcanvas-md.show[data-v-0851419a] {\n    visibility: visible;\n}\n}\n@media (min-width: 768px) {\n.offcanvas-md[data-v-0851419a] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-md .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.offcanvas-md .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg[data-v-0851419a] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n}\n}\n@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-lg[data-v-0851419a] {\n    transition: none;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-start[data-v-0851419a] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-end[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-top[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.offcanvas-bottom[data-v-0851419a] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.showing[data-v-0851419a], .offcanvas-lg.show[data-v-0851419a]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 991.98px) {\n.offcanvas-lg.showing[data-v-0851419a], .offcanvas-lg.hiding[data-v-0851419a], .offcanvas-lg.show[data-v-0851419a] {\n    visibility: visible;\n}\n}\n@media (min-width: 992px) {\n.offcanvas-lg[data-v-0851419a] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-lg .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.offcanvas-lg .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl[data-v-0851419a] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n}\n}\n@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-xl[data-v-0851419a] {\n    transition: none;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-start[data-v-0851419a] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-end[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-top[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.offcanvas-bottom[data-v-0851419a] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.showing[data-v-0851419a], .offcanvas-xl.show[data-v-0851419a]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 1199.98px) {\n.offcanvas-xl.showing[data-v-0851419a], .offcanvas-xl.hiding[data-v-0851419a], .offcanvas-xl.show[data-v-0851419a] {\n    visibility: visible;\n}\n}\n@media (min-width: 1200px) {\n.offcanvas-xl[data-v-0851419a] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-xl .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.offcanvas-xl .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl[data-v-0851419a] {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n}\n}\n@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {\n.offcanvas-xxl[data-v-0851419a] {\n    transition: none;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-start[data-v-0851419a] {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-end[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-top[data-v-0851419a] {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.offcanvas-bottom[data-v-0851419a] {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.showing[data-v-0851419a], .offcanvas-xxl.show[data-v-0851419a]:not(.hiding) {\n    transform: none;\n}\n}\n@media (max-width: 1399.98px) {\n.offcanvas-xxl.showing[data-v-0851419a], .offcanvas-xxl.hiding[data-v-0851419a], .offcanvas-xxl.show[data-v-0851419a] {\n    visibility: visible;\n}\n}\n@media (min-width: 1400px) {\n.offcanvas-xxl[data-v-0851419a] {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n}\n.offcanvas-xxl .offcanvas-header[data-v-0851419a] {\n    display: none;\n}\n.offcanvas-xxl .offcanvas-body[data-v-0851419a] {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n}\n}\n.offcanvas[data-v-0851419a] {\n  position: fixed;\n  bottom: 0;\n  z-index: var(--bs-offcanvas-zindex);\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: var(--bs-offcanvas-color);\n  visibility: hidden;\n  background-color: var(--bs-offcanvas-bg);\n  background-clip: padding-box;\n  outline: 0;\n  transition: var(--bs-offcanvas-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n.offcanvas[data-v-0851419a] {\n    transition: none;\n}\n}\n.offcanvas.offcanvas-start[data-v-0851419a] {\n  top: 0;\n  left: 0;\n  width: var(--bs-offcanvas-width);\n  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(-100%);\n}\n.offcanvas.offcanvas-end[data-v-0851419a] {\n  top: 0;\n  right: 0;\n  width: var(--bs-offcanvas-width);\n  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(100%);\n}\n.offcanvas.offcanvas-top[data-v-0851419a] {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(-100%);\n}\n.offcanvas.offcanvas-bottom[data-v-0851419a] {\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(100%);\n}\n.offcanvas.showing[data-v-0851419a], .offcanvas.show[data-v-0851419a]:not(.hiding) {\n  transform: none;\n}\n.offcanvas.showing[data-v-0851419a], .offcanvas.hiding[data-v-0851419a], .offcanvas.show[data-v-0851419a] {\n  visibility: visible;\n}\n.offcanvas-backdrop[data-v-0851419a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade[data-v-0851419a] {\n  opacity: 0;\n}\n.offcanvas-backdrop.show[data-v-0851419a] {\n  opacity: 0.5;\n}\n.offcanvas-header[data-v-0851419a] {\n  display: flex;\n  align-items: center;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n}\n.offcanvas-header .btn-close[data-v-0851419a] {\n  padding: calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);\n  margin: calc(-.5 * var(--bs-offcanvas-padding-y)) calc(-.5 * var(--bs-offcanvas-padding-x)) calc(-.5 * var(--bs-offcanvas-padding-y)) auto;\n}\n.offcanvas-title[data-v-0851419a] {\n  margin-bottom: 0;\n  line-height: var(--bs-offcanvas-title-line-height);\n}\n.offcanvas-body[data-v-0851419a] {\n  flex-grow: 1;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n  overflow-y: auto;\n}\n.placeholder[data-v-0851419a] {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: 0.5;\n}\n.placeholder.btn[data-v-0851419a]::before {\n  display: inline-block;\n  content: \"\";\n}\n.placeholder-xs[data-v-0851419a] {\n  min-height: 0.6em;\n}\n.placeholder-sm[data-v-0851419a] {\n  min-height: 0.8em;\n}\n.placeholder-lg[data-v-0851419a] {\n  min-height: 1.2em;\n}\n.placeholder-glow .placeholder[data-v-0851419a] {\n  animation: placeholder-glow-0851419a 2s ease-in-out infinite;\n}\n@keyframes placeholder-glow-0851419a {\n50% {\n    opacity: 0.2;\n}\n}\n.placeholder-wave[data-v-0851419a] {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n          mask-size: 200% 100%;\n  animation: placeholder-wave-0851419a 2s linear infinite;\n}\n@keyframes placeholder-wave-0851419a {\n100% {\n    -webkit-mask-position: -200% 0%;\n            mask-position: -200% 0%;\n}\n}\n.clearfix[data-v-0851419a]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.text-bg-primary[data-v-0851419a] {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-secondary[data-v-0851419a] {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-success[data-v-0851419a] {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-info[data-v-0851419a] {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-warning[data-v-0851419a] {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-danger[data-v-0851419a] {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-light[data-v-0851419a] {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-dark[data-v-0851419a] {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n.link-primary[data-v-0851419a] {\n  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-primary[data-v-0851419a]:hover, .link-primary[data-v-0851419a]:focus {\n  color: RGBA(10, 88, 202, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(10, 88, 202, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-secondary[data-v-0851419a] {\n  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-secondary[data-v-0851419a]:hover, .link-secondary[data-v-0851419a]:focus {\n  color: RGBA(86, 94, 100, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(86, 94, 100, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-success[data-v-0851419a] {\n  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-success[data-v-0851419a]:hover, .link-success[data-v-0851419a]:focus {\n  color: RGBA(20, 108, 67, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-info[data-v-0851419a] {\n  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-info[data-v-0851419a]:hover, .link-info[data-v-0851419a]:focus {\n  color: RGBA(61, 213, 243, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-warning[data-v-0851419a] {\n  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-warning[data-v-0851419a]:hover, .link-warning[data-v-0851419a]:focus {\n  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-danger[data-v-0851419a] {\n  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-danger[data-v-0851419a]:hover, .link-danger[data-v-0851419a]:focus {\n  color: RGBA(176, 42, 55, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-light[data-v-0851419a] {\n  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-light[data-v-0851419a]:hover, .link-light[data-v-0851419a]:focus {\n  color: RGBA(249, 250, 251, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-dark[data-v-0851419a] {\n  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-dark[data-v-0851419a]:hover, .link-dark[data-v-0851419a]:focus {\n  color: RGBA(26, 30, 33, var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-body-emphasis[data-v-0851419a] {\n  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-body-emphasis[data-v-0851419a]:hover, .link-body-emphasis[data-v-0851419a]:focus {\n  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;\n  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;\n}\n.focus-ring[data-v-0851419a]:focus {\n  outline: 0;\n  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);\n}\n.icon-link[data-v-0851419a] {\n  display: inline-flex;\n  gap: 0.375rem;\n  align-items: center;\n  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));\n  text-underline-offset: 0.25em;\n  backface-visibility: hidden;\n}\n.icon-link > .bi[data-v-0851419a] {\n  flex-shrink: 0;\n  width: 1em;\n  height: 1em;\n  fill: currentcolor;\n  transition: 0.2s ease-in-out transform;\n}\n@media (prefers-reduced-motion: reduce) {\n.icon-link > .bi[data-v-0851419a] {\n    transition: none;\n}\n}\n.icon-link-hover:hover > .bi[data-v-0851419a], .icon-link-hover:focus-visible > .bi[data-v-0851419a] {\n  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));\n}\n.ratio[data-v-0851419a] {\n  position: relative;\n  width: 100%;\n}\n.ratio[data-v-0851419a]::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > *[data-v-0851419a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-1x1[data-v-0851419a] {\n  --bs-aspect-ratio: 100%;\n}\n.ratio-4x3[data-v-0851419a] {\n  --bs-aspect-ratio: calc(3 / 4 * 100%);\n}\n.ratio-16x9[data-v-0851419a] {\n  --bs-aspect-ratio: calc(9 / 16 * 100%);\n}\n.ratio-21x9[data-v-0851419a] {\n  --bs-aspect-ratio: calc(9 / 21 * 100%);\n}\n.fixed-top[data-v-0851419a] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom[data-v-0851419a] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n.sticky-top[data-v-0851419a] {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n.sticky-bottom[data-v-0851419a] {\n  position: sticky;\n  bottom: 0;\n  z-index: 1020;\n}\n@media (min-width: 576px) {\n.sticky-sm-top[data-v-0851419a] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-sm-bottom[data-v-0851419a] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 768px) {\n.sticky-md-top[data-v-0851419a] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-md-bottom[data-v-0851419a] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 992px) {\n.sticky-lg-top[data-v-0851419a] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-lg-bottom[data-v-0851419a] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 1200px) {\n.sticky-xl-top[data-v-0851419a] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-xl-bottom[data-v-0851419a] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n@media (min-width: 1400px) {\n.sticky-xxl-top[data-v-0851419a] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n}\n.sticky-xxl-bottom[data-v-0851419a] {\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n}\n}\n.hstack[data-v-0851419a] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n.vstack[data-v-0851419a] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n.visually-hidden[data-v-0851419a],\n.visually-hidden-focusable[data-v-0851419a]:not(:focus):not(:focus-within) {\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n.visually-hidden[data-v-0851419a]:not(caption),\n.visually-hidden-focusable[data-v-0851419a]:not(:focus):not(:focus-within):not(caption) {\n  position: absolute !important;\n}\n.stretched-link[data-v-0851419a]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n.text-truncate[data-v-0851419a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vr[data-v-0851419a] {\n  display: inline-block;\n  align-self: stretch;\n  width: var(--bs-border-width);\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: 0.25;\n}\n.align-baseline[data-v-0851419a] {\n  vertical-align: baseline !important;\n}\n.align-top[data-v-0851419a] {\n  vertical-align: top !important;\n}\n.align-middle[data-v-0851419a] {\n  vertical-align: middle !important;\n}\n.align-bottom[data-v-0851419a] {\n  vertical-align: bottom !important;\n}\n.align-text-bottom[data-v-0851419a] {\n  vertical-align: text-bottom !important;\n}\n.align-text-top[data-v-0851419a] {\n  vertical-align: text-top !important;\n}\n.float-start[data-v-0851419a] {\n  float: left !important;\n}\n.float-end[data-v-0851419a] {\n  float: right !important;\n}\n.float-none[data-v-0851419a] {\n  float: none !important;\n}\n.object-fit-contain[data-v-0851419a] {\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\n.object-fit-cover[data-v-0851419a] {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\n.object-fit-fill[data-v-0851419a] {\n  -o-object-fit: fill !important;\n     object-fit: fill !important;\n}\n.object-fit-scale[data-v-0851419a] {\n  -o-object-fit: scale-down !important;\n     object-fit: scale-down !important;\n}\n.object-fit-none[data-v-0851419a] {\n  -o-object-fit: none !important;\n     object-fit: none !important;\n}\n.opacity-0[data-v-0851419a] {\n  opacity: 0 !important;\n}\n.opacity-25[data-v-0851419a] {\n  opacity: 0.25 !important;\n}\n.opacity-50[data-v-0851419a] {\n  opacity: 0.5 !important;\n}\n.opacity-75[data-v-0851419a] {\n  opacity: 0.75 !important;\n}\n.opacity-100[data-v-0851419a] {\n  opacity: 1 !important;\n}\n.overflow-auto[data-v-0851419a] {\n  overflow: auto !important;\n}\n.overflow-hidden[data-v-0851419a] {\n  overflow: hidden !important;\n}\n.overflow-visible[data-v-0851419a] {\n  overflow: visible !important;\n}\n.overflow-scroll[data-v-0851419a] {\n  overflow: scroll !important;\n}\n.overflow-x-auto[data-v-0851419a] {\n  overflow-x: auto !important;\n}\n.overflow-x-hidden[data-v-0851419a] {\n  overflow-x: hidden !important;\n}\n.overflow-x-visible[data-v-0851419a] {\n  overflow-x: visible !important;\n}\n.overflow-x-scroll[data-v-0851419a] {\n  overflow-x: scroll !important;\n}\n.overflow-y-auto[data-v-0851419a] {\n  overflow-y: auto !important;\n}\n.overflow-y-hidden[data-v-0851419a] {\n  overflow-y: hidden !important;\n}\n.overflow-y-visible[data-v-0851419a] {\n  overflow-y: visible !important;\n}\n.overflow-y-scroll[data-v-0851419a] {\n  overflow-y: scroll !important;\n}\n.d-inline[data-v-0851419a] {\n  display: inline !important;\n}\n.d-inline-block[data-v-0851419a] {\n  display: inline-block !important;\n}\n.d-block[data-v-0851419a] {\n  display: block !important;\n}\n.d-grid[data-v-0851419a] {\n  display: grid !important;\n}\n.d-inline-grid[data-v-0851419a] {\n  display: inline-grid !important;\n}\n.d-table[data-v-0851419a] {\n  display: table !important;\n}\n.d-table-row[data-v-0851419a] {\n  display: table-row !important;\n}\n.d-table-cell[data-v-0851419a] {\n  display: table-cell !important;\n}\n.d-flex[data-v-0851419a] {\n  display: flex !important;\n}\n.d-inline-flex[data-v-0851419a] {\n  display: inline-flex !important;\n}\n.d-none[data-v-0851419a] {\n  display: none !important;\n}\n.shadow[data-v-0851419a] {\n  box-shadow: var(--bs-box-shadow) !important;\n}\n.shadow-sm[data-v-0851419a] {\n  box-shadow: var(--bs-box-shadow-sm) !important;\n}\n.shadow-lg[data-v-0851419a] {\n  box-shadow: var(--bs-box-shadow-lg) !important;\n}\n.shadow-none[data-v-0851419a] {\n  box-shadow: none !important;\n}\n.focus-ring-primary[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-secondary[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-success[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-info[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-warning[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-danger[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-light[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));\n}\n.focus-ring-dark[data-v-0851419a] {\n  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));\n}\n.position-static[data-v-0851419a] {\n  position: static !important;\n}\n.position-relative[data-v-0851419a] {\n  position: relative !important;\n}\n.position-absolute[data-v-0851419a] {\n  position: absolute !important;\n}\n.position-fixed[data-v-0851419a] {\n  position: fixed !important;\n}\n.position-sticky[data-v-0851419a] {\n  position: sticky !important;\n}\n.top-0[data-v-0851419a] {\n  top: 0 !important;\n}\n.top-50[data-v-0851419a] {\n  top: 50% !important;\n}\n.top-100[data-v-0851419a] {\n  top: 100% !important;\n}\n.bottom-0[data-v-0851419a] {\n  bottom: 0 !important;\n}\n.bottom-50[data-v-0851419a] {\n  bottom: 50% !important;\n}\n.bottom-100[data-v-0851419a] {\n  bottom: 100% !important;\n}\n.start-0[data-v-0851419a] {\n  left: 0 !important;\n}\n.start-50[data-v-0851419a] {\n  left: 50% !important;\n}\n.start-100[data-v-0851419a] {\n  left: 100% !important;\n}\n.end-0[data-v-0851419a] {\n  right: 0 !important;\n}\n.end-50[data-v-0851419a] {\n  right: 50% !important;\n}\n.end-100[data-v-0851419a] {\n  right: 100% !important;\n}\n.translate-middle[data-v-0851419a] {\n  transform: translate(-50%, -50%) !important;\n}\n.translate-middle-x[data-v-0851419a] {\n  transform: translateX(-50%) !important;\n}\n.translate-middle-y[data-v-0851419a] {\n  transform: translateY(-50%) !important;\n}\n.border[data-v-0851419a] {\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-0[data-v-0851419a] {\n  border: 0 !important;\n}\n.border-top[data-v-0851419a] {\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-top-0[data-v-0851419a] {\n  border-top: 0 !important;\n}\n.border-end[data-v-0851419a] {\n  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-end-0[data-v-0851419a] {\n  border-right: 0 !important;\n}\n.border-bottom[data-v-0851419a] {\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-bottom-0[data-v-0851419a] {\n  border-bottom: 0 !important;\n}\n.border-start[data-v-0851419a] {\n  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-start-0[data-v-0851419a] {\n  border-left: 0 !important;\n}\n.border-primary[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-secondary[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-success[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\n}\n.border-info[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;\n}\n.border-warning[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;\n}\n.border-danger[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;\n}\n.border-light[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;\n}\n.border-dark[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;\n}\n.border-black[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;\n}\n.border-white[data-v-0851419a] {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;\n}\n.border-primary-subtle[data-v-0851419a] {\n  border-color: var(--bs-primary-border-subtle) !important;\n}\n.border-secondary-subtle[data-v-0851419a] {\n  border-color: var(--bs-secondary-border-subtle) !important;\n}\n.border-success-subtle[data-v-0851419a] {\n  border-color: var(--bs-success-border-subtle) !important;\n}\n.border-info-subtle[data-v-0851419a] {\n  border-color: var(--bs-info-border-subtle) !important;\n}\n.border-warning-subtle[data-v-0851419a] {\n  border-color: var(--bs-warning-border-subtle) !important;\n}\n.border-danger-subtle[data-v-0851419a] {\n  border-color: var(--bs-danger-border-subtle) !important;\n}\n.border-light-subtle[data-v-0851419a] {\n  border-color: var(--bs-light-border-subtle) !important;\n}\n.border-dark-subtle[data-v-0851419a] {\n  border-color: var(--bs-dark-border-subtle) !important;\n}\n.border-1[data-v-0851419a] {\n  border-width: 1px !important;\n}\n.border-2[data-v-0851419a] {\n  border-width: 2px !important;\n}\n.border-3[data-v-0851419a] {\n  border-width: 3px !important;\n}\n.border-4[data-v-0851419a] {\n  border-width: 4px !important;\n}\n.border-5[data-v-0851419a] {\n  border-width: 5px !important;\n}\n.border-opacity-10[data-v-0851419a] {\n  --bs-border-opacity: 0.1;\n}\n.border-opacity-25[data-v-0851419a] {\n  --bs-border-opacity: 0.25;\n}\n.border-opacity-50[data-v-0851419a] {\n  --bs-border-opacity: 0.5;\n}\n.border-opacity-75[data-v-0851419a] {\n  --bs-border-opacity: 0.75;\n}\n.border-opacity-100[data-v-0851419a] {\n  --bs-border-opacity: 1;\n}\n.w-25[data-v-0851419a] {\n  width: 25% !important;\n}\n.w-50[data-v-0851419a] {\n  width: 50% !important;\n}\n.w-75[data-v-0851419a] {\n  width: 75% !important;\n}\n.w-100[data-v-0851419a] {\n  width: 100% !important;\n}\n.w-auto[data-v-0851419a] {\n  width: auto !important;\n}\n.mw-100[data-v-0851419a] {\n  max-width: 100% !important;\n}\n.vw-100[data-v-0851419a] {\n  width: 100vw !important;\n}\n.min-vw-100[data-v-0851419a] {\n  min-width: 100vw !important;\n}\n.h-25[data-v-0851419a] {\n  height: 25% !important;\n}\n.h-50[data-v-0851419a] {\n  height: 50% !important;\n}\n.h-75[data-v-0851419a] {\n  height: 75% !important;\n}\n.h-100[data-v-0851419a] {\n  height: 100% !important;\n}\n.h-auto[data-v-0851419a] {\n  height: auto !important;\n}\n.mh-100[data-v-0851419a] {\n  max-height: 100% !important;\n}\n.vh-100[data-v-0851419a] {\n  height: 100vh !important;\n}\n.min-vh-100[data-v-0851419a] {\n  min-height: 100vh !important;\n}\n.flex-fill[data-v-0851419a] {\n  flex: 1 1 auto !important;\n}\n.flex-row[data-v-0851419a] {\n  flex-direction: row !important;\n}\n.flex-column[data-v-0851419a] {\n  flex-direction: column !important;\n}\n.flex-row-reverse[data-v-0851419a] {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse[data-v-0851419a] {\n  flex-direction: column-reverse !important;\n}\n.flex-grow-0[data-v-0851419a] {\n  flex-grow: 0 !important;\n}\n.flex-grow-1[data-v-0851419a] {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0[data-v-0851419a] {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1[data-v-0851419a] {\n  flex-shrink: 1 !important;\n}\n.flex-wrap[data-v-0851419a] {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap[data-v-0851419a] {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse[data-v-0851419a] {\n  flex-wrap: wrap-reverse !important;\n}\n.justify-content-start[data-v-0851419a] {\n  justify-content: flex-start !important;\n}\n.justify-content-end[data-v-0851419a] {\n  justify-content: flex-end !important;\n}\n.justify-content-center[data-v-0851419a] {\n  justify-content: center !important;\n}\n.justify-content-between[data-v-0851419a] {\n  justify-content: space-between !important;\n}\n.justify-content-around[data-v-0851419a] {\n  justify-content: space-around !important;\n}\n.justify-content-evenly[data-v-0851419a] {\n  justify-content: space-evenly !important;\n}\n.align-items-start[data-v-0851419a] {\n  align-items: flex-start !important;\n}\n.align-items-end[data-v-0851419a] {\n  align-items: flex-end !important;\n}\n.align-items-center[data-v-0851419a] {\n  align-items: center !important;\n}\n.align-items-baseline[data-v-0851419a] {\n  align-items: baseline !important;\n}\n.align-items-stretch[data-v-0851419a] {\n  align-items: stretch !important;\n}\n.align-content-start[data-v-0851419a] {\n  align-content: flex-start !important;\n}\n.align-content-end[data-v-0851419a] {\n  align-content: flex-end !important;\n}\n.align-content-center[data-v-0851419a] {\n  align-content: center !important;\n}\n.align-content-between[data-v-0851419a] {\n  align-content: space-between !important;\n}\n.align-content-around[data-v-0851419a] {\n  align-content: space-around !important;\n}\n.align-content-stretch[data-v-0851419a] {\n  align-content: stretch !important;\n}\n.align-self-auto[data-v-0851419a] {\n  align-self: auto !important;\n}\n.align-self-start[data-v-0851419a] {\n  align-self: flex-start !important;\n}\n.align-self-end[data-v-0851419a] {\n  align-self: flex-end !important;\n}\n.align-self-center[data-v-0851419a] {\n  align-self: center !important;\n}\n.align-self-baseline[data-v-0851419a] {\n  align-self: baseline !important;\n}\n.align-self-stretch[data-v-0851419a] {\n  align-self: stretch !important;\n}\n.order-first[data-v-0851419a] {\n  order: -1 !important;\n}\n.order-0[data-v-0851419a] {\n  order: 0 !important;\n}\n.order-1[data-v-0851419a] {\n  order: 1 !important;\n}\n.order-2[data-v-0851419a] {\n  order: 2 !important;\n}\n.order-3[data-v-0851419a] {\n  order: 3 !important;\n}\n.order-4[data-v-0851419a] {\n  order: 4 !important;\n}\n.order-5[data-v-0851419a] {\n  order: 5 !important;\n}\n.order-last[data-v-0851419a] {\n  order: 6 !important;\n}\n.m-0[data-v-0851419a] {\n  margin: 0 !important;\n}\n.m-1[data-v-0851419a] {\n  margin: 0.25rem !important;\n}\n.m-2[data-v-0851419a] {\n  margin: 0.5rem !important;\n}\n.m-3[data-v-0851419a] {\n  margin: 1rem !important;\n}\n.m-4[data-v-0851419a] {\n  margin: 1.5rem !important;\n}\n.m-5[data-v-0851419a] {\n  margin: 3rem !important;\n}\n.m-auto[data-v-0851419a] {\n  margin: auto !important;\n}\n.mx-0[data-v-0851419a] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.mx-1[data-v-0851419a] {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n.mx-2[data-v-0851419a] {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n.mx-3[data-v-0851419a] {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n.mx-4[data-v-0851419a] {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n.mx-5[data-v-0851419a] {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n.mx-auto[data-v-0851419a] {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.my-0[data-v-0851419a] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.my-1[data-v-0851419a] {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n.my-2[data-v-0851419a] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.my-3[data-v-0851419a] {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n.my-4[data-v-0851419a] {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n.my-5[data-v-0851419a] {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n.my-auto[data-v-0851419a] {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n.mt-0[data-v-0851419a] {\n  margin-top: 0 !important;\n}\n.mt-1[data-v-0851419a] {\n  margin-top: 0.25rem !important;\n}\n.mt-2[data-v-0851419a] {\n  margin-top: 0.5rem !important;\n}\n.mt-3[data-v-0851419a] {\n  margin-top: 1rem !important;\n}\n.mt-4[data-v-0851419a] {\n  margin-top: 1.5rem !important;\n}\n.mt-5[data-v-0851419a] {\n  margin-top: 3rem !important;\n}\n.mt-auto[data-v-0851419a] {\n  margin-top: auto !important;\n}\n.me-0[data-v-0851419a] {\n  margin-right: 0 !important;\n}\n.me-1[data-v-0851419a] {\n  margin-right: 0.25rem !important;\n}\n.me-2[data-v-0851419a] {\n  margin-right: 0.5rem !important;\n}\n.me-3[data-v-0851419a] {\n  margin-right: 1rem !important;\n}\n.me-4[data-v-0851419a] {\n  margin-right: 1.5rem !important;\n}\n.me-5[data-v-0851419a] {\n  margin-right: 3rem !important;\n}\n.me-auto[data-v-0851419a] {\n  margin-right: auto !important;\n}\n.mb-0[data-v-0851419a] {\n  margin-bottom: 0 !important;\n}\n.mb-1[data-v-0851419a] {\n  margin-bottom: 0.25rem !important;\n}\n.mb-2[data-v-0851419a] {\n  margin-bottom: 0.5rem !important;\n}\n.mb-3[data-v-0851419a] {\n  margin-bottom: 1rem !important;\n}\n.mb-4[data-v-0851419a] {\n  margin-bottom: 1.5rem !important;\n}\n.mb-5[data-v-0851419a] {\n  margin-bottom: 3rem !important;\n}\n.mb-auto[data-v-0851419a] {\n  margin-bottom: auto !important;\n}\n.ms-0[data-v-0851419a] {\n  margin-left: 0 !important;\n}\n.ms-1[data-v-0851419a] {\n  margin-left: 0.25rem !important;\n}\n.ms-2[data-v-0851419a] {\n  margin-left: 0.5rem !important;\n}\n.ms-3[data-v-0851419a] {\n  margin-left: 1rem !important;\n}\n.ms-4[data-v-0851419a] {\n  margin-left: 1.5rem !important;\n}\n.ms-5[data-v-0851419a] {\n  margin-left: 3rem !important;\n}\n.ms-auto[data-v-0851419a] {\n  margin-left: auto !important;\n}\n.p-0[data-v-0851419a] {\n  padding: 0 !important;\n}\n.p-1[data-v-0851419a] {\n  padding: 0.25rem !important;\n}\n.p-2[data-v-0851419a] {\n  padding: 0.5rem !important;\n}\n.p-3[data-v-0851419a] {\n  padding: 1rem !important;\n}\n.p-4[data-v-0851419a] {\n  padding: 1.5rem !important;\n}\n.p-5[data-v-0851419a] {\n  padding: 3rem !important;\n}\n.px-0[data-v-0851419a] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.px-1[data-v-0851419a] {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n.px-2[data-v-0851419a] {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n.px-3[data-v-0851419a] {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n.px-4[data-v-0851419a] {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n.px-5[data-v-0851419a] {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n.py-0[data-v-0851419a] {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.py-1[data-v-0851419a] {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n.py-2[data-v-0851419a] {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.py-3[data-v-0851419a] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n.py-4[data-v-0851419a] {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n.py-5[data-v-0851419a] {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n.pt-0[data-v-0851419a] {\n  padding-top: 0 !important;\n}\n.pt-1[data-v-0851419a] {\n  padding-top: 0.25rem !important;\n}\n.pt-2[data-v-0851419a] {\n  padding-top: 0.5rem !important;\n}\n.pt-3[data-v-0851419a] {\n  padding-top: 1rem !important;\n}\n.pt-4[data-v-0851419a] {\n  padding-top: 1.5rem !important;\n}\n.pt-5[data-v-0851419a] {\n  padding-top: 3rem !important;\n}\n.pe-0[data-v-0851419a] {\n  padding-right: 0 !important;\n}\n.pe-1[data-v-0851419a] {\n  padding-right: 0.25rem !important;\n}\n.pe-2[data-v-0851419a] {\n  padding-right: 0.5rem !important;\n}\n.pe-3[data-v-0851419a] {\n  padding-right: 1rem !important;\n}\n.pe-4[data-v-0851419a] {\n  padding-right: 1.5rem !important;\n}\n.pe-5[data-v-0851419a] {\n  padding-right: 3rem !important;\n}\n.pb-0[data-v-0851419a] {\n  padding-bottom: 0 !important;\n}\n.pb-1[data-v-0851419a] {\n  padding-bottom: 0.25rem !important;\n}\n.pb-2[data-v-0851419a] {\n  padding-bottom: 0.5rem !important;\n}\n.pb-3[data-v-0851419a] {\n  padding-bottom: 1rem !important;\n}\n.pb-4[data-v-0851419a] {\n  padding-bottom: 1.5rem !important;\n}\n.pb-5[data-v-0851419a] {\n  padding-bottom: 3rem !important;\n}\n.ps-0[data-v-0851419a] {\n  padding-left: 0 !important;\n}\n.ps-1[data-v-0851419a] {\n  padding-left: 0.25rem !important;\n}\n.ps-2[data-v-0851419a] {\n  padding-left: 0.5rem !important;\n}\n.ps-3[data-v-0851419a] {\n  padding-left: 1rem !important;\n}\n.ps-4[data-v-0851419a] {\n  padding-left: 1.5rem !important;\n}\n.ps-5[data-v-0851419a] {\n  padding-left: 3rem !important;\n}\n.gap-0[data-v-0851419a] {\n  gap: 0 !important;\n}\n.gap-1[data-v-0851419a] {\n  gap: 0.25rem !important;\n}\n.gap-2[data-v-0851419a] {\n  gap: 0.5rem !important;\n}\n.gap-3[data-v-0851419a] {\n  gap: 1rem !important;\n}\n.gap-4[data-v-0851419a] {\n  gap: 1.5rem !important;\n}\n.gap-5[data-v-0851419a] {\n  gap: 3rem !important;\n}\n.row-gap-0[data-v-0851419a] {\n  row-gap: 0 !important;\n}\n.row-gap-1[data-v-0851419a] {\n  row-gap: 0.25rem !important;\n}\n.row-gap-2[data-v-0851419a] {\n  row-gap: 0.5rem !important;\n}\n.row-gap-3[data-v-0851419a] {\n  row-gap: 1rem !important;\n}\n.row-gap-4[data-v-0851419a] {\n  row-gap: 1.5rem !important;\n}\n.row-gap-5[data-v-0851419a] {\n  row-gap: 3rem !important;\n}\n.column-gap-0[data-v-0851419a] {\n  -moz-column-gap: 0 !important;\n       column-gap: 0 !important;\n}\n.column-gap-1[data-v-0851419a] {\n  -moz-column-gap: 0.25rem !important;\n       column-gap: 0.25rem !important;\n}\n.column-gap-2[data-v-0851419a] {\n  -moz-column-gap: 0.5rem !important;\n       column-gap: 0.5rem !important;\n}\n.column-gap-3[data-v-0851419a] {\n  -moz-column-gap: 1rem !important;\n       column-gap: 1rem !important;\n}\n.column-gap-4[data-v-0851419a] {\n  -moz-column-gap: 1.5rem !important;\n       column-gap: 1.5rem !important;\n}\n.column-gap-5[data-v-0851419a] {\n  -moz-column-gap: 3rem !important;\n       column-gap: 3rem !important;\n}\n.font-monospace[data-v-0851419a] {\n  font-family: var(--bs-font-monospace) !important;\n}\n.fs-1[data-v-0851419a] {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n.fs-2[data-v-0851419a] {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n.fs-3[data-v-0851419a] {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n.fs-4[data-v-0851419a] {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n.fs-5[data-v-0851419a] {\n  font-size: 1.25rem !important;\n}\n.fs-6[data-v-0851419a] {\n  font-size: 1rem !important;\n}\n.fst-italic[data-v-0851419a] {\n  font-style: italic !important;\n}\n.fst-normal[data-v-0851419a] {\n  font-style: normal !important;\n}\n.fw-lighter[data-v-0851419a] {\n  font-weight: lighter !important;\n}\n.fw-light[data-v-0851419a] {\n  font-weight: 300 !important;\n}\n.fw-normal[data-v-0851419a] {\n  font-weight: 400 !important;\n}\n.fw-medium[data-v-0851419a] {\n  font-weight: 500 !important;\n}\n.fw-semibold[data-v-0851419a] {\n  font-weight: 600 !important;\n}\n.fw-bold[data-v-0851419a] {\n  font-weight: 700 !important;\n}\n.fw-bolder[data-v-0851419a] {\n  font-weight: bolder !important;\n}\n.lh-1[data-v-0851419a] {\n  line-height: 1 !important;\n}\n.lh-sm[data-v-0851419a] {\n  line-height: 1.25 !important;\n}\n.lh-base[data-v-0851419a] {\n  line-height: 1.5 !important;\n}\n.lh-lg[data-v-0851419a] {\n  line-height: 2 !important;\n}\n.text-start[data-v-0851419a] {\n  text-align: left !important;\n}\n.text-end[data-v-0851419a] {\n  text-align: right !important;\n}\n.text-center[data-v-0851419a] {\n  text-align: center !important;\n}\n.text-decoration-none[data-v-0851419a] {\n  text-decoration: none !important;\n}\n.text-decoration-underline[data-v-0851419a] {\n  text-decoration: underline !important;\n}\n.text-decoration-line-through[data-v-0851419a] {\n  text-decoration: line-through !important;\n}\n.text-lowercase[data-v-0851419a] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-0851419a] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-0851419a] {\n  text-transform: capitalize !important;\n}\n.text-wrap[data-v-0851419a] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-0851419a] {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break[data-v-0851419a] {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-secondary[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-success[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n.text-info[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n.text-warning[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n.text-danger[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n.text-light[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n.text-dark[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n.text-black[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n.text-white[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n.text-body[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n.text-muted[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: var(--bs-secondary-color) !important;\n}\n.text-black-50[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-body-secondary[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: var(--bs-secondary-color) !important;\n}\n.text-body-tertiary[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: var(--bs-tertiary-color) !important;\n}\n.text-body-emphasis[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: var(--bs-emphasis-color) !important;\n}\n.text-reset[data-v-0851419a] {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n.text-opacity-25[data-v-0851419a] {\n  --bs-text-opacity: 0.25;\n}\n.text-opacity-50[data-v-0851419a] {\n  --bs-text-opacity: 0.5;\n}\n.text-opacity-75[data-v-0851419a] {\n  --bs-text-opacity: 0.75;\n}\n.text-opacity-100[data-v-0851419a] {\n  --bs-text-opacity: 1;\n}\n.text-primary-emphasis[data-v-0851419a] {\n  color: var(--bs-primary-text-emphasis) !important;\n}\n.text-secondary-emphasis[data-v-0851419a] {\n  color: var(--bs-secondary-text-emphasis) !important;\n}\n.text-success-emphasis[data-v-0851419a] {\n  color: var(--bs-success-text-emphasis) !important;\n}\n.text-info-emphasis[data-v-0851419a] {\n  color: var(--bs-info-text-emphasis) !important;\n}\n.text-warning-emphasis[data-v-0851419a] {\n  color: var(--bs-warning-text-emphasis) !important;\n}\n.text-danger-emphasis[data-v-0851419a] {\n  color: var(--bs-danger-text-emphasis) !important;\n}\n.text-light-emphasis[data-v-0851419a] {\n  color: var(--bs-light-text-emphasis) !important;\n}\n.text-dark-emphasis[data-v-0851419a] {\n  color: var(--bs-dark-text-emphasis) !important;\n}\n.link-opacity-10[data-v-0851419a] {\n  --bs-link-opacity: 0.1;\n}\n.link-opacity-10-hover[data-v-0851419a]:hover {\n  --bs-link-opacity: 0.1;\n}\n.link-opacity-25[data-v-0851419a] {\n  --bs-link-opacity: 0.25;\n}\n.link-opacity-25-hover[data-v-0851419a]:hover {\n  --bs-link-opacity: 0.25;\n}\n.link-opacity-50[data-v-0851419a] {\n  --bs-link-opacity: 0.5;\n}\n.link-opacity-50-hover[data-v-0851419a]:hover {\n  --bs-link-opacity: 0.5;\n}\n.link-opacity-75[data-v-0851419a] {\n  --bs-link-opacity: 0.75;\n}\n.link-opacity-75-hover[data-v-0851419a]:hover {\n  --bs-link-opacity: 0.75;\n}\n.link-opacity-100[data-v-0851419a] {\n  --bs-link-opacity: 1;\n}\n.link-opacity-100-hover[data-v-0851419a]:hover {\n  --bs-link-opacity: 1;\n}\n.link-offset-1[data-v-0851419a] {\n  text-underline-offset: 0.125em !important;\n}\n.link-offset-1-hover[data-v-0851419a]:hover {\n  text-underline-offset: 0.125em !important;\n}\n.link-offset-2[data-v-0851419a] {\n  text-underline-offset: 0.25em !important;\n}\n.link-offset-2-hover[data-v-0851419a]:hover {\n  text-underline-offset: 0.25em !important;\n}\n.link-offset-3[data-v-0851419a] {\n  text-underline-offset: 0.375em !important;\n}\n.link-offset-3-hover[data-v-0851419a]:hover {\n  text-underline-offset: 0.375em !important;\n}\n.link-underline-primary[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-secondary[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-success[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-info[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-warning[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-danger[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-light[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline-dark[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;\n}\n.link-underline[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-underline-opacity-0[data-v-0851419a] {\n  --bs-link-underline-opacity: 0;\n}\n.link-underline-opacity-0-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 0;\n}\n.link-underline-opacity-10[data-v-0851419a] {\n  --bs-link-underline-opacity: 0.1;\n}\n.link-underline-opacity-10-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 0.1;\n}\n.link-underline-opacity-25[data-v-0851419a] {\n  --bs-link-underline-opacity: 0.25;\n}\n.link-underline-opacity-25-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 0.25;\n}\n.link-underline-opacity-50[data-v-0851419a] {\n  --bs-link-underline-opacity: 0.5;\n}\n.link-underline-opacity-50-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 0.5;\n}\n.link-underline-opacity-75[data-v-0851419a] {\n  --bs-link-underline-opacity: 0.75;\n}\n.link-underline-opacity-75-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 0.75;\n}\n.link-underline-opacity-100[data-v-0851419a] {\n  --bs-link-underline-opacity: 1;\n}\n.link-underline-opacity-100-hover[data-v-0851419a]:hover {\n  --bs-link-underline-opacity: 1;\n}\n.bg-primary[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-secondary[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-success[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-info[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-warning[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-danger[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-light[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-dark[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-black[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-white[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-body[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-transparent[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n.bg-body-secondary[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-body-tertiary[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-opacity-10[data-v-0851419a] {\n  --bs-bg-opacity: 0.1;\n}\n.bg-opacity-25[data-v-0851419a] {\n  --bs-bg-opacity: 0.25;\n}\n.bg-opacity-50[data-v-0851419a] {\n  --bs-bg-opacity: 0.5;\n}\n.bg-opacity-75[data-v-0851419a] {\n  --bs-bg-opacity: 0.75;\n}\n.bg-opacity-100[data-v-0851419a] {\n  --bs-bg-opacity: 1;\n}\n.bg-primary-subtle[data-v-0851419a] {\n  background-color: var(--bs-primary-bg-subtle) !important;\n}\n.bg-secondary-subtle[data-v-0851419a] {\n  background-color: var(--bs-secondary-bg-subtle) !important;\n}\n.bg-success-subtle[data-v-0851419a] {\n  background-color: var(--bs-success-bg-subtle) !important;\n}\n.bg-info-subtle[data-v-0851419a] {\n  background-color: var(--bs-info-bg-subtle) !important;\n}\n.bg-warning-subtle[data-v-0851419a] {\n  background-color: var(--bs-warning-bg-subtle) !important;\n}\n.bg-danger-subtle[data-v-0851419a] {\n  background-color: var(--bs-danger-bg-subtle) !important;\n}\n.bg-light-subtle[data-v-0851419a] {\n  background-color: var(--bs-light-bg-subtle) !important;\n}\n.bg-dark-subtle[data-v-0851419a] {\n  background-color: var(--bs-dark-bg-subtle) !important;\n}\n.bg-gradient[data-v-0851419a] {\n  background-image: var(--bs-gradient) !important;\n}\n.user-select-all[data-v-0851419a] {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto[data-v-0851419a] {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none[data-v-0851419a] {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.pe-none[data-v-0851419a] {\n  pointer-events: none !important;\n}\n.pe-auto[data-v-0851419a] {\n  pointer-events: auto !important;\n}\n.rounded[data-v-0851419a] {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-0[data-v-0851419a] {\n  border-radius: 0 !important;\n}\n.rounded-1[data-v-0851419a] {\n  border-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-2[data-v-0851419a] {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-3[data-v-0851419a] {\n  border-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-4[data-v-0851419a] {\n  border-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-5[data-v-0851419a] {\n  border-radius: var(--bs-border-radius-xxl) !important;\n}\n.rounded-circle[data-v-0851419a] {\n  border-radius: 50% !important;\n}\n.rounded-pill[data-v-0851419a] {\n  border-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-top[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-top-0[data-v-0851419a] {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.rounded-top-1[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius-sm) !important;\n  border-top-right-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-top-2[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-top-3[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius-lg) !important;\n  border-top-right-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-top-4[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius-xl) !important;\n  border-top-right-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-top-5[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius-xxl) !important;\n  border-top-right-radius: var(--bs-border-radius-xxl) !important;\n}\n.rounded-top-circle[data-v-0851419a] {\n  border-top-left-radius: 50% !important;\n  border-top-right-radius: 50% !important;\n}\n.rounded-top-pill[data-v-0851419a] {\n  border-top-left-radius: var(--bs-border-radius-pill) !important;\n  border-top-right-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-end[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-end-0[data-v-0851419a] {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.rounded-end-1[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius-sm) !important;\n  border-bottom-right-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-end-2[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-end-3[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius-lg) !important;\n  border-bottom-right-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-end-4[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius-xl) !important;\n  border-bottom-right-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-end-5[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius-xxl) !important;\n  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;\n}\n.rounded-end-circle[data-v-0851419a] {\n  border-top-right-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n.rounded-end-pill[data-v-0851419a] {\n  border-top-right-radius: var(--bs-border-radius-pill) !important;\n  border-bottom-right-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-bottom[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-bottom-0[data-v-0851419a] {\n  border-bottom-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.rounded-bottom-1[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius-sm) !important;\n  border-bottom-left-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-bottom-2[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-bottom-3[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius-lg) !important;\n  border-bottom-left-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-bottom-4[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius-xl) !important;\n  border-bottom-left-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-bottom-5[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;\n  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;\n}\n.rounded-bottom-circle[data-v-0851419a] {\n  border-bottom-right-radius: 50% !important;\n  border-bottom-left-radius: 50% !important;\n}\n.rounded-bottom-pill[data-v-0851419a] {\n  border-bottom-right-radius: var(--bs-border-radius-pill) !important;\n  border-bottom-left-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-start[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-start-0[data-v-0851419a] {\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n.rounded-start-1[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius-sm) !important;\n  border-top-left-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-start-2[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-start-3[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius-lg) !important;\n  border-top-left-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-start-4[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius-xl) !important;\n  border-top-left-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-start-5[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;\n  border-top-left-radius: var(--bs-border-radius-xxl) !important;\n}\n.rounded-start-circle[data-v-0851419a] {\n  border-bottom-left-radius: 50% !important;\n  border-top-left-radius: 50% !important;\n}\n.rounded-start-pill[data-v-0851419a] {\n  border-bottom-left-radius: var(--bs-border-radius-pill) !important;\n  border-top-left-radius: var(--bs-border-radius-pill) !important;\n}\n.visible[data-v-0851419a] {\n  visibility: visible !important;\n}\n.invisible[data-v-0851419a] {\n  visibility: hidden !important;\n}\n.z-n1[data-v-0851419a] {\n  z-index: -1 !important;\n}\n.z-0[data-v-0851419a] {\n  z-index: 0 !important;\n}\n.z-1[data-v-0851419a] {\n  z-index: 1 !important;\n}\n.z-2[data-v-0851419a] {\n  z-index: 2 !important;\n}\n.z-3[data-v-0851419a] {\n  z-index: 3 !important;\n}\n@media (min-width: 576px) {\n.float-sm-start[data-v-0851419a] {\n    float: left !important;\n}\n.float-sm-end[data-v-0851419a] {\n    float: right !important;\n}\n.float-sm-none[data-v-0851419a] {\n    float: none !important;\n}\n.object-fit-sm-contain[data-v-0851419a] {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n}\n.object-fit-sm-cover[data-v-0851419a] {\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n}\n.object-fit-sm-fill[data-v-0851419a] {\n    -o-object-fit: fill !important;\n       object-fit: fill !important;\n}\n.object-fit-sm-scale[data-v-0851419a] {\n    -o-object-fit: scale-down !important;\n       object-fit: scale-down !important;\n}\n.object-fit-sm-none[data-v-0851419a] {\n    -o-object-fit: none !important;\n       object-fit: none !important;\n}\n.d-sm-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-sm-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-sm-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-sm-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-sm-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-sm-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-sm-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-sm-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-sm-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-sm-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-sm-none[data-v-0851419a] {\n    display: none !important;\n}\n.flex-sm-fill[data-v-0851419a] {\n    flex: 1 1 auto !important;\n}\n.flex-sm-row[data-v-0851419a] {\n    flex-direction: row !important;\n}\n.flex-sm-column[data-v-0851419a] {\n    flex-direction: column !important;\n}\n.flex-sm-row-reverse[data-v-0851419a] {\n    flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse[data-v-0851419a] {\n    flex-direction: column-reverse !important;\n}\n.flex-sm-grow-0[data-v-0851419a] {\n    flex-grow: 0 !important;\n}\n.flex-sm-grow-1[data-v-0851419a] {\n    flex-grow: 1 !important;\n}\n.flex-sm-shrink-0[data-v-0851419a] {\n    flex-shrink: 0 !important;\n}\n.flex-sm-shrink-1[data-v-0851419a] {\n    flex-shrink: 1 !important;\n}\n.flex-sm-wrap[data-v-0851419a] {\n    flex-wrap: wrap !important;\n}\n.flex-sm-nowrap[data-v-0851419a] {\n    flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse[data-v-0851419a] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-sm-start[data-v-0851419a] {\n    justify-content: flex-start !important;\n}\n.justify-content-sm-end[data-v-0851419a] {\n    justify-content: flex-end !important;\n}\n.justify-content-sm-center[data-v-0851419a] {\n    justify-content: center !important;\n}\n.justify-content-sm-between[data-v-0851419a] {\n    justify-content: space-between !important;\n}\n.justify-content-sm-around[data-v-0851419a] {\n    justify-content: space-around !important;\n}\n.justify-content-sm-evenly[data-v-0851419a] {\n    justify-content: space-evenly !important;\n}\n.align-items-sm-start[data-v-0851419a] {\n    align-items: flex-start !important;\n}\n.align-items-sm-end[data-v-0851419a] {\n    align-items: flex-end !important;\n}\n.align-items-sm-center[data-v-0851419a] {\n    align-items: center !important;\n}\n.align-items-sm-baseline[data-v-0851419a] {\n    align-items: baseline !important;\n}\n.align-items-sm-stretch[data-v-0851419a] {\n    align-items: stretch !important;\n}\n.align-content-sm-start[data-v-0851419a] {\n    align-content: flex-start !important;\n}\n.align-content-sm-end[data-v-0851419a] {\n    align-content: flex-end !important;\n}\n.align-content-sm-center[data-v-0851419a] {\n    align-content: center !important;\n}\n.align-content-sm-between[data-v-0851419a] {\n    align-content: space-between !important;\n}\n.align-content-sm-around[data-v-0851419a] {\n    align-content: space-around !important;\n}\n.align-content-sm-stretch[data-v-0851419a] {\n    align-content: stretch !important;\n}\n.align-self-sm-auto[data-v-0851419a] {\n    align-self: auto !important;\n}\n.align-self-sm-start[data-v-0851419a] {\n    align-self: flex-start !important;\n}\n.align-self-sm-end[data-v-0851419a] {\n    align-self: flex-end !important;\n}\n.align-self-sm-center[data-v-0851419a] {\n    align-self: center !important;\n}\n.align-self-sm-baseline[data-v-0851419a] {\n    align-self: baseline !important;\n}\n.align-self-sm-stretch[data-v-0851419a] {\n    align-self: stretch !important;\n}\n.order-sm-first[data-v-0851419a] {\n    order: -1 !important;\n}\n.order-sm-0[data-v-0851419a] {\n    order: 0 !important;\n}\n.order-sm-1[data-v-0851419a] {\n    order: 1 !important;\n}\n.order-sm-2[data-v-0851419a] {\n    order: 2 !important;\n}\n.order-sm-3[data-v-0851419a] {\n    order: 3 !important;\n}\n.order-sm-4[data-v-0851419a] {\n    order: 4 !important;\n}\n.order-sm-5[data-v-0851419a] {\n    order: 5 !important;\n}\n.order-sm-last[data-v-0851419a] {\n    order: 6 !important;\n}\n.m-sm-0[data-v-0851419a] {\n    margin: 0 !important;\n}\n.m-sm-1[data-v-0851419a] {\n    margin: 0.25rem !important;\n}\n.m-sm-2[data-v-0851419a] {\n    margin: 0.5rem !important;\n}\n.m-sm-3[data-v-0851419a] {\n    margin: 1rem !important;\n}\n.m-sm-4[data-v-0851419a] {\n    margin: 1.5rem !important;\n}\n.m-sm-5[data-v-0851419a] {\n    margin: 3rem !important;\n}\n.m-sm-auto[data-v-0851419a] {\n    margin: auto !important;\n}\n.mx-sm-0[data-v-0851419a] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-sm-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-sm-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-sm-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-sm-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-sm-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-sm-auto[data-v-0851419a] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-sm-0[data-v-0851419a] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-sm-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-sm-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-sm-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-sm-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-sm-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-sm-auto[data-v-0851419a] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-sm-0[data-v-0851419a] {\n    margin-top: 0 !important;\n}\n.mt-sm-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n}\n.mt-sm-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n}\n.mt-sm-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n}\n.mt-sm-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n}\n.mt-sm-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n}\n.mt-sm-auto[data-v-0851419a] {\n    margin-top: auto !important;\n}\n.me-sm-0[data-v-0851419a] {\n    margin-right: 0 !important;\n}\n.me-sm-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n}\n.me-sm-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n}\n.me-sm-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n}\n.me-sm-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n}\n.me-sm-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n}\n.me-sm-auto[data-v-0851419a] {\n    margin-right: auto !important;\n}\n.mb-sm-0[data-v-0851419a] {\n    margin-bottom: 0 !important;\n}\n.mb-sm-1[data-v-0851419a] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-sm-2[data-v-0851419a] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-sm-3[data-v-0851419a] {\n    margin-bottom: 1rem !important;\n}\n.mb-sm-4[data-v-0851419a] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-sm-5[data-v-0851419a] {\n    margin-bottom: 3rem !important;\n}\n.mb-sm-auto[data-v-0851419a] {\n    margin-bottom: auto !important;\n}\n.ms-sm-0[data-v-0851419a] {\n    margin-left: 0 !important;\n}\n.ms-sm-1[data-v-0851419a] {\n    margin-left: 0.25rem !important;\n}\n.ms-sm-2[data-v-0851419a] {\n    margin-left: 0.5rem !important;\n}\n.ms-sm-3[data-v-0851419a] {\n    margin-left: 1rem !important;\n}\n.ms-sm-4[data-v-0851419a] {\n    margin-left: 1.5rem !important;\n}\n.ms-sm-5[data-v-0851419a] {\n    margin-left: 3rem !important;\n}\n.ms-sm-auto[data-v-0851419a] {\n    margin-left: auto !important;\n}\n.p-sm-0[data-v-0851419a] {\n    padding: 0 !important;\n}\n.p-sm-1[data-v-0851419a] {\n    padding: 0.25rem !important;\n}\n.p-sm-2[data-v-0851419a] {\n    padding: 0.5rem !important;\n}\n.p-sm-3[data-v-0851419a] {\n    padding: 1rem !important;\n}\n.p-sm-4[data-v-0851419a] {\n    padding: 1.5rem !important;\n}\n.p-sm-5[data-v-0851419a] {\n    padding: 3rem !important;\n}\n.px-sm-0[data-v-0851419a] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-sm-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-sm-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-sm-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-sm-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-sm-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-sm-0[data-v-0851419a] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-sm-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-sm-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-sm-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-sm-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-sm-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-sm-0[data-v-0851419a] {\n    padding-top: 0 !important;\n}\n.pt-sm-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n}\n.pt-sm-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n}\n.pt-sm-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n}\n.pt-sm-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n}\n.pt-sm-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n}\n.pe-sm-0[data-v-0851419a] {\n    padding-right: 0 !important;\n}\n.pe-sm-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n}\n.pe-sm-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n}\n.pe-sm-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n}\n.pe-sm-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n}\n.pe-sm-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n}\n.pb-sm-0[data-v-0851419a] {\n    padding-bottom: 0 !important;\n}\n.pb-sm-1[data-v-0851419a] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-sm-2[data-v-0851419a] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-sm-3[data-v-0851419a] {\n    padding-bottom: 1rem !important;\n}\n.pb-sm-4[data-v-0851419a] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-sm-5[data-v-0851419a] {\n    padding-bottom: 3rem !important;\n}\n.ps-sm-0[data-v-0851419a] {\n    padding-left: 0 !important;\n}\n.ps-sm-1[data-v-0851419a] {\n    padding-left: 0.25rem !important;\n}\n.ps-sm-2[data-v-0851419a] {\n    padding-left: 0.5rem !important;\n}\n.ps-sm-3[data-v-0851419a] {\n    padding-left: 1rem !important;\n}\n.ps-sm-4[data-v-0851419a] {\n    padding-left: 1.5rem !important;\n}\n.ps-sm-5[data-v-0851419a] {\n    padding-left: 3rem !important;\n}\n.gap-sm-0[data-v-0851419a] {\n    gap: 0 !important;\n}\n.gap-sm-1[data-v-0851419a] {\n    gap: 0.25rem !important;\n}\n.gap-sm-2[data-v-0851419a] {\n    gap: 0.5rem !important;\n}\n.gap-sm-3[data-v-0851419a] {\n    gap: 1rem !important;\n}\n.gap-sm-4[data-v-0851419a] {\n    gap: 1.5rem !important;\n}\n.gap-sm-5[data-v-0851419a] {\n    gap: 3rem !important;\n}\n.row-gap-sm-0[data-v-0851419a] {\n    row-gap: 0 !important;\n}\n.row-gap-sm-1[data-v-0851419a] {\n    row-gap: 0.25rem !important;\n}\n.row-gap-sm-2[data-v-0851419a] {\n    row-gap: 0.5rem !important;\n}\n.row-gap-sm-3[data-v-0851419a] {\n    row-gap: 1rem !important;\n}\n.row-gap-sm-4[data-v-0851419a] {\n    row-gap: 1.5rem !important;\n}\n.row-gap-sm-5[data-v-0851419a] {\n    row-gap: 3rem !important;\n}\n.column-gap-sm-0[data-v-0851419a] {\n    -moz-column-gap: 0 !important;\n         column-gap: 0 !important;\n}\n.column-gap-sm-1[data-v-0851419a] {\n    -moz-column-gap: 0.25rem !important;\n         column-gap: 0.25rem !important;\n}\n.column-gap-sm-2[data-v-0851419a] {\n    -moz-column-gap: 0.5rem !important;\n         column-gap: 0.5rem !important;\n}\n.column-gap-sm-3[data-v-0851419a] {\n    -moz-column-gap: 1rem !important;\n         column-gap: 1rem !important;\n}\n.column-gap-sm-4[data-v-0851419a] {\n    -moz-column-gap: 1.5rem !important;\n         column-gap: 1.5rem !important;\n}\n.column-gap-sm-5[data-v-0851419a] {\n    -moz-column-gap: 3rem !important;\n         column-gap: 3rem !important;\n}\n.text-sm-start[data-v-0851419a] {\n    text-align: left !important;\n}\n.text-sm-end[data-v-0851419a] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-0851419a] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.float-md-start[data-v-0851419a] {\n    float: left !important;\n}\n.float-md-end[data-v-0851419a] {\n    float: right !important;\n}\n.float-md-none[data-v-0851419a] {\n    float: none !important;\n}\n.object-fit-md-contain[data-v-0851419a] {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n}\n.object-fit-md-cover[data-v-0851419a] {\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n}\n.object-fit-md-fill[data-v-0851419a] {\n    -o-object-fit: fill !important;\n       object-fit: fill !important;\n}\n.object-fit-md-scale[data-v-0851419a] {\n    -o-object-fit: scale-down !important;\n       object-fit: scale-down !important;\n}\n.object-fit-md-none[data-v-0851419a] {\n    -o-object-fit: none !important;\n       object-fit: none !important;\n}\n.d-md-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-md-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-md-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-md-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-md-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-md-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-md-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-md-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-md-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-md-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-md-none[data-v-0851419a] {\n    display: none !important;\n}\n.flex-md-fill[data-v-0851419a] {\n    flex: 1 1 auto !important;\n}\n.flex-md-row[data-v-0851419a] {\n    flex-direction: row !important;\n}\n.flex-md-column[data-v-0851419a] {\n    flex-direction: column !important;\n}\n.flex-md-row-reverse[data-v-0851419a] {\n    flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse[data-v-0851419a] {\n    flex-direction: column-reverse !important;\n}\n.flex-md-grow-0[data-v-0851419a] {\n    flex-grow: 0 !important;\n}\n.flex-md-grow-1[data-v-0851419a] {\n    flex-grow: 1 !important;\n}\n.flex-md-shrink-0[data-v-0851419a] {\n    flex-shrink: 0 !important;\n}\n.flex-md-shrink-1[data-v-0851419a] {\n    flex-shrink: 1 !important;\n}\n.flex-md-wrap[data-v-0851419a] {\n    flex-wrap: wrap !important;\n}\n.flex-md-nowrap[data-v-0851419a] {\n    flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse[data-v-0851419a] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-md-start[data-v-0851419a] {\n    justify-content: flex-start !important;\n}\n.justify-content-md-end[data-v-0851419a] {\n    justify-content: flex-end !important;\n}\n.justify-content-md-center[data-v-0851419a] {\n    justify-content: center !important;\n}\n.justify-content-md-between[data-v-0851419a] {\n    justify-content: space-between !important;\n}\n.justify-content-md-around[data-v-0851419a] {\n    justify-content: space-around !important;\n}\n.justify-content-md-evenly[data-v-0851419a] {\n    justify-content: space-evenly !important;\n}\n.align-items-md-start[data-v-0851419a] {\n    align-items: flex-start !important;\n}\n.align-items-md-end[data-v-0851419a] {\n    align-items: flex-end !important;\n}\n.align-items-md-center[data-v-0851419a] {\n    align-items: center !important;\n}\n.align-items-md-baseline[data-v-0851419a] {\n    align-items: baseline !important;\n}\n.align-items-md-stretch[data-v-0851419a] {\n    align-items: stretch !important;\n}\n.align-content-md-start[data-v-0851419a] {\n    align-content: flex-start !important;\n}\n.align-content-md-end[data-v-0851419a] {\n    align-content: flex-end !important;\n}\n.align-content-md-center[data-v-0851419a] {\n    align-content: center !important;\n}\n.align-content-md-between[data-v-0851419a] {\n    align-content: space-between !important;\n}\n.align-content-md-around[data-v-0851419a] {\n    align-content: space-around !important;\n}\n.align-content-md-stretch[data-v-0851419a] {\n    align-content: stretch !important;\n}\n.align-self-md-auto[data-v-0851419a] {\n    align-self: auto !important;\n}\n.align-self-md-start[data-v-0851419a] {\n    align-self: flex-start !important;\n}\n.align-self-md-end[data-v-0851419a] {\n    align-self: flex-end !important;\n}\n.align-self-md-center[data-v-0851419a] {\n    align-self: center !important;\n}\n.align-self-md-baseline[data-v-0851419a] {\n    align-self: baseline !important;\n}\n.align-self-md-stretch[data-v-0851419a] {\n    align-self: stretch !important;\n}\n.order-md-first[data-v-0851419a] {\n    order: -1 !important;\n}\n.order-md-0[data-v-0851419a] {\n    order: 0 !important;\n}\n.order-md-1[data-v-0851419a] {\n    order: 1 !important;\n}\n.order-md-2[data-v-0851419a] {\n    order: 2 !important;\n}\n.order-md-3[data-v-0851419a] {\n    order: 3 !important;\n}\n.order-md-4[data-v-0851419a] {\n    order: 4 !important;\n}\n.order-md-5[data-v-0851419a] {\n    order: 5 !important;\n}\n.order-md-last[data-v-0851419a] {\n    order: 6 !important;\n}\n.m-md-0[data-v-0851419a] {\n    margin: 0 !important;\n}\n.m-md-1[data-v-0851419a] {\n    margin: 0.25rem !important;\n}\n.m-md-2[data-v-0851419a] {\n    margin: 0.5rem !important;\n}\n.m-md-3[data-v-0851419a] {\n    margin: 1rem !important;\n}\n.m-md-4[data-v-0851419a] {\n    margin: 1.5rem !important;\n}\n.m-md-5[data-v-0851419a] {\n    margin: 3rem !important;\n}\n.m-md-auto[data-v-0851419a] {\n    margin: auto !important;\n}\n.mx-md-0[data-v-0851419a] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-md-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-md-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-md-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-md-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-md-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-md-auto[data-v-0851419a] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-md-0[data-v-0851419a] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-md-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-md-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-md-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-md-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-md-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-md-auto[data-v-0851419a] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-md-0[data-v-0851419a] {\n    margin-top: 0 !important;\n}\n.mt-md-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n}\n.mt-md-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n}\n.mt-md-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n}\n.mt-md-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n}\n.mt-md-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n}\n.mt-md-auto[data-v-0851419a] {\n    margin-top: auto !important;\n}\n.me-md-0[data-v-0851419a] {\n    margin-right: 0 !important;\n}\n.me-md-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n}\n.me-md-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n}\n.me-md-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n}\n.me-md-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n}\n.me-md-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n}\n.me-md-auto[data-v-0851419a] {\n    margin-right: auto !important;\n}\n.mb-md-0[data-v-0851419a] {\n    margin-bottom: 0 !important;\n}\n.mb-md-1[data-v-0851419a] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-md-2[data-v-0851419a] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-md-3[data-v-0851419a] {\n    margin-bottom: 1rem !important;\n}\n.mb-md-4[data-v-0851419a] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-md-5[data-v-0851419a] {\n    margin-bottom: 3rem !important;\n}\n.mb-md-auto[data-v-0851419a] {\n    margin-bottom: auto !important;\n}\n.ms-md-0[data-v-0851419a] {\n    margin-left: 0 !important;\n}\n.ms-md-1[data-v-0851419a] {\n    margin-left: 0.25rem !important;\n}\n.ms-md-2[data-v-0851419a] {\n    margin-left: 0.5rem !important;\n}\n.ms-md-3[data-v-0851419a] {\n    margin-left: 1rem !important;\n}\n.ms-md-4[data-v-0851419a] {\n    margin-left: 1.5rem !important;\n}\n.ms-md-5[data-v-0851419a] {\n    margin-left: 3rem !important;\n}\n.ms-md-auto[data-v-0851419a] {\n    margin-left: auto !important;\n}\n.p-md-0[data-v-0851419a] {\n    padding: 0 !important;\n}\n.p-md-1[data-v-0851419a] {\n    padding: 0.25rem !important;\n}\n.p-md-2[data-v-0851419a] {\n    padding: 0.5rem !important;\n}\n.p-md-3[data-v-0851419a] {\n    padding: 1rem !important;\n}\n.p-md-4[data-v-0851419a] {\n    padding: 1.5rem !important;\n}\n.p-md-5[data-v-0851419a] {\n    padding: 3rem !important;\n}\n.px-md-0[data-v-0851419a] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-md-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-md-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-md-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-md-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-md-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-md-0[data-v-0851419a] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-md-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-md-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-md-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-md-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-md-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-md-0[data-v-0851419a] {\n    padding-top: 0 !important;\n}\n.pt-md-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n}\n.pt-md-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n}\n.pt-md-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n}\n.pt-md-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n}\n.pt-md-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n}\n.pe-md-0[data-v-0851419a] {\n    padding-right: 0 !important;\n}\n.pe-md-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n}\n.pe-md-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n}\n.pe-md-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n}\n.pe-md-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n}\n.pe-md-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n}\n.pb-md-0[data-v-0851419a] {\n    padding-bottom: 0 !important;\n}\n.pb-md-1[data-v-0851419a] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-md-2[data-v-0851419a] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-md-3[data-v-0851419a] {\n    padding-bottom: 1rem !important;\n}\n.pb-md-4[data-v-0851419a] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-md-5[data-v-0851419a] {\n    padding-bottom: 3rem !important;\n}\n.ps-md-0[data-v-0851419a] {\n    padding-left: 0 !important;\n}\n.ps-md-1[data-v-0851419a] {\n    padding-left: 0.25rem !important;\n}\n.ps-md-2[data-v-0851419a] {\n    padding-left: 0.5rem !important;\n}\n.ps-md-3[data-v-0851419a] {\n    padding-left: 1rem !important;\n}\n.ps-md-4[data-v-0851419a] {\n    padding-left: 1.5rem !important;\n}\n.ps-md-5[data-v-0851419a] {\n    padding-left: 3rem !important;\n}\n.gap-md-0[data-v-0851419a] {\n    gap: 0 !important;\n}\n.gap-md-1[data-v-0851419a] {\n    gap: 0.25rem !important;\n}\n.gap-md-2[data-v-0851419a] {\n    gap: 0.5rem !important;\n}\n.gap-md-3[data-v-0851419a] {\n    gap: 1rem !important;\n}\n.gap-md-4[data-v-0851419a] {\n    gap: 1.5rem !important;\n}\n.gap-md-5[data-v-0851419a] {\n    gap: 3rem !important;\n}\n.row-gap-md-0[data-v-0851419a] {\n    row-gap: 0 !important;\n}\n.row-gap-md-1[data-v-0851419a] {\n    row-gap: 0.25rem !important;\n}\n.row-gap-md-2[data-v-0851419a] {\n    row-gap: 0.5rem !important;\n}\n.row-gap-md-3[data-v-0851419a] {\n    row-gap: 1rem !important;\n}\n.row-gap-md-4[data-v-0851419a] {\n    row-gap: 1.5rem !important;\n}\n.row-gap-md-5[data-v-0851419a] {\n    row-gap: 3rem !important;\n}\n.column-gap-md-0[data-v-0851419a] {\n    -moz-column-gap: 0 !important;\n         column-gap: 0 !important;\n}\n.column-gap-md-1[data-v-0851419a] {\n    -moz-column-gap: 0.25rem !important;\n         column-gap: 0.25rem !important;\n}\n.column-gap-md-2[data-v-0851419a] {\n    -moz-column-gap: 0.5rem !important;\n         column-gap: 0.5rem !important;\n}\n.column-gap-md-3[data-v-0851419a] {\n    -moz-column-gap: 1rem !important;\n         column-gap: 1rem !important;\n}\n.column-gap-md-4[data-v-0851419a] {\n    -moz-column-gap: 1.5rem !important;\n         column-gap: 1.5rem !important;\n}\n.column-gap-md-5[data-v-0851419a] {\n    -moz-column-gap: 3rem !important;\n         column-gap: 3rem !important;\n}\n.text-md-start[data-v-0851419a] {\n    text-align: left !important;\n}\n.text-md-end[data-v-0851419a] {\n    text-align: right !important;\n}\n.text-md-center[data-v-0851419a] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.float-lg-start[data-v-0851419a] {\n    float: left !important;\n}\n.float-lg-end[data-v-0851419a] {\n    float: right !important;\n}\n.float-lg-none[data-v-0851419a] {\n    float: none !important;\n}\n.object-fit-lg-contain[data-v-0851419a] {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n}\n.object-fit-lg-cover[data-v-0851419a] {\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n}\n.object-fit-lg-fill[data-v-0851419a] {\n    -o-object-fit: fill !important;\n       object-fit: fill !important;\n}\n.object-fit-lg-scale[data-v-0851419a] {\n    -o-object-fit: scale-down !important;\n       object-fit: scale-down !important;\n}\n.object-fit-lg-none[data-v-0851419a] {\n    -o-object-fit: none !important;\n       object-fit: none !important;\n}\n.d-lg-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-lg-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-lg-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-lg-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-lg-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-lg-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-lg-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-lg-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-lg-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-lg-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-lg-none[data-v-0851419a] {\n    display: none !important;\n}\n.flex-lg-fill[data-v-0851419a] {\n    flex: 1 1 auto !important;\n}\n.flex-lg-row[data-v-0851419a] {\n    flex-direction: row !important;\n}\n.flex-lg-column[data-v-0851419a] {\n    flex-direction: column !important;\n}\n.flex-lg-row-reverse[data-v-0851419a] {\n    flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse[data-v-0851419a] {\n    flex-direction: column-reverse !important;\n}\n.flex-lg-grow-0[data-v-0851419a] {\n    flex-grow: 0 !important;\n}\n.flex-lg-grow-1[data-v-0851419a] {\n    flex-grow: 1 !important;\n}\n.flex-lg-shrink-0[data-v-0851419a] {\n    flex-shrink: 0 !important;\n}\n.flex-lg-shrink-1[data-v-0851419a] {\n    flex-shrink: 1 !important;\n}\n.flex-lg-wrap[data-v-0851419a] {\n    flex-wrap: wrap !important;\n}\n.flex-lg-nowrap[data-v-0851419a] {\n    flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse[data-v-0851419a] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-lg-start[data-v-0851419a] {\n    justify-content: flex-start !important;\n}\n.justify-content-lg-end[data-v-0851419a] {\n    justify-content: flex-end !important;\n}\n.justify-content-lg-center[data-v-0851419a] {\n    justify-content: center !important;\n}\n.justify-content-lg-between[data-v-0851419a] {\n    justify-content: space-between !important;\n}\n.justify-content-lg-around[data-v-0851419a] {\n    justify-content: space-around !important;\n}\n.justify-content-lg-evenly[data-v-0851419a] {\n    justify-content: space-evenly !important;\n}\n.align-items-lg-start[data-v-0851419a] {\n    align-items: flex-start !important;\n}\n.align-items-lg-end[data-v-0851419a] {\n    align-items: flex-end !important;\n}\n.align-items-lg-center[data-v-0851419a] {\n    align-items: center !important;\n}\n.align-items-lg-baseline[data-v-0851419a] {\n    align-items: baseline !important;\n}\n.align-items-lg-stretch[data-v-0851419a] {\n    align-items: stretch !important;\n}\n.align-content-lg-start[data-v-0851419a] {\n    align-content: flex-start !important;\n}\n.align-content-lg-end[data-v-0851419a] {\n    align-content: flex-end !important;\n}\n.align-content-lg-center[data-v-0851419a] {\n    align-content: center !important;\n}\n.align-content-lg-between[data-v-0851419a] {\n    align-content: space-between !important;\n}\n.align-content-lg-around[data-v-0851419a] {\n    align-content: space-around !important;\n}\n.align-content-lg-stretch[data-v-0851419a] {\n    align-content: stretch !important;\n}\n.align-self-lg-auto[data-v-0851419a] {\n    align-self: auto !important;\n}\n.align-self-lg-start[data-v-0851419a] {\n    align-self: flex-start !important;\n}\n.align-self-lg-end[data-v-0851419a] {\n    align-self: flex-end !important;\n}\n.align-self-lg-center[data-v-0851419a] {\n    align-self: center !important;\n}\n.align-self-lg-baseline[data-v-0851419a] {\n    align-self: baseline !important;\n}\n.align-self-lg-stretch[data-v-0851419a] {\n    align-self: stretch !important;\n}\n.order-lg-first[data-v-0851419a] {\n    order: -1 !important;\n}\n.order-lg-0[data-v-0851419a] {\n    order: 0 !important;\n}\n.order-lg-1[data-v-0851419a] {\n    order: 1 !important;\n}\n.order-lg-2[data-v-0851419a] {\n    order: 2 !important;\n}\n.order-lg-3[data-v-0851419a] {\n    order: 3 !important;\n}\n.order-lg-4[data-v-0851419a] {\n    order: 4 !important;\n}\n.order-lg-5[data-v-0851419a] {\n    order: 5 !important;\n}\n.order-lg-last[data-v-0851419a] {\n    order: 6 !important;\n}\n.m-lg-0[data-v-0851419a] {\n    margin: 0 !important;\n}\n.m-lg-1[data-v-0851419a] {\n    margin: 0.25rem !important;\n}\n.m-lg-2[data-v-0851419a] {\n    margin: 0.5rem !important;\n}\n.m-lg-3[data-v-0851419a] {\n    margin: 1rem !important;\n}\n.m-lg-4[data-v-0851419a] {\n    margin: 1.5rem !important;\n}\n.m-lg-5[data-v-0851419a] {\n    margin: 3rem !important;\n}\n.m-lg-auto[data-v-0851419a] {\n    margin: auto !important;\n}\n.mx-lg-0[data-v-0851419a] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-lg-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-lg-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-lg-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-lg-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-lg-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-lg-auto[data-v-0851419a] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-lg-0[data-v-0851419a] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-lg-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-lg-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-lg-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-lg-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-lg-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-lg-auto[data-v-0851419a] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-lg-0[data-v-0851419a] {\n    margin-top: 0 !important;\n}\n.mt-lg-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n}\n.mt-lg-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n}\n.mt-lg-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n}\n.mt-lg-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n}\n.mt-lg-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n}\n.mt-lg-auto[data-v-0851419a] {\n    margin-top: auto !important;\n}\n.me-lg-0[data-v-0851419a] {\n    margin-right: 0 !important;\n}\n.me-lg-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n}\n.me-lg-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n}\n.me-lg-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n}\n.me-lg-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n}\n.me-lg-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n}\n.me-lg-auto[data-v-0851419a] {\n    margin-right: auto !important;\n}\n.mb-lg-0[data-v-0851419a] {\n    margin-bottom: 0 !important;\n}\n.mb-lg-1[data-v-0851419a] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-lg-2[data-v-0851419a] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-lg-3[data-v-0851419a] {\n    margin-bottom: 1rem !important;\n}\n.mb-lg-4[data-v-0851419a] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-lg-5[data-v-0851419a] {\n    margin-bottom: 3rem !important;\n}\n.mb-lg-auto[data-v-0851419a] {\n    margin-bottom: auto !important;\n}\n.ms-lg-0[data-v-0851419a] {\n    margin-left: 0 !important;\n}\n.ms-lg-1[data-v-0851419a] {\n    margin-left: 0.25rem !important;\n}\n.ms-lg-2[data-v-0851419a] {\n    margin-left: 0.5rem !important;\n}\n.ms-lg-3[data-v-0851419a] {\n    margin-left: 1rem !important;\n}\n.ms-lg-4[data-v-0851419a] {\n    margin-left: 1.5rem !important;\n}\n.ms-lg-5[data-v-0851419a] {\n    margin-left: 3rem !important;\n}\n.ms-lg-auto[data-v-0851419a] {\n    margin-left: auto !important;\n}\n.p-lg-0[data-v-0851419a] {\n    padding: 0 !important;\n}\n.p-lg-1[data-v-0851419a] {\n    padding: 0.25rem !important;\n}\n.p-lg-2[data-v-0851419a] {\n    padding: 0.5rem !important;\n}\n.p-lg-3[data-v-0851419a] {\n    padding: 1rem !important;\n}\n.p-lg-4[data-v-0851419a] {\n    padding: 1.5rem !important;\n}\n.p-lg-5[data-v-0851419a] {\n    padding: 3rem !important;\n}\n.px-lg-0[data-v-0851419a] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-lg-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-lg-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-lg-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-lg-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-lg-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-lg-0[data-v-0851419a] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-lg-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-lg-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-lg-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-lg-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-lg-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-lg-0[data-v-0851419a] {\n    padding-top: 0 !important;\n}\n.pt-lg-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n}\n.pt-lg-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n}\n.pt-lg-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n}\n.pt-lg-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n}\n.pt-lg-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n}\n.pe-lg-0[data-v-0851419a] {\n    padding-right: 0 !important;\n}\n.pe-lg-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n}\n.pe-lg-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n}\n.pe-lg-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n}\n.pe-lg-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n}\n.pe-lg-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n}\n.pb-lg-0[data-v-0851419a] {\n    padding-bottom: 0 !important;\n}\n.pb-lg-1[data-v-0851419a] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-lg-2[data-v-0851419a] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-lg-3[data-v-0851419a] {\n    padding-bottom: 1rem !important;\n}\n.pb-lg-4[data-v-0851419a] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-lg-5[data-v-0851419a] {\n    padding-bottom: 3rem !important;\n}\n.ps-lg-0[data-v-0851419a] {\n    padding-left: 0 !important;\n}\n.ps-lg-1[data-v-0851419a] {\n    padding-left: 0.25rem !important;\n}\n.ps-lg-2[data-v-0851419a] {\n    padding-left: 0.5rem !important;\n}\n.ps-lg-3[data-v-0851419a] {\n    padding-left: 1rem !important;\n}\n.ps-lg-4[data-v-0851419a] {\n    padding-left: 1.5rem !important;\n}\n.ps-lg-5[data-v-0851419a] {\n    padding-left: 3rem !important;\n}\n.gap-lg-0[data-v-0851419a] {\n    gap: 0 !important;\n}\n.gap-lg-1[data-v-0851419a] {\n    gap: 0.25rem !important;\n}\n.gap-lg-2[data-v-0851419a] {\n    gap: 0.5rem !important;\n}\n.gap-lg-3[data-v-0851419a] {\n    gap: 1rem !important;\n}\n.gap-lg-4[data-v-0851419a] {\n    gap: 1.5rem !important;\n}\n.gap-lg-5[data-v-0851419a] {\n    gap: 3rem !important;\n}\n.row-gap-lg-0[data-v-0851419a] {\n    row-gap: 0 !important;\n}\n.row-gap-lg-1[data-v-0851419a] {\n    row-gap: 0.25rem !important;\n}\n.row-gap-lg-2[data-v-0851419a] {\n    row-gap: 0.5rem !important;\n}\n.row-gap-lg-3[data-v-0851419a] {\n    row-gap: 1rem !important;\n}\n.row-gap-lg-4[data-v-0851419a] {\n    row-gap: 1.5rem !important;\n}\n.row-gap-lg-5[data-v-0851419a] {\n    row-gap: 3rem !important;\n}\n.column-gap-lg-0[data-v-0851419a] {\n    -moz-column-gap: 0 !important;\n         column-gap: 0 !important;\n}\n.column-gap-lg-1[data-v-0851419a] {\n    -moz-column-gap: 0.25rem !important;\n         column-gap: 0.25rem !important;\n}\n.column-gap-lg-2[data-v-0851419a] {\n    -moz-column-gap: 0.5rem !important;\n         column-gap: 0.5rem !important;\n}\n.column-gap-lg-3[data-v-0851419a] {\n    -moz-column-gap: 1rem !important;\n         column-gap: 1rem !important;\n}\n.column-gap-lg-4[data-v-0851419a] {\n    -moz-column-gap: 1.5rem !important;\n         column-gap: 1.5rem !important;\n}\n.column-gap-lg-5[data-v-0851419a] {\n    -moz-column-gap: 3rem !important;\n         column-gap: 3rem !important;\n}\n.text-lg-start[data-v-0851419a] {\n    text-align: left !important;\n}\n.text-lg-end[data-v-0851419a] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-0851419a] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.float-xl-start[data-v-0851419a] {\n    float: left !important;\n}\n.float-xl-end[data-v-0851419a] {\n    float: right !important;\n}\n.float-xl-none[data-v-0851419a] {\n    float: none !important;\n}\n.object-fit-xl-contain[data-v-0851419a] {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n}\n.object-fit-xl-cover[data-v-0851419a] {\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n}\n.object-fit-xl-fill[data-v-0851419a] {\n    -o-object-fit: fill !important;\n       object-fit: fill !important;\n}\n.object-fit-xl-scale[data-v-0851419a] {\n    -o-object-fit: scale-down !important;\n       object-fit: scale-down !important;\n}\n.object-fit-xl-none[data-v-0851419a] {\n    -o-object-fit: none !important;\n       object-fit: none !important;\n}\n.d-xl-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-xl-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-xl-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-xl-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-xl-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-xl-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-xl-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-xl-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-xl-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-xl-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-xl-none[data-v-0851419a] {\n    display: none !important;\n}\n.flex-xl-fill[data-v-0851419a] {\n    flex: 1 1 auto !important;\n}\n.flex-xl-row[data-v-0851419a] {\n    flex-direction: row !important;\n}\n.flex-xl-column[data-v-0851419a] {\n    flex-direction: column !important;\n}\n.flex-xl-row-reverse[data-v-0851419a] {\n    flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse[data-v-0851419a] {\n    flex-direction: column-reverse !important;\n}\n.flex-xl-grow-0[data-v-0851419a] {\n    flex-grow: 0 !important;\n}\n.flex-xl-grow-1[data-v-0851419a] {\n    flex-grow: 1 !important;\n}\n.flex-xl-shrink-0[data-v-0851419a] {\n    flex-shrink: 0 !important;\n}\n.flex-xl-shrink-1[data-v-0851419a] {\n    flex-shrink: 1 !important;\n}\n.flex-xl-wrap[data-v-0851419a] {\n    flex-wrap: wrap !important;\n}\n.flex-xl-nowrap[data-v-0851419a] {\n    flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse[data-v-0851419a] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-xl-start[data-v-0851419a] {\n    justify-content: flex-start !important;\n}\n.justify-content-xl-end[data-v-0851419a] {\n    justify-content: flex-end !important;\n}\n.justify-content-xl-center[data-v-0851419a] {\n    justify-content: center !important;\n}\n.justify-content-xl-between[data-v-0851419a] {\n    justify-content: space-between !important;\n}\n.justify-content-xl-around[data-v-0851419a] {\n    justify-content: space-around !important;\n}\n.justify-content-xl-evenly[data-v-0851419a] {\n    justify-content: space-evenly !important;\n}\n.align-items-xl-start[data-v-0851419a] {\n    align-items: flex-start !important;\n}\n.align-items-xl-end[data-v-0851419a] {\n    align-items: flex-end !important;\n}\n.align-items-xl-center[data-v-0851419a] {\n    align-items: center !important;\n}\n.align-items-xl-baseline[data-v-0851419a] {\n    align-items: baseline !important;\n}\n.align-items-xl-stretch[data-v-0851419a] {\n    align-items: stretch !important;\n}\n.align-content-xl-start[data-v-0851419a] {\n    align-content: flex-start !important;\n}\n.align-content-xl-end[data-v-0851419a] {\n    align-content: flex-end !important;\n}\n.align-content-xl-center[data-v-0851419a] {\n    align-content: center !important;\n}\n.align-content-xl-between[data-v-0851419a] {\n    align-content: space-between !important;\n}\n.align-content-xl-around[data-v-0851419a] {\n    align-content: space-around !important;\n}\n.align-content-xl-stretch[data-v-0851419a] {\n    align-content: stretch !important;\n}\n.align-self-xl-auto[data-v-0851419a] {\n    align-self: auto !important;\n}\n.align-self-xl-start[data-v-0851419a] {\n    align-self: flex-start !important;\n}\n.align-self-xl-end[data-v-0851419a] {\n    align-self: flex-end !important;\n}\n.align-self-xl-center[data-v-0851419a] {\n    align-self: center !important;\n}\n.align-self-xl-baseline[data-v-0851419a] {\n    align-self: baseline !important;\n}\n.align-self-xl-stretch[data-v-0851419a] {\n    align-self: stretch !important;\n}\n.order-xl-first[data-v-0851419a] {\n    order: -1 !important;\n}\n.order-xl-0[data-v-0851419a] {\n    order: 0 !important;\n}\n.order-xl-1[data-v-0851419a] {\n    order: 1 !important;\n}\n.order-xl-2[data-v-0851419a] {\n    order: 2 !important;\n}\n.order-xl-3[data-v-0851419a] {\n    order: 3 !important;\n}\n.order-xl-4[data-v-0851419a] {\n    order: 4 !important;\n}\n.order-xl-5[data-v-0851419a] {\n    order: 5 !important;\n}\n.order-xl-last[data-v-0851419a] {\n    order: 6 !important;\n}\n.m-xl-0[data-v-0851419a] {\n    margin: 0 !important;\n}\n.m-xl-1[data-v-0851419a] {\n    margin: 0.25rem !important;\n}\n.m-xl-2[data-v-0851419a] {\n    margin: 0.5rem !important;\n}\n.m-xl-3[data-v-0851419a] {\n    margin: 1rem !important;\n}\n.m-xl-4[data-v-0851419a] {\n    margin: 1.5rem !important;\n}\n.m-xl-5[data-v-0851419a] {\n    margin: 3rem !important;\n}\n.m-xl-auto[data-v-0851419a] {\n    margin: auto !important;\n}\n.mx-xl-0[data-v-0851419a] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-xl-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-xl-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-xl-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-xl-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-xl-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-xl-auto[data-v-0851419a] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-xl-0[data-v-0851419a] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-xl-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-xl-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-xl-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-xl-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-xl-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-xl-auto[data-v-0851419a] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-xl-0[data-v-0851419a] {\n    margin-top: 0 !important;\n}\n.mt-xl-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n}\n.mt-xl-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n}\n.mt-xl-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n}\n.mt-xl-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n}\n.mt-xl-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n}\n.mt-xl-auto[data-v-0851419a] {\n    margin-top: auto !important;\n}\n.me-xl-0[data-v-0851419a] {\n    margin-right: 0 !important;\n}\n.me-xl-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n}\n.me-xl-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n}\n.me-xl-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n}\n.me-xl-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n}\n.me-xl-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n}\n.me-xl-auto[data-v-0851419a] {\n    margin-right: auto !important;\n}\n.mb-xl-0[data-v-0851419a] {\n    margin-bottom: 0 !important;\n}\n.mb-xl-1[data-v-0851419a] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-xl-2[data-v-0851419a] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-xl-3[data-v-0851419a] {\n    margin-bottom: 1rem !important;\n}\n.mb-xl-4[data-v-0851419a] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-xl-5[data-v-0851419a] {\n    margin-bottom: 3rem !important;\n}\n.mb-xl-auto[data-v-0851419a] {\n    margin-bottom: auto !important;\n}\n.ms-xl-0[data-v-0851419a] {\n    margin-left: 0 !important;\n}\n.ms-xl-1[data-v-0851419a] {\n    margin-left: 0.25rem !important;\n}\n.ms-xl-2[data-v-0851419a] {\n    margin-left: 0.5rem !important;\n}\n.ms-xl-3[data-v-0851419a] {\n    margin-left: 1rem !important;\n}\n.ms-xl-4[data-v-0851419a] {\n    margin-left: 1.5rem !important;\n}\n.ms-xl-5[data-v-0851419a] {\n    margin-left: 3rem !important;\n}\n.ms-xl-auto[data-v-0851419a] {\n    margin-left: auto !important;\n}\n.p-xl-0[data-v-0851419a] {\n    padding: 0 !important;\n}\n.p-xl-1[data-v-0851419a] {\n    padding: 0.25rem !important;\n}\n.p-xl-2[data-v-0851419a] {\n    padding: 0.5rem !important;\n}\n.p-xl-3[data-v-0851419a] {\n    padding: 1rem !important;\n}\n.p-xl-4[data-v-0851419a] {\n    padding: 1.5rem !important;\n}\n.p-xl-5[data-v-0851419a] {\n    padding: 3rem !important;\n}\n.px-xl-0[data-v-0851419a] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-xl-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-xl-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-xl-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-xl-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-xl-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-xl-0[data-v-0851419a] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-xl-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-xl-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-xl-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-xl-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-xl-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-xl-0[data-v-0851419a] {\n    padding-top: 0 !important;\n}\n.pt-xl-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n}\n.pt-xl-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n}\n.pt-xl-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n}\n.pt-xl-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n}\n.pt-xl-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n}\n.pe-xl-0[data-v-0851419a] {\n    padding-right: 0 !important;\n}\n.pe-xl-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n}\n.pe-xl-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n}\n.pe-xl-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n}\n.pe-xl-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n}\n.pe-xl-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n}\n.pb-xl-0[data-v-0851419a] {\n    padding-bottom: 0 !important;\n}\n.pb-xl-1[data-v-0851419a] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-xl-2[data-v-0851419a] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-xl-3[data-v-0851419a] {\n    padding-bottom: 1rem !important;\n}\n.pb-xl-4[data-v-0851419a] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-xl-5[data-v-0851419a] {\n    padding-bottom: 3rem !important;\n}\n.ps-xl-0[data-v-0851419a] {\n    padding-left: 0 !important;\n}\n.ps-xl-1[data-v-0851419a] {\n    padding-left: 0.25rem !important;\n}\n.ps-xl-2[data-v-0851419a] {\n    padding-left: 0.5rem !important;\n}\n.ps-xl-3[data-v-0851419a] {\n    padding-left: 1rem !important;\n}\n.ps-xl-4[data-v-0851419a] {\n    padding-left: 1.5rem !important;\n}\n.ps-xl-5[data-v-0851419a] {\n    padding-left: 3rem !important;\n}\n.gap-xl-0[data-v-0851419a] {\n    gap: 0 !important;\n}\n.gap-xl-1[data-v-0851419a] {\n    gap: 0.25rem !important;\n}\n.gap-xl-2[data-v-0851419a] {\n    gap: 0.5rem !important;\n}\n.gap-xl-3[data-v-0851419a] {\n    gap: 1rem !important;\n}\n.gap-xl-4[data-v-0851419a] {\n    gap: 1.5rem !important;\n}\n.gap-xl-5[data-v-0851419a] {\n    gap: 3rem !important;\n}\n.row-gap-xl-0[data-v-0851419a] {\n    row-gap: 0 !important;\n}\n.row-gap-xl-1[data-v-0851419a] {\n    row-gap: 0.25rem !important;\n}\n.row-gap-xl-2[data-v-0851419a] {\n    row-gap: 0.5rem !important;\n}\n.row-gap-xl-3[data-v-0851419a] {\n    row-gap: 1rem !important;\n}\n.row-gap-xl-4[data-v-0851419a] {\n    row-gap: 1.5rem !important;\n}\n.row-gap-xl-5[data-v-0851419a] {\n    row-gap: 3rem !important;\n}\n.column-gap-xl-0[data-v-0851419a] {\n    -moz-column-gap: 0 !important;\n         column-gap: 0 !important;\n}\n.column-gap-xl-1[data-v-0851419a] {\n    -moz-column-gap: 0.25rem !important;\n         column-gap: 0.25rem !important;\n}\n.column-gap-xl-2[data-v-0851419a] {\n    -moz-column-gap: 0.5rem !important;\n         column-gap: 0.5rem !important;\n}\n.column-gap-xl-3[data-v-0851419a] {\n    -moz-column-gap: 1rem !important;\n         column-gap: 1rem !important;\n}\n.column-gap-xl-4[data-v-0851419a] {\n    -moz-column-gap: 1.5rem !important;\n         column-gap: 1.5rem !important;\n}\n.column-gap-xl-5[data-v-0851419a] {\n    -moz-column-gap: 3rem !important;\n         column-gap: 3rem !important;\n}\n.text-xl-start[data-v-0851419a] {\n    text-align: left !important;\n}\n.text-xl-end[data-v-0851419a] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-0851419a] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1400px) {\n.float-xxl-start[data-v-0851419a] {\n    float: left !important;\n}\n.float-xxl-end[data-v-0851419a] {\n    float: right !important;\n}\n.float-xxl-none[data-v-0851419a] {\n    float: none !important;\n}\n.object-fit-xxl-contain[data-v-0851419a] {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n}\n.object-fit-xxl-cover[data-v-0851419a] {\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n}\n.object-fit-xxl-fill[data-v-0851419a] {\n    -o-object-fit: fill !important;\n       object-fit: fill !important;\n}\n.object-fit-xxl-scale[data-v-0851419a] {\n    -o-object-fit: scale-down !important;\n       object-fit: scale-down !important;\n}\n.object-fit-xxl-none[data-v-0851419a] {\n    -o-object-fit: none !important;\n       object-fit: none !important;\n}\n.d-xxl-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-xxl-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-xxl-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-xxl-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-xxl-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-xxl-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-xxl-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-xxl-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-xxl-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-xxl-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-xxl-none[data-v-0851419a] {\n    display: none !important;\n}\n.flex-xxl-fill[data-v-0851419a] {\n    flex: 1 1 auto !important;\n}\n.flex-xxl-row[data-v-0851419a] {\n    flex-direction: row !important;\n}\n.flex-xxl-column[data-v-0851419a] {\n    flex-direction: column !important;\n}\n.flex-xxl-row-reverse[data-v-0851419a] {\n    flex-direction: row-reverse !important;\n}\n.flex-xxl-column-reverse[data-v-0851419a] {\n    flex-direction: column-reverse !important;\n}\n.flex-xxl-grow-0[data-v-0851419a] {\n    flex-grow: 0 !important;\n}\n.flex-xxl-grow-1[data-v-0851419a] {\n    flex-grow: 1 !important;\n}\n.flex-xxl-shrink-0[data-v-0851419a] {\n    flex-shrink: 0 !important;\n}\n.flex-xxl-shrink-1[data-v-0851419a] {\n    flex-shrink: 1 !important;\n}\n.flex-xxl-wrap[data-v-0851419a] {\n    flex-wrap: wrap !important;\n}\n.flex-xxl-nowrap[data-v-0851419a] {\n    flex-wrap: nowrap !important;\n}\n.flex-xxl-wrap-reverse[data-v-0851419a] {\n    flex-wrap: wrap-reverse !important;\n}\n.justify-content-xxl-start[data-v-0851419a] {\n    justify-content: flex-start !important;\n}\n.justify-content-xxl-end[data-v-0851419a] {\n    justify-content: flex-end !important;\n}\n.justify-content-xxl-center[data-v-0851419a] {\n    justify-content: center !important;\n}\n.justify-content-xxl-between[data-v-0851419a] {\n    justify-content: space-between !important;\n}\n.justify-content-xxl-around[data-v-0851419a] {\n    justify-content: space-around !important;\n}\n.justify-content-xxl-evenly[data-v-0851419a] {\n    justify-content: space-evenly !important;\n}\n.align-items-xxl-start[data-v-0851419a] {\n    align-items: flex-start !important;\n}\n.align-items-xxl-end[data-v-0851419a] {\n    align-items: flex-end !important;\n}\n.align-items-xxl-center[data-v-0851419a] {\n    align-items: center !important;\n}\n.align-items-xxl-baseline[data-v-0851419a] {\n    align-items: baseline !important;\n}\n.align-items-xxl-stretch[data-v-0851419a] {\n    align-items: stretch !important;\n}\n.align-content-xxl-start[data-v-0851419a] {\n    align-content: flex-start !important;\n}\n.align-content-xxl-end[data-v-0851419a] {\n    align-content: flex-end !important;\n}\n.align-content-xxl-center[data-v-0851419a] {\n    align-content: center !important;\n}\n.align-content-xxl-between[data-v-0851419a] {\n    align-content: space-between !important;\n}\n.align-content-xxl-around[data-v-0851419a] {\n    align-content: space-around !important;\n}\n.align-content-xxl-stretch[data-v-0851419a] {\n    align-content: stretch !important;\n}\n.align-self-xxl-auto[data-v-0851419a] {\n    align-self: auto !important;\n}\n.align-self-xxl-start[data-v-0851419a] {\n    align-self: flex-start !important;\n}\n.align-self-xxl-end[data-v-0851419a] {\n    align-self: flex-end !important;\n}\n.align-self-xxl-center[data-v-0851419a] {\n    align-self: center !important;\n}\n.align-self-xxl-baseline[data-v-0851419a] {\n    align-self: baseline !important;\n}\n.align-self-xxl-stretch[data-v-0851419a] {\n    align-self: stretch !important;\n}\n.order-xxl-first[data-v-0851419a] {\n    order: -1 !important;\n}\n.order-xxl-0[data-v-0851419a] {\n    order: 0 !important;\n}\n.order-xxl-1[data-v-0851419a] {\n    order: 1 !important;\n}\n.order-xxl-2[data-v-0851419a] {\n    order: 2 !important;\n}\n.order-xxl-3[data-v-0851419a] {\n    order: 3 !important;\n}\n.order-xxl-4[data-v-0851419a] {\n    order: 4 !important;\n}\n.order-xxl-5[data-v-0851419a] {\n    order: 5 !important;\n}\n.order-xxl-last[data-v-0851419a] {\n    order: 6 !important;\n}\n.m-xxl-0[data-v-0851419a] {\n    margin: 0 !important;\n}\n.m-xxl-1[data-v-0851419a] {\n    margin: 0.25rem !important;\n}\n.m-xxl-2[data-v-0851419a] {\n    margin: 0.5rem !important;\n}\n.m-xxl-3[data-v-0851419a] {\n    margin: 1rem !important;\n}\n.m-xxl-4[data-v-0851419a] {\n    margin: 1.5rem !important;\n}\n.m-xxl-5[data-v-0851419a] {\n    margin: 3rem !important;\n}\n.m-xxl-auto[data-v-0851419a] {\n    margin: auto !important;\n}\n.mx-xxl-0[data-v-0851419a] {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n.mx-xxl-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n}\n.mx-xxl-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n}\n.mx-xxl-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n}\n.mx-xxl-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n}\n.mx-xxl-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n}\n.mx-xxl-auto[data-v-0851419a] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n}\n.my-xxl-0[data-v-0851419a] {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.my-xxl-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n}\n.my-xxl-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n}\n.my-xxl-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n.my-xxl-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n}\n.my-xxl-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n}\n.my-xxl-auto[data-v-0851419a] {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.mt-xxl-0[data-v-0851419a] {\n    margin-top: 0 !important;\n}\n.mt-xxl-1[data-v-0851419a] {\n    margin-top: 0.25rem !important;\n}\n.mt-xxl-2[data-v-0851419a] {\n    margin-top: 0.5rem !important;\n}\n.mt-xxl-3[data-v-0851419a] {\n    margin-top: 1rem !important;\n}\n.mt-xxl-4[data-v-0851419a] {\n    margin-top: 1.5rem !important;\n}\n.mt-xxl-5[data-v-0851419a] {\n    margin-top: 3rem !important;\n}\n.mt-xxl-auto[data-v-0851419a] {\n    margin-top: auto !important;\n}\n.me-xxl-0[data-v-0851419a] {\n    margin-right: 0 !important;\n}\n.me-xxl-1[data-v-0851419a] {\n    margin-right: 0.25rem !important;\n}\n.me-xxl-2[data-v-0851419a] {\n    margin-right: 0.5rem !important;\n}\n.me-xxl-3[data-v-0851419a] {\n    margin-right: 1rem !important;\n}\n.me-xxl-4[data-v-0851419a] {\n    margin-right: 1.5rem !important;\n}\n.me-xxl-5[data-v-0851419a] {\n    margin-right: 3rem !important;\n}\n.me-xxl-auto[data-v-0851419a] {\n    margin-right: auto !important;\n}\n.mb-xxl-0[data-v-0851419a] {\n    margin-bottom: 0 !important;\n}\n.mb-xxl-1[data-v-0851419a] {\n    margin-bottom: 0.25rem !important;\n}\n.mb-xxl-2[data-v-0851419a] {\n    margin-bottom: 0.5rem !important;\n}\n.mb-xxl-3[data-v-0851419a] {\n    margin-bottom: 1rem !important;\n}\n.mb-xxl-4[data-v-0851419a] {\n    margin-bottom: 1.5rem !important;\n}\n.mb-xxl-5[data-v-0851419a] {\n    margin-bottom: 3rem !important;\n}\n.mb-xxl-auto[data-v-0851419a] {\n    margin-bottom: auto !important;\n}\n.ms-xxl-0[data-v-0851419a] {\n    margin-left: 0 !important;\n}\n.ms-xxl-1[data-v-0851419a] {\n    margin-left: 0.25rem !important;\n}\n.ms-xxl-2[data-v-0851419a] {\n    margin-left: 0.5rem !important;\n}\n.ms-xxl-3[data-v-0851419a] {\n    margin-left: 1rem !important;\n}\n.ms-xxl-4[data-v-0851419a] {\n    margin-left: 1.5rem !important;\n}\n.ms-xxl-5[data-v-0851419a] {\n    margin-left: 3rem !important;\n}\n.ms-xxl-auto[data-v-0851419a] {\n    margin-left: auto !important;\n}\n.p-xxl-0[data-v-0851419a] {\n    padding: 0 !important;\n}\n.p-xxl-1[data-v-0851419a] {\n    padding: 0.25rem !important;\n}\n.p-xxl-2[data-v-0851419a] {\n    padding: 0.5rem !important;\n}\n.p-xxl-3[data-v-0851419a] {\n    padding: 1rem !important;\n}\n.p-xxl-4[data-v-0851419a] {\n    padding: 1.5rem !important;\n}\n.p-xxl-5[data-v-0851419a] {\n    padding: 3rem !important;\n}\n.px-xxl-0[data-v-0851419a] {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n}\n.px-xxl-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n}\n.px-xxl-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n}\n.px-xxl-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n}\n.px-xxl-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n}\n.px-xxl-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n}\n.py-xxl-0[data-v-0851419a] {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.py-xxl-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-xxl-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-xxl-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.py-xxl-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n}\n.py-xxl-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n}\n.pt-xxl-0[data-v-0851419a] {\n    padding-top: 0 !important;\n}\n.pt-xxl-1[data-v-0851419a] {\n    padding-top: 0.25rem !important;\n}\n.pt-xxl-2[data-v-0851419a] {\n    padding-top: 0.5rem !important;\n}\n.pt-xxl-3[data-v-0851419a] {\n    padding-top: 1rem !important;\n}\n.pt-xxl-4[data-v-0851419a] {\n    padding-top: 1.5rem !important;\n}\n.pt-xxl-5[data-v-0851419a] {\n    padding-top: 3rem !important;\n}\n.pe-xxl-0[data-v-0851419a] {\n    padding-right: 0 !important;\n}\n.pe-xxl-1[data-v-0851419a] {\n    padding-right: 0.25rem !important;\n}\n.pe-xxl-2[data-v-0851419a] {\n    padding-right: 0.5rem !important;\n}\n.pe-xxl-3[data-v-0851419a] {\n    padding-right: 1rem !important;\n}\n.pe-xxl-4[data-v-0851419a] {\n    padding-right: 1.5rem !important;\n}\n.pe-xxl-5[data-v-0851419a] {\n    padding-right: 3rem !important;\n}\n.pb-xxl-0[data-v-0851419a] {\n    padding-bottom: 0 !important;\n}\n.pb-xxl-1[data-v-0851419a] {\n    padding-bottom: 0.25rem !important;\n}\n.pb-xxl-2[data-v-0851419a] {\n    padding-bottom: 0.5rem !important;\n}\n.pb-xxl-3[data-v-0851419a] {\n    padding-bottom: 1rem !important;\n}\n.pb-xxl-4[data-v-0851419a] {\n    padding-bottom: 1.5rem !important;\n}\n.pb-xxl-5[data-v-0851419a] {\n    padding-bottom: 3rem !important;\n}\n.ps-xxl-0[data-v-0851419a] {\n    padding-left: 0 !important;\n}\n.ps-xxl-1[data-v-0851419a] {\n    padding-left: 0.25rem !important;\n}\n.ps-xxl-2[data-v-0851419a] {\n    padding-left: 0.5rem !important;\n}\n.ps-xxl-3[data-v-0851419a] {\n    padding-left: 1rem !important;\n}\n.ps-xxl-4[data-v-0851419a] {\n    padding-left: 1.5rem !important;\n}\n.ps-xxl-5[data-v-0851419a] {\n    padding-left: 3rem !important;\n}\n.gap-xxl-0[data-v-0851419a] {\n    gap: 0 !important;\n}\n.gap-xxl-1[data-v-0851419a] {\n    gap: 0.25rem !important;\n}\n.gap-xxl-2[data-v-0851419a] {\n    gap: 0.5rem !important;\n}\n.gap-xxl-3[data-v-0851419a] {\n    gap: 1rem !important;\n}\n.gap-xxl-4[data-v-0851419a] {\n    gap: 1.5rem !important;\n}\n.gap-xxl-5[data-v-0851419a] {\n    gap: 3rem !important;\n}\n.row-gap-xxl-0[data-v-0851419a] {\n    row-gap: 0 !important;\n}\n.row-gap-xxl-1[data-v-0851419a] {\n    row-gap: 0.25rem !important;\n}\n.row-gap-xxl-2[data-v-0851419a] {\n    row-gap: 0.5rem !important;\n}\n.row-gap-xxl-3[data-v-0851419a] {\n    row-gap: 1rem !important;\n}\n.row-gap-xxl-4[data-v-0851419a] {\n    row-gap: 1.5rem !important;\n}\n.row-gap-xxl-5[data-v-0851419a] {\n    row-gap: 3rem !important;\n}\n.column-gap-xxl-0[data-v-0851419a] {\n    -moz-column-gap: 0 !important;\n         column-gap: 0 !important;\n}\n.column-gap-xxl-1[data-v-0851419a] {\n    -moz-column-gap: 0.25rem !important;\n         column-gap: 0.25rem !important;\n}\n.column-gap-xxl-2[data-v-0851419a] {\n    -moz-column-gap: 0.5rem !important;\n         column-gap: 0.5rem !important;\n}\n.column-gap-xxl-3[data-v-0851419a] {\n    -moz-column-gap: 1rem !important;\n         column-gap: 1rem !important;\n}\n.column-gap-xxl-4[data-v-0851419a] {\n    -moz-column-gap: 1.5rem !important;\n         column-gap: 1.5rem !important;\n}\n.column-gap-xxl-5[data-v-0851419a] {\n    -moz-column-gap: 3rem !important;\n         column-gap: 3rem !important;\n}\n.text-xxl-start[data-v-0851419a] {\n    text-align: left !important;\n}\n.text-xxl-end[data-v-0851419a] {\n    text-align: right !important;\n}\n.text-xxl-center[data-v-0851419a] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.fs-1[data-v-0851419a] {\n    font-size: 2.5rem !important;\n}\n.fs-2[data-v-0851419a] {\n    font-size: 2rem !important;\n}\n.fs-3[data-v-0851419a] {\n    font-size: 1.75rem !important;\n}\n.fs-4[data-v-0851419a] {\n    font-size: 1.5rem !important;\n}\n}\n@media print {\n.d-print-inline[data-v-0851419a] {\n    display: inline !important;\n}\n.d-print-inline-block[data-v-0851419a] {\n    display: inline-block !important;\n}\n.d-print-block[data-v-0851419a] {\n    display: block !important;\n}\n.d-print-grid[data-v-0851419a] {\n    display: grid !important;\n}\n.d-print-inline-grid[data-v-0851419a] {\n    display: inline-grid !important;\n}\n.d-print-table[data-v-0851419a] {\n    display: table !important;\n}\n.d-print-table-row[data-v-0851419a] {\n    display: table-row !important;\n}\n.d-print-table-cell[data-v-0851419a] {\n    display: table-cell !important;\n}\n.d-print-flex[data-v-0851419a] {\n    display: flex !important;\n}\n.d-print-inline-flex[data-v-0851419a] {\n    display: inline-flex !important;\n}\n.d-print-none[data-v-0851419a] {\n    display: none !important;\n}\n}\nnav.navbar[data-v-0851419a] {\n  transform-origin: top;\n  height: 100px;\n}\n@media (max-width: 575.98px) {\n.fix-top[data-v-0851419a] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 1030;\n}\n}\nul[data-v-0851419a] {\n  padding: 0;\n  list-style-type: none;\n}\n.header-link[data-v-0851419a] {\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  padding: 15px 20px;\n  position: relative;\n  font-weight: bold;\n  text-decoration: none !important;\n}\n.header-link[data-v-0851419a]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #fff;\n  transition: all 0.2s ease-in-out;\n  width: 0;\n}\n.header-link[data-v-0851419a]:hover {\n  color: inherit;\n  text-decoration: none;\n}\n.header-link[data-v-0851419a]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.my-header-link[data-v-0851419a] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.mobile-nav[data-v-0851419a] {\n  background-color: black;\n  position: absolute;\n  z-index: 3000;\n  width: 100%;\n  height: 0px;\n  top: 0px;\n  left: 0px;\n  transition: height 1s ease-in-out;\n}\n.mobile-nav.open[data-v-0851419a] {\n  height: 100vh;\n}\n.nav-icon-holder[data-v-0851419a] {\n  height: 50px;\n  width: 50px;\n  background-color: #232833;\n  border-radius: 50%;\n  z-index: 5000;\n}\n.nav-icon-holder[data-v-0851419a]:focus {\n  outline: none;\n}\n.nav-icon[data-v-0851419a] {\n  width: 20px;\n}\n.nav-icon[data-v-0851419a]:after, .nav-icon[data-v-0851419a]:before, .nav-icon div[data-v-0851419a] {\n  background-color: #fff;\n  border-radius: 3px;\n  content: \"\";\n  display: block;\n  height: 2.5px;\n  margin: 3.5px 0;\n  transition: all 0.2s ease-in-out;\n}\n.nav-icon.open[data-v-0851419a]:before {\n  transform: translateY(6px) rotate(45deg);\n}\n.nav-icon.open[data-v-0851419a]:after {\n  transform: translateY(-6px) rotate(-45deg);\n}\n.nav-icon.open div[data-v-0851419a] {\n  transform: scale(0);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".margin-b[data-v-236eb2bc] {\n  margin-bottom: 60px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sub-heading[data-v-034c1e6f] {\n  font-family: \"Montserrat\";\n  border-bottom: 2px solid #fff;\n  padding-bottom: 5px;\n  font-size: 1.5em;\n}\n@media (min-width: 768px) {\n.sub-heading[data-v-034c1e6f] {\n    font-size: 2em;\n}\n}\n.site-link[data-v-034c1e6f] {\n  font-family: \"Montserrat\";\n  padding-bottom: 5px;\n  font-size: 1.5em;\n}\n.points-text[data-v-034c1e6f] {\n  font-family: \"Montserrat\";\n  font-size: 1em;\n}\nul[data-v-034c1e6f] {\n  padding: 0px;\n  list-style-type: none;\n}\n.video-dialog[data-v-034c1e6f] {\n  max-width: 100%;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n.video-dialog[data-v-034c1e6f] {\n    max-width: 80%;\n    width: 80%;\n}\n}\n.video-content[data-v-034c1e6f] {\n  background-color: transparent;\n  border: none;\n}\n.relative-position[data-v-034c1e6f] {\n  position: relative;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sub-heading[data-v-330a3aad] {\n  font-family: \"Montserrat\";\n  font-size: 2em;\n}\n@media (min-width: 768px) {\n.sub-heading[data-v-330a3aad] {\n    font-size: 3em;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".welcome-text[data-v-14cbb6a9] {\n  font-size: 6vh;\n  margin-top: 30vh;\n  margin-bottom: 15vh;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_236eb2bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_236eb2bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_236eb2bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_style_index_0_id_034c1e6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_style_index_0_id_034c1e6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_style_index_0_id_034c1e6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_style_index_0_id_330a3aad_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_style_index_0_id_330a3aad_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_style_index_0_id_330a3aad_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_style_index_0_id_14cbb6a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_style_index_0_id_14cbb6a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_style_index_0_id_14cbb6a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/***/ (function(module) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_737__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_737__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_737__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_737__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_737__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_737__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2018__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __nested_webpack_require_2018__(1);
	
	var _htmlParserJs = __nested_webpack_require_2018__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_18173__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __nested_webpack_require_18173__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./resources/js/components/AppHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppHeader.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=0851419a&scoped=true */ "./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js */ "./resources/js/components/AppHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _AppHeader_vue_vue_type_style_index_0_id_0851419a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true */ "./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0851419a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProjectList.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProjectList.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true */ "./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js */ "./resources/js/components/ProjectList.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectList_vue_vue_type_style_index_0_id_236eb2bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true */ "./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "236eb2bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProjectList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProjectListItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ProjectListItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true */ "./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true");
/* harmony import */ var _ProjectListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectListItem.vue?vue&type=script&lang=js */ "./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectListItem_vue_vue_type_style_index_0_id_034c1e6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true */ "./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "034c1e6f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProjectListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheWelcomeContent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TheWelcomeContent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true */ "./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true");
/* harmony import */ var _TheWelcomeContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheWelcomeContent.vue?vue&type=script&lang=js */ "./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js");
/* harmony import */ var _TheWelcomeContent_vue_vue_type_style_index_0_id_330a3aad_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true */ "./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheWelcomeContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "330a3aad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheWelcomeContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TheWelcomeText.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/TheWelcomeText.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true */ "./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true");
/* harmony import */ var _TheWelcomeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheWelcomeText.vue?vue&type=script&lang=js */ "./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js");
/* harmony import */ var _TheWelcomeText_vue_vue_type_style_index_0_id_14cbb6a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true */ "./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheWelcomeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14cbb6a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TheWelcomeText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProjectList.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ProjectList.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeText.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=template&id=0851419a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_236eb2bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=template&id=236eb2bc&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_template_id_034c1e6f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=template&id=034c1e6f&scoped=true");


/***/ }),

/***/ "./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_template_id_330a3aad_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=template&id=330a3aad&scoped=true");


/***/ }),

/***/ "./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_template_id_14cbb6a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=template&id=14cbb6a9&scoped=true");


/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_236eb2bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectList.vue?vue&type=style&index=0&id=236eb2bc&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectListItem_vue_vue_type_style_index_0_id_034c1e6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectListItem.vue?vue&type=style&index=0&id=034c1e6f&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeContent_vue_vue_type_style_index_0_id_330a3aad_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeContent.vue?vue&type=style&index=0&id=330a3aad&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheWelcomeText_vue_vue_type_style_index_0_id_14cbb6a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TheWelcomeText.vue?vue&type=style&index=0&id=14cbb6a9&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* binding */ EffectScope),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   customRef: () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Vue),
/* harmony export */   defineAsyncComponent: () => (/* binding */ defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* binding */ defineComponent),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   effectScope: () => (/* binding */ effectScope),
/* harmony export */   getCurrentInstance: () => (/* binding */ getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isProxy: () => (/* binding */ isProxy),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   isReadonly: () => (/* binding */ isReadonly),
/* harmony export */   isRef: () => (/* binding */ isRef),
/* harmony export */   isShallow: () => (/* binding */ isShallow),
/* harmony export */   markRaw: () => (/* binding */ markRaw),
/* harmony export */   mergeDefaults: () => (/* binding */ mergeDefaults),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   onActivated: () => (/* binding */ onActivated),
/* harmony export */   onBeforeMount: () => (/* binding */ onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* binding */ onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* binding */ onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* binding */ onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* binding */ onErrorCaptured),
/* harmony export */   onMounted: () => (/* binding */ onMounted),
/* harmony export */   onRenderTracked: () => (/* binding */ onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* binding */ onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* binding */ onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* binding */ onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* binding */ onUnmounted),
/* harmony export */   onUpdated: () => (/* binding */ onUpdated),
/* harmony export */   provide: () => (/* binding */ provide),
/* harmony export */   proxyRefs: () => (/* binding */ proxyRefs),
/* harmony export */   reactive: () => (/* binding */ reactive),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   ref: () => (/* binding */ ref$1),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   shallowReactive: () => (/* binding */ shallowReactive),
/* harmony export */   shallowReadonly: () => (/* binding */ shallowReadonly),
/* harmony export */   shallowRef: () => (/* binding */ shallowRef),
/* harmony export */   toRaw: () => (/* binding */ toRaw),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   triggerRef: () => (/* binding */ triggerRef),
/* harmony export */   unref: () => (/* binding */ unref),
/* harmony export */   useAttrs: () => (/* binding */ useAttrs),
/* harmony export */   useCssModule: () => (/* binding */ useCssModule),
/* harmony export */   useCssVars: () => (/* binding */ useCssVars),
/* harmony export */   useListeners: () => (/* binding */ useListeners),
/* harmony export */   useSlots: () => (/* binding */ useSlots),
/* harmony export */   version: () => (/* binding */ version),
/* harmony export */   watch: () => (/* binding */ watch),
/* harmony export */   watchEffect: () => (/* binding */ watchEffect),
/* harmony export */   watchPostEffect: () => (/* binding */ watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
var isArray = Array.isArray;
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null;
}
function isDef(v) {
    return v !== undefined && v !== null;
}
function isTrue(v) {
    return v === true;
}
function isFalse(v) {
    return v === false;
}
/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Quick object check - this is primarily used to tell
 * objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;
function toRawType(value) {
    return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}
function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
    return (isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function');
}
/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
}
function replacer(_key, val) {
    // avoid circular deps from v3
    if (val && val.__v_isRef) {
        return val.value;
    }
    return val;
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; };
}
/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */
function remove$2(arr, item) {
    var len = arr.length;
    if (len) {
        // fast path for the only / last item
        if (item === arr[len - 1]) {
            arr.length = len - 1;
            return;
        }
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}
/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
});
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
/* istanbul ignore next */
function polyfillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx);
    }
    boundFn._length = fn.length;
    return boundFn;
}
function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}
// @ts-expect-error bind cannot be `undefined`
var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}
/**
 * Mix properties into target object.
 */
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
/* eslint-disable no-unused-vars */
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) { }
/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };
/* eslint-enable no-unused-vars */
/**
 * Return the same value.
 */
var identity = function (_) { return _; };
/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys$1(modules) {
    return modules
        .reduce(function (keys, m) { return keys.concat(m.staticKeys || []); }, [])
        .join(',');
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    if (a === b)
        return true;
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return (a.length === b.length &&
                    a.every(function (e, i) {
                        return looseEqual(e, b[i]);
                    }));
            }
            else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            }
            else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return (keysA.length === keysB.length &&
                    keysA.every(function (key) {
                        return looseEqual(a[key], b[key]);
                    }));
            }
            else {
                /* istanbul ignore next */
                return false;
            }
        }
        catch (e) {
            /* istanbul ignore next */
            return false;
        }
    }
    else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    }
    else {
        return false;
    }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val))
            return i;
    }
    return -1;
}
/**
 * Ensure a function is called only once.
 */
function once(fn) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
function hasChanged(x, y) {
    if (x === y) {
        return x === 0 && 1 / x !== 1 / y;
    }
    else {
        return x === x || y === y;
    }
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch',
    'renderTracked',
    'renderTriggered'
];

var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: false,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',
    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',
    /**
     * Whether to record perf
     */
    performance: false,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
};

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
/**
 * Parse simple path.
 */
var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
    if (bailRE.test(path)) {
        return;
    }
    var segments = path.split('.');
    return function (obj) {
        for (var i = 0; i < segments.length; i++) {
            if (!obj)
                return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}

// can we use __proto__?
var hasProto = '__proto__' in {};
// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
// Firefox has a "watch" function on Object.prototype...
// @ts-expect-error firebox support
var nativeWatch = {}.watch;
var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    }
    catch (e) { }
}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
    if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && typeof __webpack_require__.g !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer =
                __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
        }
        else {
            _isServer = false;
        }
    }
    return _isServer;
};
// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
}
else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /** @class */ (function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function (key) {
            return this.set[key] === true;
        };
        Set.prototype.add = function (key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function () {
            this.set = Object.create(null);
        };
        return Set;
    }());
}

var currentInstance = null;
/**
 * This is exposed for compatibility with v3 (e.g. some functions in VueUse
 * relies on it). Do not use this internally, just use `currentInstance`.
 *
 * @internal this function needs manual type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function getCurrentInstance() {
    return currentInstance && { proxy: currentInstance };
}
/**
 * @internal
 */
function setCurrentInstance(vm) {
    if (vm === void 0) { vm = null; }
    if (!vm)
        currentInstance && currentInstance._scope.off();
    currentInstance = vm;
    vm && vm._scope.on();
}

/**
 * @internal
 */
var VNode = /** @class */ (function () {
    function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function () {
            return this.componentInstance;
        },
        enumerable: false,
        configurable: true
    });
    return VNode;
}());
var createEmptyVNode = function (text) {
    if (text === void 0) { text = ''; }
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};
function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, 
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}

/* not type checking this file because flow doesn't play well with Proxy */
var initProxy;
if (true) {
    var allowedGlobals_1 = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
        'require' // for Webpack/Browserify
    );
    var warnNonPresent_1 = function (target, key) {
        warn$2("Property or method \"".concat(key, "\" is not defined on the instance but ") +
            'referenced during render. Make sure that this property is reactive, ' +
            'either in the data option, or for class-based components, by ' +
            'initializing the property. ' +
            'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };
    var warnReservedPrefix_1 = function (target, key) {
        warn$2("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
            'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
            'prevent conflicts with Vue internals. ' +
            'See: https://v2.vuejs.org/v2/api/#data', target);
    };
    var hasProxy_1 = typeof Proxy !== 'undefined' && isNative(Proxy);
    if (hasProxy_1) {
        var isBuiltInModifier_1 = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
            set: function (target, key, value) {
                if (isBuiltInModifier_1(key)) {
                    warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                    return false;
                }
                else {
                    target[key] = value;
                    return true;
                }
            }
        });
    }
    var hasHandler_1 = {
        has: function (target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals_1(key) ||
                (typeof key === 'string' &&
                    key.charAt(0) === '_' &&
                    !(key in target.$data));
            if (!has && !isAllowed) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return has || !isAllowed;
        }
    };
    var getHandler_1 = {
        get: function (target, key) {
            if (typeof key === 'string' && !(key in target)) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return target[key];
        }
    };
    initProxy = function initProxy(vm) {
        if (hasProxy_1) {
            // determine which proxy handler to use
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
            vm._renderProxy = new Proxy(vm, handlers);
        }
        else {
            vm._renderProxy = vm;
        }
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var uid$2 = 0;
var pendingCleanupDeps = [];
var cleanupDeps = function () {
    for (var i = 0; i < pendingCleanupDeps.length; i++) {
        var dep = pendingCleanupDeps[i];
        dep.subs = dep.subs.filter(function (s) { return s; });
        dep._pending = false;
    }
    pendingCleanupDeps.length = 0;
};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */
var Dep = /** @class */ (function () {
    function Dep() {
        // pending subs cleanup
        this._pending = false;
        this.id = uid$2++;
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function (sub) {
        // #12696 deps with massive amount of subscribers are extremely slow to
        // clean up in Chromium
        // to workaround this, we unset the sub for now, and clear them on
        // next scheduler flush.
        this.subs[this.subs.indexOf(sub)] = null;
        if (!this._pending) {
            this._pending = true;
            pendingCleanupDeps.push(this);
        }
    };
    Dep.prototype.depend = function (info) {
        if (Dep.target) {
            Dep.target.addDep(this);
            if ( true && info && Dep.target.onTrack) {
                Dep.target.onTrack(__assign({ effect: Dep.target }, info));
            }
        }
    };
    Dep.prototype.notify = function (info) {
        // stabilize the subscriber list first
        var subs = this.subs.filter(function (s) { return s; });
        if ( true && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort(function (a, b) { return a.id - b.id; });
        }
        for (var i = 0, l = subs.length; i < l; i++) {
            var sub = subs[i];
            if ( true && info) {
                sub.onTrigger &&
                    sub.onTrigger(__assign({ effect: subs[i] }, info));
            }
            sub.update();
        }
    };
    return Dep;
}());
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];
function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted)
            ob.observeArray(inserted);
        // notify change
        if (true) {
            ob.dep.notify({
                type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                target: this,
                key: method
            });
        }
        else {}
        return result;
    });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var NO_INITIAL_VALUE = {};
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;
function toggleObserving(value) {
    shouldObserve = value;
}
// ssr mock dep
var mockDep = {
    notify: noop,
    depend: noop,
    addSub: noop,
    removeSub: noop
};
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = /** @class */ (function () {
    function Observer(value, shallow, mock) {
        if (shallow === void 0) { shallow = false; }
        if (mock === void 0) { mock = false; }
        this.value = value;
        this.shallow = shallow;
        this.mock = mock;
        // this.value = value
        this.dep = mock ? mockDep : new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);
        if (isArray(value)) {
            if (!mock) {
                if (hasProto) {
                    value.__proto__ = arrayMethods;
                    /* eslint-enable no-proto */
                }
                else {
                    for (var i = 0, l = arrayKeys.length; i < l; i++) {
                        var key = arrayKeys[i];
                        def(value, key, arrayMethods[key]);
                    }
                }
            }
            if (!shallow) {
                this.observeArray(value);
            }
        }
        else {
            /**
             * Walk through all properties and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                defineReactive(value, key, NO_INITIAL_VALUE, undefined, shallow, mock);
            }
        }
    }
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function (value) {
        for (var i = 0, l = value.length; i < l; i++) {
            observe(value[i], false, this.mock);
        }
    };
    return Observer;
}());
// helpers
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, shallow, ssrMockReactivity) {
    if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        return value.__ob__;
    }
    if (shouldObserve &&
        (ssrMockReactivity || !isServerRendering()) &&
        (isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value.__v_skip /* ReactiveFlags.SKIP */ &&
        !isRef(value) &&
        !(value instanceof VNode)) {
        return new Observer(value, shallow, ssrMockReactivity);
    }
}
/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow, mock, observeEvenIfShallow) {
    if (observeEvenIfShallow === void 0) { observeEvenIfShallow = false; }
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }
    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) &&
        (val === NO_INITIAL_VALUE || arguments.length === 2)) {
        val = obj[key];
    }
    var childOb = shallow ? val && val.__ob__ : observe(val, false, mock);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                if (true) {
                    dep.depend({
                        target: obj,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                else {}
                if (childOb) {
                    childOb.dep.depend();
                    if (isArray(value)) {
                        dependArray(value);
                    }
                }
            }
            return isRef(value) && !shallow ? value.value : value;
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (!hasChanged(value, newVal)) {
                return;
            }
            if ( true && customSetter) {
                customSetter();
            }
            if (setter) {
                setter.call(obj, newVal);
            }
            else if (getter) {
                // #7981: for accessor properties without setter
                return;
            }
            else if (!shallow && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
                return;
            }
            else {
                val = newVal;
            }
            childOb = shallow ? newVal && newVal.__ob__ : observe(newVal, false, mock);
            if (true) {
                dep.notify({
                    type: "set" /* TriggerOpTypes.SET */,
                    target: obj,
                    key: key,
                    newValue: newVal,
                    oldValue: value
                });
            }
            else {}
        }
    });
    return dep;
}
function set(target, key, val) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isReadonly(target)) {
         true && warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    var ob = target.__ob__;
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        // when mocking for SSR, array methods are not hijacked
        if (ob && !ob.shallow && ob.mock) {
            observe(val, false, true);
        }
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
    if (true) {
        ob.dep.notify({
            type: "add" /* TriggerOpTypes.ADD */,
            target: target,
            key: key,
            newValue: val,
            oldValue: undefined
        });
    }
    else {}
    return val;
}
function del(target, key) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (isReadonly(target)) {
         true &&
            warn$2("Delete operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    if (true) {
        ob.dep.notify({
            type: "delete" /* TriggerOpTypes.DELETE */,
            target: target,
            key: key
        });
    }
    else {}
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        if (e && e.__ob__) {
            e.__ob__.dep.depend();
        }
        if (isArray(e)) {
            dependArray(e);
        }
    }
}

function reactive(target) {
    makeReactive(target, false);
    return target;
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    makeReactive(target, true);
    def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    return target;
}
function makeReactive(target, shallow) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (!isReadonly(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
            }
            var existingOb = target && target.__ob__;
            if (existingOb && existingOb.shallow !== shallow) {
                warn$2("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
            }
        }
        var ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
        if ( true && !ob) {
            if (target == null || isPrimitive(target)) {
                warn$2("value cannot be made reactive: ".concat(String(target)));
            }
            if (isCollectionType(target)) {
                warn$2("Vue 2 does not support reactive collection types such as Map or Set.");
            }
        }
    }
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value.__ob__);
}
function isShallow(value) {
    return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    // non-extensible objects won't be observed anyway
    if (Object.isExtensible(value)) {
        def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    }
    return value;
}
/**
 * @internal
 */
function isCollectionType(value) {
    var type = toRawType(value);
    return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
}

/**
 * @internal
 */
var RefFlag = "__v_isRef";
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    var ref = {};
    def(ref, RefFlag, true);
    def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
    def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
    return ref;
}
function triggerRef(ref) {
    if ( true && !ref.dep) {
        warn$2("received object is not a triggerable ref.");
    }
    if (true) {
        ref.dep &&
            ref.dep.notify({
                type: "set" /* TriggerOpTypes.SET */,
                target: ref,
                key: 'value'
            });
    }
    else {}
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function proxyRefs(objectWithRefs) {
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var proxy = {};
    var keys = Object.keys(objectWithRefs);
    for (var i = 0; i < keys.length; i++) {
        proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
    }
    return proxy;
}
function proxyWithRefUnwrap(target, source, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = source[key];
            if (isRef(val)) {
                return val.value;
            }
            else {
                var ob = val && val.__ob__;
                if (ob)
                    ob.dep.depend();
                return val;
            }
        },
        set: function (value) {
            var oldValue = source[key];
            if (isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
            }
            else {
                source[key] = value;
            }
        }
    });
}
function customRef(factory) {
    var dep = new Dep();
    var _a = factory(function () {
        if (true) {
            dep.depend({
                target: ref,
                type: "get" /* TrackOpTypes.GET */,
                key: 'value'
            });
        }
        else {}
    }, function () {
        if (true) {
            dep.notify({
                target: ref,
                type: "set" /* TriggerOpTypes.SET */,
                key: 'value'
            });
        }
        else {}
    }), get = _a.get, set = _a.set;
    var ref = {
        get value() {
            return get();
        },
        set value(newVal) {
            set(newVal);
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
function toRefs(object) {
    if ( true && !isReactive(object)) {
        warn$2("toRefs() expects a reactive object but received a plain one.");
    }
    var ret = isArray(object) ? new Array(object.length) : {};
    for (var key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
function toRef(object, key, defaultValue) {
    var val = object[key];
    if (isRef(val)) {
        return val;
    }
    var ref = {
        get value() {
            var val = object[key];
            return val === undefined ? defaultValue : val;
        },
        set value(newVal) {
            object[key] = newVal;
        }
    };
    def(ref, RefFlag, true);
    return ref;
}

var rawToReadonlyFlag = "__v_rawToReadonly";
var rawToShallowReadonlyFlag = "__v_rawToShallowReadonly";
function readonly(target) {
    return createReadonly(target, false);
}
function createReadonly(target, shallow) {
    if (!isPlainObject(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Vue 2 does not support readonly arrays.");
            }
            else if (isCollectionType(target)) {
                warn$2("Vue 2 does not support readonly collection types such as Map or Set.");
            }
            else {
                warn$2("value cannot be made readonly: ".concat(typeof target));
            }
        }
        return target;
    }
    if ( true && !Object.isExtensible(target)) {
        warn$2("Vue 2 does not support creating readonly proxy for non-extensible object.");
    }
    // already a readonly object
    if (isReadonly(target)) {
        return target;
    }
    // already has a readonly proxy
    var existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
    var existingProxy = target[existingFlag];
    if (existingProxy) {
        return existingProxy;
    }
    var proxy = Object.create(Object.getPrototypeOf(target));
    def(target, existingFlag, proxy);
    def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
    def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
    if (isRef(target)) {
        def(proxy, RefFlag, true);
    }
    if (shallow || isShallow(target)) {
        def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineReadonlyProperty(proxy, target, keys[i], shallow);
    }
    return proxy;
}
function defineReadonlyProperty(proxy, target, key, shallow) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = target[key];
            return shallow || !isPlainObject(val) ? val : readonly(val);
        },
        set: function () {
             true &&
                warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        }
    });
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReadonly(target, true);
}

function computed(getterOrOptions, debugOptions) {
    var getter;
    var setter;
    var onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter =  true
            ? function () {
                warn$2('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var watcher = isServerRendering()
        ? null
        : new Watcher(currentInstance, getter, noop, { lazy: true });
    if ( true && watcher && debugOptions) {
        watcher.onTrack = debugOptions.onTrack;
        watcher.onTrigger = debugOptions.onTrigger;
    }
    var ref = {
        // some libs rely on the presence effect for checking computed refs
        // from normal refs, but the implementation doesn't matter
        effect: watcher,
        get value() {
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    if ( true && Dep.target.onTrack) {
                        Dep.target.onTrack({
                            effect: Dep.target,
                            target: ref,
                            type: "get" /* TrackOpTypes.GET */,
                            key: 'value'
                        });
                    }
                    watcher.depend();
                }
                return watcher.value;
            }
            else {
                return getter();
            }
        },
        set value(newVal) {
            setter(newVal);
        }
    };
    def(ref, RefFlag, true);
    def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
    return ref;
}

var mark;
var measure;
if (true) {
    var perf_1 = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf_1 &&
        // @ts-ignore
        perf_1.mark &&
        // @ts-ignore
        perf_1.measure &&
        // @ts-ignore
        perf_1.clearMarks &&
        // @ts-ignore
        perf_1.clearMeasures) {
        mark = function (tag) { return perf_1.mark(tag); };
        measure = function (name, startTag, endTag) {
            perf_1.measure(name, startTag, endTag);
            perf_1.clearMarks(startTag);
            perf_1.clearMarks(endTag);
            // perf.clearMeasures(name)
        };
    }
}

var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
        name: name,
        once: once,
        capture: capture,
        passive: passive
    };
});
function createFnInvoker(fns, vm) {
    function invoker() {
        var fns = invoker.fns;
        if (isArray(fns)) {
            var cloned = fns.slice();
            for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
            }
        }
        else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
        }
    }
    invoker.fns = fns;
    return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
    var name, cur, old, event;
    for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
             true &&
                warn$2("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
        }
        else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur, vm);
            }
            if (isTrue(event.once)) {
                cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }
            add(event.name, cur, event.capture, event.passive, event.params);
        }
        else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for (name in oldOn) {
        if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove(event.name, oldOn[name], event.capture);
        }
    }
}

function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];
    function wrappedHook() {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove$2(invoker.fns, wrappedHook);
    }
    if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
    }
    else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
        }
        else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook]);
        }
    }
    invoker.merged = true;
    def[hookKey] = invoker;
}

function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
        return;
    }
    var res = {};
    var attrs = data.attrs, props = data.props;
    if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
            var altKey = hyphenate(key);
            if (true) {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                    tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") +
                        "".concat(formatComponentName(
                        // @ts-expect-error tag is string
                        tag || Ctor), ", but the declared prop name is") +
                        " \"".concat(key, "\". ") +
                        "Note that HTML attributes are case-insensitive and camelCased " +
                        "props need to use their kebab-case equivalents when using in-DOM " +
                        "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
                }
            }
            checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false);
        }
    }
    return res;
}
function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
                delete hash[key];
            }
            return true;
        }
        else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
                delete hash[altKey];
            }
            return true;
        }
    }
    return false;
}

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
        if (isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
        }
    }
    return children;
}
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
    return isPrimitive(children)
        ? [createTextVNode(children)]
        : isArray(children)
            ? normalizeArrayChildren(children)
            : undefined;
}
function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean')
            continue;
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (isArray(c)) {
            if (c.length > 0) {
                c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i));
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                }
                res.push.apply(res, c);
            }
        }
        else if (isPrimitive(c)) {
            if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c);
            }
            else if (c !== '') {
                // convert primitive to vnode
                res.push(createTextVNode(c));
            }
        }
        else {
            if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text);
            }
            else {
                // default key for nested array children (likely generated by v-for)
                if (isTrue(children._isVList) &&
                    isDef(c.tag) &&
                    isUndef(c.key) &&
                    isDef(nestedIndex)) {
                    c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                }
                res.push(c);
            }
        }
    }
    return res;
}

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
         true &&
            warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
        tag = data.is;
    }
    if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode();
    }
    // warn against non-primitive key
    if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        warn$2('Avoid using non-primitive value as key, ' +
            'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (isArray(children) && isFunction(children[0])) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
    }
    else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
        var Ctor = void 0;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
            // platform built-in elements
            if ( true &&
                isDef(data) &&
                isDef(data.nativeOn) &&
                data.tag !== 'component') {
                warn$2("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
            }
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        }
        else if ((!data || !data.pre) &&
            isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag);
        }
        else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
    }
    else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
    }
    if (isArray(vnode)) {
        return vnode;
    }
    else if (isDef(vnode)) {
        if (isDef(ns))
            applyNS(vnode, ns);
        if (isDef(data))
            registerDeepBindings(data);
        return vnode;
    }
    else {
        return createEmptyVNode();
    }
}
function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
    }
    if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                applyNS(child, ns, force);
            }
        }
    }
}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
    if (isObject(data.style)) {
        traverse(data.style);
    }
    if (isObject(data.class)) {
        traverse(data.class);
    }
}

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
    var ret = null, i, l, keys, key;
    if (isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
        }
    }
    else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
        }
    }
    else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
            }
        }
        else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
            }
        }
    }
    if (!isDef(ret)) {
        ret = [];
    }
    ret._isVList = true;
    return ret;
}

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallbackRender, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            if ( true && !isObject(bindObject)) {
                warn$2('slot v-bind without argument expects an Object', this);
            }
            props = extend(extend({}, bindObject), props);
        }
        nodes =
            scopedSlotFn(props) ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    else {
        nodes =
            this.$slots[name] ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    var target = props && props.slot;
    if (target) {
        return this.$createElement('template', { slot: target }, nodes);
    }
    else {
        return nodes;
    }
}

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
}

function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) {
        return expect.indexOf(actual) === -1;
    }
    else {
        return expect !== actual;
    }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
    }
    else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    }
    else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
    }
    return eventKeyCode === undefined;
}

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
        if (!isObject(value)) {
             true &&
                warn$2('v-bind without argument expects an Object or Array value', this);
        }
        else {
            if (isArray(value)) {
                value = toObject(value);
            }
            var hash = void 0;
            var _loop_1 = function (key) {
                if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                    hash = data;
                }
                else {
                    var type = data.attrs && data.attrs.type;
                    hash =
                        asProp || config.mustUseProp(tag, type, key)
                            ? data.domProps || (data.domProps = {})
                            : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key);
                var hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];
                    if (isSync) {
                        var on = data.on || (data.on = {});
                        on["update:".concat(key)] = function ($event) {
                            value[key] = $event;
                        };
                    }
                }
            };
            for (var key in value) {
                _loop_1(key);
            }
        }
    }
    return data;
}

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
        return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
    );
    markStatic$1(tree, "__static__".concat(index), false);
    return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
    markStatic$1(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
    return tree;
}
function markStatic$1(tree, key, isOnce) {
    if (isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
            }
        }
    }
    else {
        markStaticNode(tree, key, isOnce);
    }
}
function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
}

function bindObjectListeners(data, value) {
    if (value) {
        if (!isPlainObject(value)) {
             true && warn$2('v-on without argument expects an Object value', this);
        }
        else {
            var on = (data.on = data.on ? extend({}, data.on) : {});
            for (var key in value) {
                var existing = on[key];
                var ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}

function resolveScopedSlots(fns, res, 
// the following are added in 2.6
hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
        }
        else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            // @ts-expect-error
            if (slot.proxy) {
                // @ts-expect-error
                slot.fn.proxy = true;
            }
            res[slot.key] = slot.fn;
        }
    }
    if (contentHashKey) {
        res.$key = contentHashKey;
    }
    return res;
}

// helper to process dynamic keys for dynamic arguments in v-bind and v-on.
function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1];
        }
        else if ( true && key !== '' && key !== null) {
            // null is a special value for explicitly removing a binding
            warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
        }
    }
    return baseObj;
}
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
}

function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
}

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
    if (!children || !children.length) {
        return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
            data &&
            data.slot != null) {
            var name_1 = data.slot;
            var slot = slots[name_1] || (slots[name_1] = []);
            if (child.tag === 'template') {
                slot.push.apply(slot, child.children || []);
            }
            else {
                slot.push(child);
            }
        }
        else {
            (slots.default || (slots.default = [])).push(child);
        }
    }
    // ignore slots that contains only whitespace
    for (var name_2 in slots) {
        if (slots[name_2].every(isWhitespace)) {
            delete slots[name_2];
        }
    }
    return slots;
}
function isWhitespace(node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' ';
}

function isAsyncPlaceholder(node) {
    // @ts-expect-error not really boolean type
    return node.isComment && node.asyncFactory;
}

function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
    var key = scopedSlots && scopedSlots.$key;
    if (!scopedSlots) {
        res = {};
    }
    else if (scopedSlots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return scopedSlots._normalized;
    }
    else if (isStable &&
        prevScopedSlots &&
        prevScopedSlots !== emptyObject &&
        key === prevScopedSlots.$key &&
        !hasNormalSlots &&
        !prevScopedSlots.$hasNormal) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevScopedSlots;
    }
    else {
        res = {};
        for (var key_1 in scopedSlots) {
            if (scopedSlots[key_1] && key_1[0] !== '$') {
                res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key_2 in normalSlots) {
        if (!(key_2 in res)) {
            res[key_2] = proxyNormalSlot(normalSlots, key_2);
        }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (scopedSlots && Object.isExtensible(scopedSlots)) {
        scopedSlots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
    var normalized = function () {
        var cur = currentInstance;
        setCurrentInstance(vm);
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res =
            res && typeof res === 'object' && !isArray(res)
                ? [res] // single vnode
                : normalizeChildren(res);
        var vnode = res && res[0];
        setCurrentInstance(cur);
        return res &&
            (!vnode ||
                (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
            ? undefined
            : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
        });
    }
    return normalized;
}
function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; };
}

function initSetup(vm) {
    var options = vm.$options;
    var setup = options.setup;
    if (setup) {
        var ctx = (vm._setupContext = createSetupContext(vm));
        setCurrentInstance(vm);
        pushTarget();
        var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
        popTarget();
        setCurrentInstance();
        if (isFunction(setupResult)) {
            // render function
            // @ts-ignore
            options.render = setupResult;
        }
        else if (isObject(setupResult)) {
            // bindings
            if ( true && setupResult instanceof VNode) {
                warn$2("setup() should not return VNodes directly - " +
                    "return a render function instead.");
            }
            vm._setupState = setupResult;
            // __sfc indicates compiled bindings from <script setup>
            if (!setupResult.__sfc) {
                for (var key in setupResult) {
                    if (!isReserved(key)) {
                        proxyWithRefUnwrap(vm, setupResult, key);
                    }
                    else if (true) {
                        warn$2("Avoid using variables that start with _ or $ in setup().");
                    }
                }
            }
            else {
                // exposed for compiled render fn
                var proxy = (vm._setupProxy = {});
                for (var key in setupResult) {
                    if (key !== '__sfc') {
                        proxyWithRefUnwrap(proxy, setupResult, key);
                    }
                }
            }
        }
        else if ( true && setupResult !== undefined) {
            warn$2("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : typeof setupResult));
        }
    }
}
function createSetupContext(vm) {
    var exposeCalled = false;
    return {
        get attrs() {
            if (!vm._attrsProxy) {
                var proxy = (vm._attrsProxy = {});
                def(proxy, '_v_attr_proxy', true);
                syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
            }
            return vm._attrsProxy;
        },
        get listeners() {
            if (!vm._listenersProxy) {
                var proxy = (vm._listenersProxy = {});
                syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
            }
            return vm._listenersProxy;
        },
        get slots() {
            return initSlotsProxy(vm);
        },
        emit: bind$1(vm.$emit, vm),
        expose: function (exposed) {
            if (true) {
                if (exposeCalled) {
                    warn$2("expose() should be called only once per setup().", vm);
                }
                exposeCalled = true;
            }
            if (exposed) {
                Object.keys(exposed).forEach(function (key) {
                    return proxyWithRefUnwrap(vm, exposed, key);
                });
            }
        }
    };
}
function syncSetupProxy(to, from, prev, instance, type) {
    var changed = false;
    for (var key in from) {
        if (!(key in to)) {
            changed = true;
            defineProxyAttr(to, key, instance, type);
        }
        else if (from[key] !== prev[key]) {
            changed = true;
        }
    }
    for (var key in to) {
        if (!(key in from)) {
            changed = true;
            delete to[key];
        }
    }
    return changed;
}
function defineProxyAttr(proxy, key, instance, type) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return instance[type][key];
        }
    });
}
function initSlotsProxy(vm) {
    if (!vm._slotsProxy) {
        syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
    }
    return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    for (var key in to) {
        if (!(key in from)) {
            delete to[key];
        }
    }
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useSlots() {
    return getContext().slots;
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useAttrs() {
    return getContext().attrs;
}
/**
 * Vue 2 only
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useListeners() {
    return getContext().listeners;
}
function getContext() {
    if ( true && !currentInstance) {
        warn$2("useContext() called without active instance.");
    }
    var vm = currentInstance;
    return vm._setupContext || (vm._setupContext = createSetupContext(vm));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    var props = isArray(raw)
        ? raw.reduce(function (normalized, p) { return ((normalized[p] = {}), normalized); }, {})
        : raw;
    for (var key in defaults) {
        var opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if (true) {
            warn$2("props default key \"".concat(key, "\" has no corresponding declaration."));
        }
    }
    return props;
}

function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = parentVnode
        ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
        : emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    // @ts-expect-error
    vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    // @ts-expect-error
    vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */
    if (true) {
        defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$listeners is readonly.", vm);
        }, true);
    }
    else {}
}
var currentRenderingInstance = null;
function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);
    Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
    };
    Vue.prototype._render = function () {
        var vm = this;
        var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
        if (_parentVnode && vm._isMounted) {
            vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            if (vm._slotsProxy) {
                syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
            }
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var prevInst = currentInstance;
        var prevRenderInst = currentRenderingInstance;
        var vnode;
        try {
            setCurrentInstance(vm);
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
        }
        catch (e) {
            handleError(e, vm, "render");
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if ( true && vm.$options.renderError) {
                try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                }
                catch (e) {
                    handleError(e, vm, "renderError");
                    vnode = vm._vnode;
                }
            }
            else {
                vnode = vm._vnode;
            }
        }
        finally {
            currentRenderingInstance = prevRenderInst;
            setCurrentInstance(prevInst);
        }
        // if the returned array contains only a single node, allow it
        if (isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
            if ( true && isArray(vnode)) {
                warn$2('Multiple root nodes returned from render function. Render function ' +
                    'should return a single root node.', vm);
            }
            vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode;
    };
}

function ensureCtor(comp, base) {
    if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
}
function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
    }
    if (isDef(factory.resolved)) {
        return factory.resolved;
    }
    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
    }
    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
    }
    if (owner && !isDef(factory.owners)) {
        var owners_1 = (factory.owners = [owner]);
        var sync_1 = true;
        var timerLoading_1 = null;
        var timerTimeout_1 = null;
        owner.$on('hook:destroyed', function () { return remove$2(owners_1, owner); });
        var forceRender_1 = function (renderCompleted) {
            for (var i = 0, l = owners_1.length; i < l; i++) {
                owners_1[i].$forceUpdate();
            }
            if (renderCompleted) {
                owners_1.length = 0;
                if (timerLoading_1 !== null) {
                    clearTimeout(timerLoading_1);
                    timerLoading_1 = null;
                }
                if (timerTimeout_1 !== null) {
                    clearTimeout(timerTimeout_1);
                    timerTimeout_1 = null;
                }
            }
        };
        var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor);
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync_1) {
                forceRender_1(true);
            }
            else {
                owners_1.length = 0;
            }
        });
        var reject_1 = once(function (reason) {
             true &&
                warn$2("Failed to resolve async component: ".concat(String(factory)) +
                    (reason ? "\nReason: ".concat(reason) : ''));
            if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender_1(true);
            }
        });
        var res_1 = factory(resolve, reject_1);
        if (isObject(res_1)) {
            if (isPromise(res_1)) {
                // () => Promise
                if (isUndef(factory.resolved)) {
                    res_1.then(resolve, reject_1);
                }
            }
            else if (isPromise(res_1.component)) {
                res_1.component.then(resolve, reject_1);
                if (isDef(res_1.error)) {
                    factory.errorComp = ensureCtor(res_1.error, baseCtor);
                }
                if (isDef(res_1.loading)) {
                    factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                    if (res_1.delay === 0) {
                        factory.loading = true;
                    }
                    else {
                        // @ts-expect-error NodeJS timeout type
                        timerLoading_1 = setTimeout(function () {
                            timerLoading_1 = null;
                            if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                factory.loading = true;
                                forceRender_1(false);
                            }
                        }, res_1.delay || 200);
                    }
                }
                if (isDef(res_1.timeout)) {
                    // @ts-expect-error NodeJS timeout type
                    timerTimeout_1 = setTimeout(function () {
                        timerTimeout_1 = null;
                        if (isUndef(factory.resolved)) {
                            reject_1( true ? "timeout (".concat(res_1.timeout, "ms)") : 0);
                        }
                    }, res_1.timeout);
                }
            }
        }
        sync_1 = false;
        // return in case resolved synchronously
        return factory.loading ? factory.loadingComp : factory.resolved;
    }
}

function getFirstComponentChild(children) {
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
            }
        }
    }
}

function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}
var target$1;
function add$1(event, fn) {
    target$1.$on(event, fn);
}
function remove$1(event, fn) {
    target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
    var _target = target$1;
    return function onceHandler() {
        var res = fn.apply(null, arguments);
        if (res !== null) {
            _target.$off(event, onceHandler);
        }
    };
}
function updateComponentListeners(vm, listeners, oldListeners) {
    target$1 = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
    target$1 = undefined;
}
function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
            }
        }
        else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
                vm._hasHookEvent = true;
            }
        }
        return vm;
    };
    Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
    };
    Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
        }
        // array of events
        if (isArray(event)) {
            for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                vm.$off(event[i_1], fn);
            }
            return vm;
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
            return vm;
        }
        if (!fn) {
            vm._events[event] = null;
            return vm;
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
            }
        }
        return vm;
    };
    Vue.prototype.$emit = function (event) {
        var vm = this;
        if (true) {
            var lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                    "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                    "Note that HTML attributes are case-insensitive and you cannot use " +
                    "v-on to listen to camelCase events when using in-DOM templates. " +
                    "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
            }
        }
        var cbs = vm._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"".concat(event, "\"");
            for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
        }
        return vm;
    };
}

var activeEffectScope;
var EffectScope = /** @class */ (function () {
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        this.detached = detached;
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    EffectScope.prototype.run = function (fn) {
        if (this.active) {
            var currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if (true) {
            warn$2("cannot run an inactive effect scope.");
        }
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.on = function () {
        activeEffectScope = this;
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.off = function () {
        activeEffectScope = this.parent;
    };
    EffectScope.prototype.stop = function (fromParent) {
        if (this.active) {
            var i = void 0, l = void 0;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].teardown();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                var last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this.active = false;
        }
    };
    return EffectScope;
}());
function effectScope(detached) {
    return new EffectScope(detached);
}
/**
 * @internal
 */
function recordEffectScope(effect, scope) {
    if (scope === void 0) { scope = activeEffectScope; }
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if (true) {
        warn$2("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}

var activeInstance = null;
var isUpdatingChildComponent = false;
function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
        activeInstance = prevActiveInstance;
    };
}
function initLifecycle(vm) {
    var options = vm.$options;
    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._provided = parent ? parent._provided : Object.create(null);
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        }
        else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
            prevEl.__vue__ = null;
        }
        if (vm.$el) {
            vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        var wrapper = vm;
        while (wrapper &&
            wrapper.$vnode &&
            wrapper.$parent &&
            wrapper.$vnode === wrapper.$parent._vnode) {
            wrapper.$parent.$el = wrapper.$el;
            wrapper = wrapper.$parent;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
    };
    Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    };
    Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
            return;
        }
        callHook$1(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove$2(parent.$children, vm);
        }
        // teardown scope. this includes both the render watcher and other
        // watchers created
        vm._scope.stop();
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook$1(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
            vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
            vm.$vnode.parent = null;
        }
    };
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
        // @ts-expect-error invalid type
        vm.$options.render = createEmptyVNode;
        if (true) {
            /* istanbul ignore if */
            if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                vm.$options.el ||
                el) {
                warn$2('You are using the runtime-only build of Vue where the template ' +
                    'compiler is not available. Either pre-compile the templates into ' +
                    'render functions, or use the compiler-included build.', vm);
            }
            else {
                warn$2('Failed to mount component: template or render function not defined.', vm);
            }
        }
    }
    callHook$1(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
        updateComponent = function () {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:".concat(id);
            var endTag = "vue-perf-end:".concat(id);
            mark(startTag);
            var vnode = vm._render();
            mark(endTag);
            measure("vue ".concat(name, " render"), startTag, endTag);
            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure("vue ".concat(name, " patch"), startTag, endTag);
        };
    }
    else {
        updateComponent = function () {
            vm._update(vm._render(), hydrating);
        };
    }
    var watcherOptions = {
        before: function () {
            if (vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, 'beforeUpdate');
            }
        }
    };
    if (true) {
        watcherOptions.onTrack = function (e) { return callHook$1(vm, 'renderTracked', [e]); };
        watcherOptions.onTrigger = function (e) { return callHook$1(vm, 'renderTriggered', [e]); };
    }
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
    hydrating = false;
    // flush buffer for flush: "pre" watchers queued in setup()
    var preWatchers = vm._preWatchers;
    if (preWatchers) {
        for (var i = 0; i < preWatchers.length; i++) {
            preWatchers[i].run();
        }
    }
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook$1(vm, 'mounted');
    }
    return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    if (true) {
        isUpdatingChildComponent = true;
    }
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
        (!newScopedSlots && vm.$scopedSlots.$key));
    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
        vm.$options._renderChildren || // has old static slots
        hasDynamicScopedSlot);
    var prevVNode = vm.$vnode;
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    var attrs = parentVnode.data.attrs || emptyObject;
    if (vm._attrsProxy) {
        // force update if attrs are accessed and has changed since it may be
        // passed to a child component.
        if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
            needsForceUpdate = true;
        }
    }
    vm.$attrs = attrs;
    // update listeners
    listeners = listeners || emptyObject;
    var prevListeners = vm.$options._parentListeners;
    if (vm._listenersProxy) {
        syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
    }
    vm.$listeners = vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, prevListeners);
    // update props
    if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props; // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
    }
    // resolve slots + force update if has children
    if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
    }
    if (true) {
        isUpdatingChildComponent = false;
    }
}
function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
        if (vm._inactive)
            return true;
    }
    return false;
}
function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    else if (vm._directInactive) {
        return;
    }
    if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'activated');
    }
}
function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'deactivated');
    }
}
function callHook$1(vm, hook, args, setContext) {
    if (setContext === void 0) { setContext = true; }
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var prevInst = currentInstance;
    var prevScope = getCurrentScope();
    setContext && setCurrentInstance(vm);
    var handlers = vm.$options[hook];
    var info = "".concat(hook, " hook");
    if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
    }
    if (setContext) {
        setCurrentInstance(prevInst);
        prevScope && prevScope.on();
    }
    popTarget();
}

var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index$1 = 0;
/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
    index$1 = queue.length = activatedChildren.length = 0;
    has = {};
    if (true) {
        circular = {};
    }
    waiting = flushing = false;
}
// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;
// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    var performance_1 = window.performance;
    if (performance_1 &&
        typeof performance_1.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance_1.now(); };
    }
}
var sortCompareFn = function (a, b) {
    if (a.post) {
        if (!b.post)
            return 1;
    }
    else if (b.post) {
        return -1;
    }
    return a.id - b.id;
};
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(sortCompareFn);
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index$1 = 0; index$1 < queue.length; index$1++) {
        watcher = queue[index$1];
        if (watcher.before) {
            watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ( true && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn$2('You may have an infinite update loop ' +
                    (watcher.user
                        ? "in watcher with expression \"".concat(watcher.expression, "\"")
                        : "in a component render function."), watcher.vm);
                break;
            }
        }
    }
    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState();
    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);
    cleanupDeps();
    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit('flush');
    }
}
function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook$1(vm, 'updated');
        }
    }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
}
function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
    }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] != null) {
        return;
    }
    if (watcher === Dep.target && watcher.noRecurse) {
        return;
    }
    has[id] = true;
    if (!flushing) {
        queue.push(watcher);
    }
    else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index$1 && queue[i].id > watcher.id) {
            i--;
        }
        queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
        waiting = true;
        if ( true && !config.async) {
            flushSchedulerQueue();
            return;
        }
        nextTick(flushSchedulerQueue);
    }
}

var WATCHER = "watcher";
var WATCHER_CB = "".concat(WATCHER, " callback");
var WATCHER_GETTER = "".concat(WATCHER, " getter");
var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'post' }) : 0));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'sync' }) : 0));
}
// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if ( true && typeof cb !== 'function') {
        warn$2("`watch(fn, options?)` signature has been moved to a separate API. " +
            "Use `watchEffect(fn, options?)` instead. `watch` now only " +
            "supports `watch(source, cb, options?) signature.");
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, _a) {
    var _b = _a === void 0 ? emptyObject : _a, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? 'pre' : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
    if ( true && !cb) {
        if (immediate !== undefined) {
            warn$2("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (deep !== undefined) {
            warn$2("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var warnInvalidSource = function (s) {
        warn$2("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") +
            "function, a ref, a reactive object, or an array of these types.");
    };
    var instance = currentInstance;
    var call = function (fn, type, args) {
        if (args === void 0) { args = null; }
        var res = invokeWithErrorHandling(fn, null, args, instance, type);
        if (deep && res && res.__ob__)
            res.__ob__.dep.depend();
        return res;
    };
    var getter;
    var forceTrigger = false;
    var isMultiSource = false;
    if (isRef(source)) {
        getter = function () { return source.value; };
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = function () {
            source.__ob__.dep.depend();
            return source;
        };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(function (s) { return isReactive(s) || isShallow(s); });
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    s.__ob__.dep.depend();
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return call(s, WATCHER_GETTER);
                }
                else {
                     true && warnInvalidSource(s);
                }
            });
        };
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = function () { return call(source, WATCHER_GETTER); };
        }
        else {
            // no cb -> simple effect
            getter = function () {
                if (instance && instance._isDestroyed) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return call(source, WATCHER, [onCleanup]);
            };
        }
    }
    else {
        getter = noop;
         true && warnInvalidSource(source);
    }
    if (cb && deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var cleanup;
    var onCleanup = function (fn) {
        cleanup = watcher.onStop = function () {
            call(fn, WATCHER_CLEANUP);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isServerRendering()) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = noop;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            call(cb, WATCHER_CB, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return noop;
    }
    var watcher = new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    watcher.noRecurse = !cb;
    var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    // overwrite default run
    watcher.run = function () {
        if (!watcher.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            var newValue = watcher.get();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some(function (v, i) {
                        return hasChanged(v, oldValue[i]);
                    })
                    : hasChanged(newValue, oldValue))) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                call(cb, WATCHER_CB, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            watcher.get();
        }
    };
    if (flush === 'sync') {
        watcher.update = watcher.run;
    }
    else if (flush === 'post') {
        watcher.post = true;
        watcher.update = function () { return queueWatcher(watcher); };
    }
    else {
        // pre
        watcher.update = function () {
            if (instance && instance === currentInstance && !instance._isMounted) {
                // pre-watcher triggered before
                var buffer = instance._preWatchers || (instance._preWatchers = []);
                if (buffer.indexOf(watcher) < 0)
                    buffer.push(watcher);
            }
            else {
                queueWatcher(watcher);
            }
        };
    }
    if (true) {
        watcher.onTrack = onTrack;
        watcher.onTrigger = onTrigger;
    }
    // initial run
    if (cb) {
        if (immediate) {
            watcher.run();
        }
        else {
            oldValue = watcher.get();
        }
    }
    else if (flush === 'post' && instance) {
        instance.$once('hook:mounted', function () { return watcher.get(); });
    }
    else {
        watcher.get();
    }
    return function () {
        watcher.teardown();
    };
}

function provide(key, value) {
    if (!currentInstance) {
        if (true) {
            warn$2("provide() can only be used inside setup().");
        }
    }
    else {
        // TS doesn't allow symbol as index type
        resolveProvided(currentInstance)[key] = value;
    }
}
function resolveProvided(vm) {
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    var existing = vm._provided;
    var parentProvides = vm.$parent && vm.$parent._provided;
    if (parentProvides === existing) {
        return (vm._provided = Object.create(parentProvides));
    }
    else {
        return existing;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    var instance = currentInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        var provides = instance.$parent && instance.$parent._provided;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue)
                ? defaultValue.call(instance)
                : defaultValue;
        }
        else if (true) {
            warn$2("injection \"".concat(String(key), "\" not found."));
        }
    }
    else if (true) {
        warn$2("inject() can only be used inside setup() or functional components.");
    }
}

/**
 * @internal this function needs manual public type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function h(type, props, children) {
    if (!currentInstance) {
         true &&
            warn$2("globally imported h() can only be invoked when there is an active " +
                "component instance, e.g. synchronously in a component's render or setup function.");
    }
    return createElement$1(currentInstance, type, props, children, 2, true);
}

function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
        if (vm) {
            var cur = vm;
            while ((cur = cur.$parent)) {
                var hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for (var i = 0; i < hooks.length; i++) {
                        try {
                            var capture = hooks[i].call(cur, err, vm, info) === false;
                            if (capture)
                                return;
                        }
                        catch (e) {
                            globalHandleError(e, cur, 'errorCaptured hook');
                        }
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    }
    finally {
        popTarget();
    }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
            res._handled = true;
        }
    }
    catch (e) {
        handleError(e, vm, info);
    }
    return res;
}
function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
        try {
            return config.errorHandler.call(null, err, vm, info);
        }
        catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
                logError(e, null, 'config.errorHandler');
            }
        }
    }
    logError(err, vm, info);
}
function logError(err, vm, info) {
    if (true) {
        warn$2("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

/* globals MutationObserver */
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
        copies[i]();
    }
}
// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;
// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p_1 = Promise.resolve();
    timerFunc = function () {
        p_1.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS)
            setTimeout(noop);
    };
    isUsingMicroTask = true;
}
else if (!isIE &&
    typeof MutationObserver !== 'undefined' &&
    (isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter_1 = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode_1 = document.createTextNode(String(counter_1));
    observer.observe(textNode_1, {
        characterData: true
    });
    timerFunc = function () {
        counter_1 = (counter_1 + 1) % 2;
        textNode_1.data = String(counter_1);
    };
    isUsingMicroTask = true;
}
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
        setImmediate(flushCallbacks);
    };
}
else {
    // Fallback to setTimeout.
    timerFunc = function () {
        setTimeout(flushCallbacks, 0);
    };
}
/**
 * @internal
 */
function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
        if (cb) {
            try {
                cb.call(ctx);
            }
            catch (e) {
                handleError(e, ctx, 'nextTick');
            }
        }
        else if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}

function useCssModule(name) {
    if (name === void 0) { name = '$style'; }
    /* istanbul ignore else */
    {
        if (!currentInstance) {
             true && warn$2("useCssModule must be called inside setup()");
            return emptyObject;
        }
        var mod = currentInstance[name];
        if (!mod) {
             true &&
                warn$2("Current instance does not have CSS module named \"".concat(name, "\"."));
            return emptyObject;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    if (!inBrowser && !false)
        return;
    var instance = currentInstance;
    if (!instance) {
         true &&
            warn$2("useCssVars is called without current active component instance.");
        return;
    }
    watchPostEffect(function () {
        var el = instance.$el;
        var vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            var style = el.style;
            for (var key in vars) {
                style.setProperty("--".concat(key), vars[key]);
            }
        }
    });
}

/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if ( true && suspensible) {
        warn$2("The suspensible option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if ( true && !comp) {
                        warn$2("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if ( true && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent
        };
    };
}

function createLifeCycle(hookName) {
    return function (fn, target) {
        if (target === void 0) { target = currentInstance; }
        if (!target) {
             true &&
                warn$2("".concat(formatName(hookName), " is called when there is no active component instance to be ") +
                    "associated with. " +
                    "Lifecycle injection APIs can only be used during execution of setup().");
            return;
        }
        return injectHook(target, hookName, fn);
    };
}
function formatName(name) {
    if (name === 'beforeDestroy') {
        name = 'beforeUnmount';
    }
    else if (name === 'destroyed') {
        name = 'unmounted';
    }
    return "on".concat(name[0].toUpperCase() + name.slice(1));
}
function injectHook(instance, hookName, fn) {
    var options = instance.$options;
    options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');
var onRenderTracked = createLifeCycle('renderTracked');
var onRenderTriggered = createLifeCycle('renderTriggered');
var injectErrorCapturedHook = createLifeCycle('errorCaptured');
function onErrorCaptured(hook, target) {
    if (target === void 0) { target = currentInstance; }
    injectErrorCapturedHook(hook, target);
}

/**
 * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
 */
var version = '2.7.16';
/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */
function defineComponent(options) {
    return options;
}

var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
    return val;
}
function _traverse(val, seen) {
    var i, keys;
    var isA = isArray(val);
    if ((!isA && !isObject(val)) ||
        val.__v_skip /* ReactiveFlags.SKIP */ ||
        Object.isFrozen(val) ||
        val instanceof VNode) {
        return;
    }
    if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while (i--)
            _traverse(val[i], seen);
    }
    else if (isRef(val)) {
        _traverse(val.value, seen);
    }
    else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--)
            _traverse(val[keys[i]], seen);
    }
}

var uid$1 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 * @internal
 */
var Watcher = /** @class */ (function () {
    function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        recordEffectScope(this, 
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm
            ? activeEffectScope
            : vm
                ? vm._scope
                : undefined);
        if ((this.vm = vm) && isRenderWatcher) {
            vm._watcher = this;
        }
        // options
        if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
            if (true) {
                this.onTrack = options.onTrack;
                this.onTrigger = options.onTrigger;
            }
        }
        else {
            this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$1; // uid for batching
        this.active = true;
        this.post = false;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression =  true ? expOrFn.toString() : 0;
        // parse expression for getter
        if (isFunction(expOrFn)) {
            this.getter = expOrFn;
        }
        else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                 true &&
                    warn$2("Failed watching path: \"".concat(expOrFn, "\" ") +
                        'Watcher only accepts simple dot-delimited paths. ' +
                        'For full control, use a function instead.', vm);
            }
        }
        this.value = this.lazy ? undefined : this.get();
    }
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function () {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        }
        catch (e) {
            if (this.user) {
                handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
            }
            else {
                throw e;
            }
        }
        finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            this.cleanupDeps();
        }
        return value;
    };
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function (dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    };
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function () {
        var i = this.deps.length;
        while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    };
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function () {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true;
        }
        else if (this.sync) {
            this.run();
        }
        else {
            queueWatcher(this);
        }
    };
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function () {
        if (this.active) {
            var value = this.get();
            if (value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep) {
                // set new value
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                    var info = "callback for watcher \"".concat(this.expression, "\"");
                    invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                }
                else {
                    this.cb.call(this.vm, value, oldValue);
                }
            }
        }
    };
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function () {
        this.value = this.get();
        this.dirty = false;
    };
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function () {
        var i = this.deps.length;
        while (i--) {
            this.deps[i].depend();
        }
    };
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function () {
        if (this.vm && !this.vm._isBeingDestroyed) {
            remove$2(this.vm._scope.effects, this);
        }
        if (this.active) {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].removeSub(this);
            }
            this.active = false;
            if (this.onStop) {
                this.onStop();
            }
        }
    };
    return Watcher;
}());

var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
    var opts = vm.$options;
    if (opts.props)
        initProps$1(vm, opts.props);
    // Composition API
    initSetup(vm);
    if (opts.methods)
        initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    }
    else {
        var ob = observe((vm._data = {}));
        ob && ob.vmCount++;
    }
    if (opts.computed)
        initComputed$1(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
function initProps$1(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = (vm._props = shallowReactive({}));
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = (vm.$options._propKeys = []);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false);
    }
    var _loop_1 = function (key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (true) {
            var hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)) {
                warn$2("\"".concat(hyphenatedKey, "\" is a reserved attribute and cannot be used as component prop."), vm);
            }
            defineReactive(props, key, value, function () {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn$2("Avoid mutating a prop directly since the value will be " +
                        "overwritten whenever the parent component re-renders. " +
                        "Instead, use a data or computed property based on the prop's " +
                        "value. Prop being mutated: \"".concat(key, "\""), vm);
                }
            }, true /* shallow */);
        }
        else {}
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, "_props", key);
        }
    };
    for (var key in propsOptions) {
        _loop_1(key);
    }
    toggleObserving(true);
}
function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
         true &&
            warn$2('data functions should return an object:\n' +
                'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
        var key = keys[i];
        if (true) {
            if (methods && hasOwn(methods, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a data property."), vm);
            }
        }
        if (props && hasOwn(props, key)) {
             true &&
                warn$2("The data property \"".concat(key, "\" is already declared as a prop. ") +
                    "Use prop default value instead.", vm);
        }
        else if (!isReserved(key)) {
            proxy(vm, "_data", key);
        }
    }
    // observe data
    var ob = observe(data);
    ob && ob.vmCount++;
}
function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
        return data.call(vm, vm);
    }
    catch (e) {
        handleError(e, vm, "data()");
        return {};
    }
    finally {
        popTarget();
    }
}
var computedWatcherOptions = { lazy: true };
function initComputed$1(vm, computed) {
    // $flow-disable-line
    var watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();
    for (var key in computed) {
        var userDef = computed[key];
        var getter = isFunction(userDef) ? userDef : userDef.get;
        if ( true && getter == null) {
            warn$2("Getter is missing for computed property \"".concat(key, "\"."), vm);
        }
        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        }
        else if (true) {
            if (key in vm.$data) {
                warn$2("The computed property \"".concat(key, "\" is already defined in data."), vm);
            }
            else if (vm.$options.props && key in vm.$options.props) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a prop."), vm);
            }
            else if (vm.$options.methods && key in vm.$options.methods) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a method."), vm);
            }
        }
    }
}
function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (isFunction(userDef)) {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    }
    else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if ( true && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
            warn$2("Computed property \"".concat(key, "\" was assigned to but it has no setter."), this);
        };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
    return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                if ( true && Dep.target.onTrack) {
                    Dep.target.onTrack({
                        effect: Dep.target,
                        target: this,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
        if (true) {
            if (typeof methods[key] !== 'function') {
                warn$2("Method \"".concat(key, "\" has type \"").concat(typeof methods[key], "\" in the component definition. ") +
                    "Did you reference the function correctly?", vm);
            }
            if (props && hasOwn(props, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a prop."), vm);
            }
            if (key in vm && isReserved(key)) {
                warn$2("Method \"".concat(key, "\" conflicts with an existing Vue instance method. ") +
                    "Avoid defining component methods that start with _ or $.");
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind$1(methods[key], vm);
    }
}
function initWatch(vm, watch) {
    for (var key in watch) {
        var handler = watch[key];
        if (isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        }
        else {
            createWatcher(vm, key, handler);
        }
    }
}
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === 'string') {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
        return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
        return this._props;
    };
    if (true) {
        dataDef.set = function () {
            warn$2('Avoid replacing instance root $data. ' +
                'Use nested data properties instead.', this);
        };
        propsDef.set = function () {
            warn$2("$props is readonly.", this);
        };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
            pushTarget();
            invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
            popTarget();
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}

function initProvide(vm) {
    var provideOption = vm.$options.provide;
    if (provideOption) {
        var provided = isFunction(provideOption)
            ? provideOption.call(vm)
            : provideOption;
        if (!isObject(provided)) {
            return;
        }
        var source = resolveProvided(vm);
        // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
        // iterate the keys ourselves.
        var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
        }
    }
}
function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            if (true) {
                defineReactive(vm, key, result[key], function () {
                    warn$2("Avoid mutating an injected value directly since the changes will be " +
                        "overwritten whenever the provided component re-renders. " +
                        "injection being mutated: \"".concat(key, "\""), vm);
                });
            }
            else {}
        });
        toggleObserving(true);
    }
}
function resolveInject(inject, vm) {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === '__ob__')
                continue;
            var provideKey = inject[key].from;
            if (provideKey in vm._provided) {
                result[key] = vm._provided[provideKey];
            }
            else if ('default' in inject[key]) {
                var provideDefault = inject[key].default;
                result[key] = isFunction(provideDefault)
                    ? provideDefault.call(vm)
                    : provideDefault;
            }
            else if (true) {
                warn$2("Injection \"".concat(key, "\" not found"), vm);
            }
        }
        return result;
    }
}

var uid = 0;
function initMixin$1(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        var startTag, endTag;
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            startTag = "vue-perf-start:".concat(vm._uid);
            endTag = "vue-perf-end:".concat(vm._uid);
            mark(startTag);
        }
        // a flag to mark this as a Vue instance without having to do instanceof
        // check
        vm._isVue = true;
        // avoid instances from being observed
        vm.__v_skip = true;
        // effect scope
        vm._scope = new EffectScope(true /* detached */);
        // #13134 edge case where a child component is manually created during the
        // render of a parent component
        vm._scope.parent = undefined;
        vm._scope._vm = true;
        // merge options
        if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options);
        }
        else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        /* istanbul ignore else */
        if (true) {
            initProxy(vm);
        }
        else {}
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook$1(vm, 'created');
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue ".concat(vm._name, " init"), startTag, endTag);
        }
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
function initInternalComponent(vm, options) {
    var opts = (vm.$options = Object.create(vm.constructor.options));
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;
    if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
    }
}
function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions;
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor);
            // update base extend options
            if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) {
                options.components[options.name] = Ctor;
            }
        }
    }
    return options;
}
function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
        if (latest[key] !== sealed[key]) {
            if (!modified)
                modified = {};
            modified[key] = latest[key];
        }
    }
    return modified;
}

function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var _this = this;
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
    }
    else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // @ts-ignore
        parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
        if (!_this.$slots) {
            normalizeScopedSlots(parent, data.scopedSlots, (_this.$slots = resolveSlots(children, parent)));
        }
        return _this.$slots;
    };
    Object.defineProperty(this, 'scopedSlots', {
        enumerable: true,
        get: function () {
            return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
        }
    });
    // support for compiled functional template
    if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
    }
    if (options._scopeId) {
        this._c = function (a, b, c, d) {
            var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
            if (vnode && !isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
            }
            return vnode;
        };
    }
    else {
        this._c = function (a, b, c, d) {
            return createElement$1(contextVm, a, b, c, d, needNormalization);
        };
    }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
        for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
    }
    else {
        if (isDef(data.attrs))
            mergeProps(props, data.attrs);
        if (isDef(data.props))
            mergeProps(props, data.props);
    }
    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);
    if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    }
    else if (isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res;
    }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (true) {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
            renderContext;
    }
    if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
}
function mergeProps(to, from) {
    for (var key in from) {
        to[camelize(key)] = from[key];
    }
}

function getComponentName(options) {
    return options.name || options.__name || options._componentTag;
}
// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
    init: function (vnode, hydrating) {
        if (vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode; // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        }
        else {
            var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    },
    prepatch: function (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = (vnode.componentInstance = oldVnode.componentInstance);
        updateChildComponent(child, options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
    },
    insert: function (vnode) {
        var context = vnode.context, componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook$1(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance);
            }
            else {
                activateChildComponent(componentInstance, true /* direct */);
            }
        }
    },
    destroy: function (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
            }
            else {
                deactivateChildComponent(componentInstance, true /* direct */);
            }
        }
    }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
        return;
    }
    var baseCtor = context.$options._base;
    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
    }
    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
        if (true) {
            warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
        }
        return;
    }
    // async component
    var asyncFactory;
    // @ts-expect-error
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
    }
    data = data || {};
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    // transform component v-model data into props & events
    if (isDef(data.model)) {
        // @ts-expect-error
        transformModel(Ctor.options, data);
    }
    // extract props
    // @ts-expect-error
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);
    // functional component
    // @ts-expect-error
    if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
    }
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;
    // @ts-expect-error
    if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
            data.slot = slot;
        }
    }
    // install component management hooks onto the placeholder node
    installComponentHooks(data);
    // return a placeholder vnode
    // @ts-expect-error
    var name = getComponentName(Ctor.options) || tag;
    var vnode = new VNode(
    // @ts-expect-error
    "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, 
    // @ts-expect-error
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
}
function createComponentInstanceForVnode(
// we know it's MountedComponentVNode but flow doesn't
vnode, 
// activeInstance in lifecycle state
parent) {
    var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        // @ts-expect-error
        if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
        }
    }
}
function mergeHook(f1, f2) {
    var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
    };
    merged._merged = true;
    return merged;
}
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
        if (isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback) {
            on[event] = [callback].concat(existing);
        }
    }
    else {
        on[event] = callback;
    }
}

var warn$2 = noop;
var tip = noop;
var generateComponentTrace; // work around flow check
var formatComponentName;
if (true) {
    var hasConsole_1 = typeof console !== 'undefined';
    var classifyRE_1 = /(?:^|[-_])(\w)/g;
    var classify_1 = function (str) {
        return str.replace(classifyRE_1, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, '');
    };
    warn$2 = function (msg, vm) {
        if (vm === void 0) { vm = currentInstance; }
        var trace = vm ? generateComponentTrace(vm) : '';
        if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
        }
        else if (hasConsole_1 && !config.silent) {
            console.error("[Vue warn]: ".concat(msg).concat(trace));
        }
    };
    tip = function (msg, vm) {
        if (hasConsole_1 && !config.silent) {
            console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
        }
    };
    formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
            return '<Root>';
        }
        var options = isFunction(vm) && vm.cid != null
            ? vm.options
            : vm._isVue
                ? vm.$options || vm.constructor.options
                : vm;
        var name = getComponentName(options);
        var file = options.__file;
        if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
        }
        return ((name ? "<".concat(classify_1(name), ">") : "<Anonymous>") +
            (file && includeFile !== false ? " at ".concat(file) : ''));
    };
    var repeat_1 = function (str, n) {
        var res = '';
        while (n) {
            if (n % 2 === 1)
                res += str;
            if (n > 1)
                str += str;
            n >>= 1;
        }
        return res;
    };
    generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;
            while (vm) {
                if (tree.length > 0) {
                    var last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                        currentRecursiveSequence++;
                        vm = vm.$parent;
                        continue;
                    }
                    else if (currentRecursiveSequence > 0) {
                        tree[tree.length - 1] = [last, currentRecursiveSequence];
                        currentRecursiveSequence = 0;
                    }
                }
                tree.push(vm);
                vm = vm.$parent;
            }
            return ('\n\nfound in\n\n' +
                tree
                    .map(function (vm, i) {
                    return "".concat(i === 0 ? '---> ' : repeat_1(' ', 5 + i * 2)).concat(isArray(vm)
                        ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)")
                        : formatComponentName(vm));
                })
                    .join('\n'));
        }
        else {
            return "\n\n(found in ".concat(formatComponentName(vm), ")");
        }
    };
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */
if (true) {
    strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
            warn$2("option \"".concat(key, "\" can only be used during instance ") +
                'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
    };
}
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from, recursive) {
    if (recursive === void 0) { recursive = true; }
    if (!from)
        return to;
    var key, toVal, fromVal;
    var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!recursive || !hasOwn(to, key)) {
            set(to, key, fromVal);
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
            return parentVal;
        }
        if (!parentVal) {
            return childVal;
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
            return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
        };
    }
    else {
        return function mergedInstanceDataFn() {
            // instance merge
            var instanceData = isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal;
            var defaultData = isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal;
            if (instanceData) {
                return mergeData(instanceData, defaultData);
            }
            else {
                return defaultData;
            }
        };
    }
}
strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
        if (childVal && typeof childVal !== 'function') {
             true &&
                warn$2('The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.', vm);
            return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
    }
    return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */
function mergeLifecycleHook(parentVal, childVal) {
    var res = childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
    return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
        }
    }
    return res;
}
LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeLifecycleHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
         true && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
    }
    else {
        return res;
    }
}
ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    //@ts-expect-error work around
    if (parentVal === nativeWatch)
        parentVal = undefined;
    //@ts-expect-error work around
    if (childVal === nativeWatch)
        childVal = undefined;
    /* istanbul ignore if */
    if (!childVal)
        return Object.create(parentVal || null);
    if (true) {
        assertObjectType(key, childVal, vm);
    }
    if (!parentVal)
        return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key_1 in childVal) {
        var parent_1 = ret[key_1];
        var child = childVal[key_1];
        if (parent_1 && !isArray(parent_1)) {
            parent_1 = [parent_1];
        }
        ret[key_1] = parent_1 ? parent_1.concat(child) : isArray(child) ? child : [child];
    }
    return ret;
};
/**
 * Other object hashes.
 */
strats.props =
    strats.methods =
        strats.inject =
            strats.computed =
                function (parentVal, childVal, vm, key) {
                    if (childVal && "development" !== 'production') {
                        assertObjectType(key, childVal, vm);
                    }
                    if (!parentVal)
                        return childVal;
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    if (childVal)
                        extend(ret, childVal);
                    return ret;
                };
strats.provide = function (parentVal, childVal) {
    if (!parentVal)
        return childVal;
    return function () {
        var ret = Object.create(null);
        mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
        if (childVal) {
            mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
            );
        }
        return ret;
    };
};
/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */
function checkComponents(options) {
    for (var key in options.components) {
        validateComponentName(key);
    }
}
function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
        warn$2('Invalid component name: "' +
            name +
            '". Component names ' +
            'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn$2('Do not use built-in or reserved HTML elements as component ' +
            'id: ' +
            name);
    }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
    var props = options.props;
    if (!props)
        return;
    var res = {};
    var i, val, name;
    if (isArray(props)) {
        i = props.length;
        while (i--) {
            val = props[i];
            if (typeof val === 'string') {
                name = camelize(val);
                res[name] = { type: null };
            }
            else if (true) {
                warn$2('props must be strings when using array syntax.');
            }
        }
    }
    else if (isPlainObject(props)) {
        for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : { type: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"props\": expected an Array or an Object, " +
            "but got ".concat(toRawType(props), "."), vm);
    }
    options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject)
        return;
    var normalized = (options.inject = {});
    if (isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = { from: inject[i] };
        }
    }
    else if (isPlainObject(inject)) {
        for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val)
                ? extend({ from: key }, val)
                : { from: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"inject\": expected an Array or an Object, " +
            "but got ".concat(toRawType(inject), "."), vm);
    }
}
/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives$1(options) {
    var dirs = options.directives;
    if (dirs) {
        for (var key in dirs) {
            var def = dirs[key];
            if (isFunction(def)) {
                dirs[key] = { bind: def, update: def };
            }
        }
    }
}
function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
        warn$2("Invalid value for option \"".concat(name, "\": expected an Object, ") +
            "but got ".concat(toRawType(value), "."), vm);
    }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
    if (true) {
        checkComponents(child);
    }
    if (isFunction(child)) {
        // @ts-expect-error
        child = child.options;
    }
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }
    }
    var options = {};
    var key;
    for (key in parent) {
        mergeField(key);
    }
    for (key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
        return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id))
        return assets[id];
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId))
        return assets[camelizedId];
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId))
        return assets[PascalCaseId];
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ( true && warnMissing && !res) {
        warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
    }
    return res;
}

function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false;
        }
        else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
            }
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    if (true) {
        assertProp(prop, key, value, vm, absent);
    }
    return value;
}
/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
        return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ( true && isObject(def)) {
        warn$2('Invalid default value for prop "' +
            key +
            '": ' +
            'Props with type Object/Array must use a factory function ' +
            'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm &&
        vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined) {
        return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return isFunction(def) && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def;
}
/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
        warn$2('Missing required prop: "' + name + '"', vm);
        return;
    }
    if (value == null && !prop.required) {
        return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
        if (!isArray(type)) {
            type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i], vm);
            expectedTypes.push(assertedType.expectedType || '');
            valid = assertedType.valid;
        }
    }
    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
        warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
    }
    var validator = prop.validator;
    if (validator) {
        if (!validator(value)) {
            warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
    }
}
var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function assertType(value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else {
        try {
            valid = value instanceof type;
        }
        catch (e) {
            warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
            valid = false;
        }
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}
var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (!isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
            return i;
        }
    }
    return -1;
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") +
        " Expected ".concat(expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        isExplicable(typeof value) &&
        !isBoolean(expectedType, receivedType)) {
        message += " with value ".concat(styleValue(value, expectedType));
    }
    message += ", got ".concat(receivedType, " ");
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += "with value ".concat(styleValue(value, receivedType), ".");
    }
    return message;
}
function styleValue(value, type) {
    if (type === 'String') {
        return "\"".concat(value, "\"");
    }
    else if (type === 'Number') {
        return "".concat(Number(value));
    }
    else {
        return "".concat(value);
    }
}
var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable(value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; });
}
function isBoolean() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; });
}

function Vue(options) {
    if ( true && !(this instanceof Vue)) {
        warn$2('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}
//@ts-expect-error Vue has function type
initMixin$1(Vue);
//@ts-expect-error Vue has function type
stateMixin(Vue);
//@ts-expect-error Vue has function type
eventsMixin(Vue);
//@ts-expect-error Vue has function type
lifecycleMixin(Vue);
//@ts-expect-error Vue has function type
renderMixin(Vue);

function initUse(Vue) {
    Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
            return this;
        }
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (isFunction(plugin.install)) {
            plugin.install.apply(plugin, args);
        }
        else if (isFunction(plugin)) {
            plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
    };
}

function initMixin(Vue) {
    Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    };
}

function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
        }
        var name = getComponentName(extendOptions) || getComponentName(Super.options);
        if ( true && name) {
            validateComponentName(name);
        }
        var Sub = function VueComponent(options) {
            this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
            initProps(Sub);
        }
        if (Sub.options.computed) {
            initComputed(Sub);
        }
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
            Sub.options.components[name] = Sub;
        }
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub;
    };
}
function initProps(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
        proxy(Comp.prototype, "_props", key);
    }
}
function initComputed(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
    }
}

function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
        // @ts-expect-error function is not exact same type
        Vue[type] = function (id, definition) {
            if (!definition) {
                return this.options[type + 's'][id];
            }
            else {
                /* istanbul ignore if */
                if ( true && type === 'component') {
                    validateComponentName(id);
                }
                if (type === 'component' && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === 'directive' && isFunction(definition)) {
                    definition = { bind: definition, update: definition };
                }
                this.options[type + 's'][id] = definition;
                return definition;
            }
        };
    });
}

function _getComponentName(opts) {
    return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
    if (isArray(pattern)) {
        return pattern.indexOf(name) > -1;
    }
    else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (isRegExp(pattern)) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode, $vnode = keepAliveInstance.$vnode;
    for (var key in cache) {
        var entry = cache[key];
        if (entry) {
            var name_1 = entry.name;
            if (name_1 && !filter(name_1)) {
                pruneCacheEntry(cache, key, keys, _vnode);
            }
        }
    }
    $vnode.componentOptions.children = undefined;
}
function pruneCacheEntry(cache, key, keys, current) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
        // @ts-expect-error can be undefined
        entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove$2(keys, key);
}
var patternTypes = [String, RegExp, Array];
// TODO defineComponent
var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
    },
    methods: {
        cacheVNode: function () {
            var _a = this, cache = _a.cache, keys = _a.keys, vnodeToCache = _a.vnodeToCache, keyToCache = _a.keyToCache;
            if (vnodeToCache) {
                var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                    name: _getComponentName(componentOptions),
                    tag: tag,
                    componentInstance: componentInstance
                };
                keys.push(keyToCache);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
            }
        }
    },
    created: function () {
        this.cache = Object.create(null);
        this.keys = [];
    },
    destroyed: function () {
        for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
        }
    },
    mounted: function () {
        var _this = this;
        this.cacheVNode();
        this.$watch('include', function (val) {
            pruneCache(_this, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
            pruneCache(_this, function (name) { return !matches(val, name); });
        });
    },
    updated: function () {
        this.cacheVNode();
    },
    render: function () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            var name_2 = _getComponentName(componentOptions);
            var _a = this, include = _a.include, exclude = _a.exclude;
            if (
            // not included
            (include && (!name_2 || !matches(include, name_2))) ||
                // excluded
                (exclude && name_2 && matches(exclude, name_2))) {
                return vnode;
            }
            var _b = this, cache = _b.cache, keys = _b.keys;
            var key = vnode.key == null
                ? // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                        (componentOptions.tag ? "::".concat(componentOptions.tag) : '')
                : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove$2(keys, key);
                keys.push(key);
            }
            else {
                // delay setting the cache until update
                this.vnodeToCache = vnode;
                this.keyToCache = key;
            }
            // @ts-expect-error can vnode.data can be undefined
            vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0]);
    }
};

var builtInComponents = {
    KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    if (true) {
        configDef.set = function () {
            warn$2('Do not replace the Vue.config object, set individual fields instead.');
        };
    }
    Object.defineProperty(Vue, 'config', configDef);
    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
        warn: warn$2,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    // 2.6 explicit observable API
    Vue.observable = function (obj) {
        observe(obj);
        return obj;
    };
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
    });
    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext;
    }
});
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
});
Vue.version = version;

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');
// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
    return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video'));
};
var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        : // allow arbitrary string value for contenteditable
            key === 'contenteditable' && isValidContentEditableValue(value)
                ? value
                : 'true';
};
var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';
var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};
var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
};
var isFalsyAttrValue = function (val) {
    return val == null || val === false;
};

function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
        }
    }
    // @ts-expect-error parentNode.parent not VNodeWithData
    while (isDef((parentNode = parentNode.parent))) {
        if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
        }
    }
    return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
}
function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
}
function concat(a, b) {
    return a ? (b ? a + ' ' + b : a) : b || '';
}
function stringifyClass(value) {
    if (Array.isArray(value)) {
        return stringifyArray(value);
    }
    if (isObject(value)) {
        return stringifyObject(value);
    }
    if (typeof value === 'string') {
        return value;
    }
    /* istanbul ignore next */
    return '';
}
function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
        if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
            if (res)
                res += ' ';
            res += stringified;
        }
    }
    return res;
}
function stringifyObject(value) {
    var res = '';
    for (var key in value) {
        if (value[key]) {
            if (res)
                res += ' ';
            res += key;
        }
    }
    return res;
}

var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot');
// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isPreTag = function (tag) { return tag === 'pre'; };
var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
    if (isSVG(tag)) {
        return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
        return 'math';
    }
}
var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
        return true;
    }
    if (isReservedTag(tag)) {
        return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
        // https://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] =
            el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement);
    }
    else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
    }
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
             true && warn$2('Cannot find element: ' + el);
            return document.createElement('div');
        }
        return selected;
    }
    else {
        return el;
    }
}

function createElement(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
        return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data &&
        vnode.data.attrs &&
        vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
    }
    return elm;
}
function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

var ref = {
    create: function (_, vnode) {
        registerRef(vnode);
    },
    update: function (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
        }
    },
    destroy: function (vnode) {
        registerRef(vnode, true);
    }
};
function registerRef(vnode, isRemoval) {
    var ref = vnode.data.ref;
    if (!isDef(ref))
        return;
    var vm = vnode.context;
    var refValue = vnode.componentInstance || vnode.elm;
    var value = isRemoval ? null : refValue;
    var $refsValue = isRemoval ? undefined : refValue;
    if (isFunction(ref)) {
        invokeWithErrorHandling(ref, vm, [value], vm, "template ref function");
        return;
    }
    var isFor = vnode.data.refInFor;
    var _isString = typeof ref === 'string' || typeof ref === 'number';
    var _isRef = isRef(ref);
    var refs = vm.$refs;
    if (_isString || _isRef) {
        if (isFor) {
            var existing = _isString ? refs[ref] : ref.value;
            if (isRemoval) {
                isArray(existing) && remove$2(existing, refValue);
            }
            else {
                if (!isArray(existing)) {
                    if (_isString) {
                        refs[ref] = [refValue];
                        setSetupRef(vm, ref, refs[ref]);
                    }
                    else {
                        ref.value = [refValue];
                    }
                }
                else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                }
            }
        }
        else if (_isString) {
            if (isRemoval && refs[ref] !== refValue) {
                return;
            }
            refs[ref] = $refsValue;
            setSetupRef(vm, ref, value);
        }
        else if (_isRef) {
            if (isRemoval && ref.value !== refValue) {
                return;
            }
            ref.value = value;
        }
        else if (true) {
            warn$2("Invalid template ref type: ".concat(typeof ref));
        }
    }
}
function setSetupRef(_a, key, val) {
    var _setupState = _a._setupState;
    if (_setupState && hasOwn(_setupState, key)) {
        if (isRef(_setupState[key])) {
            _setupState[key].value = val;
        }
        else {
            _setupState[key] = val;
        }
    }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
function sameVnode(a, b) {
    return (a.key === b.key &&
        a.asyncFactory === b.asyncFactory &&
        ((a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)) ||
            (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
}
function sameInputType(a, b) {
    if (a.tag !== 'input')
        return true;
    var i;
    var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key))
            map[key] = i;
    }
    return map;
}
function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules, nodeOps = backend.nodeOps;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
        }
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        function remove() {
            if (--remove.listeners === 0) {
                removeNode(childElm);
            }
        }
        remove.listeners = listeners;
        return remove;
    }
    function removeNode(el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
        }
    }
    function isUnknownElement(vnode, inVPre) {
        return (!inVPre &&
            !vnode.ns &&
            !(config.ignoredElements.length &&
                config.ignoredElements.some(function (ignore) {
                    return isRegExp(ignore)
                        ? ignore.test(vnode.tag)
                        : ignore === vnode.tag;
                })) &&
            config.isUnknownElement(vnode.tag));
    }
    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
            if (true) {
                if (data && data.pre) {
                    creatingElmInVPre++;
                }
                if (isUnknownElement(vnode, creatingElmInVPre)) {
                    warn$2('Unknown custom element: <' +
                        tag +
                        '> - did you ' +
                        'register the component correctly? For recursive components, ' +
                        'make sure to provide the "name" option.', vnode.context);
                }
            }
            vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
            if ( true && data && data.pre) {
                creatingElmInVPre--;
            }
        }
        else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
        else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
    }
    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(vnode, false /* hydrating */);
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
            }
        }
    }
    function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
        }
        else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode);
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode);
        }
    }
    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;
            if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                    cbs.activate[i](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
            }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
    }
    function insert(parent, elm, ref) {
        if (isDef(parent)) {
            if (isDef(ref)) {
                if (nodeOps.parentNode(ref) === parent) {
                    nodeOps.insertBefore(parent, elm, ref);
                }
            }
            else {
                nodeOps.appendChild(parent, elm);
            }
        }
    }
    function createChildren(vnode, children, insertedVnodeQueue) {
        if (isArray(children)) {
            if (true) {
                checkDuplicateKeys(children);
            }
            for (var i_1 = 0; i_1 < children.length; ++i_1) {
                createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
            }
        }
        else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
    }
    function isPatchable(vnode) {
        while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
    }
    function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
            cbs.create[i_2](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
            if (isDef(i.create))
                i.create(emptyNode, vnode);
            if (isDef(i.insert))
                insertedVnodeQueue.push(vnode);
        }
    }
    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
        var i;
        if (isDef((i = vnode.fnScopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
        else {
            var ancestor = vnode;
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef((i = activeInstance)) &&
            i !== vnode.context &&
            i !== vnode.fnContext &&
            isDef((i = i.$options._scopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
    }
    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
        }
        if (isDef((i = vnode.children))) {
            for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j]);
            }
        }
    }
    function removeVnodes(vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                }
                else {
                    // Text node
                    removeNode(ch.elm);
                }
            }
        }
    }
    function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
            var i_3;
            var listeners = cbs.remove.length + 1;
            if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners;
            }
            else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners);
            }
            // recursively invoke hooks on child component root node
            if (isDef((i_3 = vnode.componentInstance)) &&
                isDef((i_3 = i_3._vnode)) &&
                isDef(i_3.data)) {
                removeAndInvokeRemoveHook(i_3, rm);
            }
            for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                cbs.remove[i_3](vnode, rm);
            }
            if (isDef((i_3 = vnode.data.hook)) && isDef((i_3 = i_3.remove))) {
                i_3(vnode, rm);
            }
            else {
                rm();
            }
        }
        else {
            removeNode(vnode.elm);
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
        if (true) {
            checkDuplicateKeys(newCh);
        }
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (isUndef(oldKeyToIdx))
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key)
                    ? oldKeyToIdx[newStartVnode.key]
                    : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                    // New element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
                else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                        oldCh[idxInOld] = undefined;
                        canMove &&
                            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    }
                    else {
                        // same key but different element. treat as new element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function checkDuplicateKeys(children) {
        var seenKeys = {};
        for (var i_4 = 0; i_4 < children.length; i_4++) {
            var vnode = children[i_4];
            var key = vnode.key;
            if (isDef(key)) {
                if (seenKeys[key]) {
                    warn$2("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                }
                else {
                    seenKeys[key] = true;
                }
            }
        }
    }
    function findIdxInOld(node, oldCh, start, end) {
        for (var i_5 = start; i_5 < end; i_5++) {
            var c = oldCh[i_5];
            if (isDef(c) && sameVnode(node, c))
                return i_5;
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
        if (oldVnode === vnode) {
            return;
        }
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        var elm = (vnode.elm = oldVnode.elm);
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            }
            else {
                vnode.isAsyncPlaceholder = true;
            }
            return;
        }
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
            isTrue(oldVnode.isStatic) &&
            vnode.key === oldVnode.key &&
            (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
        }
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
            i(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            if (isDef((i = data.hook)) && isDef((i = i.update)))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
            else if (isDef(ch)) {
                if (true) {
                    checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text))
                    nodeOps.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                i(oldVnode, vnode);
        }
    }
    function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
        }
        else {
            for (var i_6 = 0; i_6 < queue.length; ++i_6) {
                queue[i_6].data.hook.insert(queue[i_6]);
            }
        }
    }
    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag, data = vnode.data, children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
        }
        // assert node match
        if (true) {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
            }
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.init)))
                i(vnode, true /* hydrating */);
            if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
            }
        }
        if (isDef(tag)) {
            if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                    createChildren(vnode, children, insertedVnodeQueue);
                }
                else {
                    // v-html and domProps: innerHTML
                    if (isDef((i = data)) &&
                        isDef((i = i.domProps)) &&
                        isDef((i = i.innerHTML))) {
                        if (i !== elm.innerHTML) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('server innerHTML: ', i);
                                console.warn('client innerHTML: ', elm.innerHTML);
                            }
                            return false;
                        }
                    }
                    else {
                        // iterate and compare children lists
                        var childrenMatch = true;
                        var childNode = elm.firstChild;
                        for (var i_7 = 0; i_7 < children.length; i_7++) {
                            if (!childNode ||
                                !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                                childrenMatch = false;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                            }
                            return false;
                        }
                    }
                }
            }
            if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                    if (!isRenderedModule(key)) {
                        fullInvoke = true;
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        break;
                    }
                }
                if (!fullInvoke && data['class']) {
                    // ensure collecting deps for deep class bindings for future updates
                    traverse(data['class']);
                }
            }
        }
        else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
        }
        return true;
    }
    function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
            return (vnode.tag.indexOf('vue-component') === 0 ||
                (!isUnknownElement(vnode, inVPre) &&
                    vnode.tag.toLowerCase() ===
                        (node.tagName && node.tagName.toLowerCase())));
        }
        else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
        }
    }
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
            if (isDef(oldVnode))
                invokeDestroyHook(oldVnode);
            return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
        }
        else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            }
            else {
                if (isRealElement) {
                    // mounting to a real element
                    // check if this is server-rendered content and if we can perform
                    // a successful hydration.
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                        oldVnode.removeAttribute(SSR_ATTR);
                        hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                            invokeInsertHook(vnode, insertedVnodeQueue, true);
                            return oldVnode;
                        }
                        else if (true) {
                            warn$2('The client-side rendered virtual DOM tree is not matching ' +
                                'server-rendered content. This is likely caused by incorrect ' +
                                'HTML markup, for example nesting block-level elements inside ' +
                                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                'full client-side render.');
                        }
                    }
                    // either not server-rendered, or hydration failed.
                    // create an empty node and replace it
                    oldVnode = emptyNodeAt(oldVnode);
                }
                // replacing existing element
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps.parentNode(oldElm);
                // create new node
                createElm(vnode, insertedVnodeQueue, 
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                    var ancestor = vnode.parent;
                    var patchable = isPatchable(vnode);
                    while (ancestor) {
                        for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                            cbs.destroy[i_8](ancestor);
                        }
                        ancestor.elm = vnode.elm;
                        if (patchable) {
                            for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                                cbs.create[i_9](emptyNode, ancestor);
                            }
                            // #6513
                            // invoke insert hooks that may have been merged by create hooks.
                            // e.g. for directives that uses the "inserted" hook.
                            var insert_1 = ancestor.data.hook.insert;
                            if (insert_1.merged) {
                                // start at index 1 to avoid re-invoking component mounted hook
                                // clone insert hooks to avoid being mutated during iteration.
                                // e.g. for customed directives under transition group.
                                var cloned = insert_1.fns.slice(1);
                                for (var i_10 = 0; i_10 < cloned.length; i_10++) {
                                    cloned[i_10]();
                                }
                            }
                        }
                        else {
                            registerRef(ancestor);
                        }
                        ancestor = ancestor.parent;
                    }
                }
                // destroy old node
                if (isDef(parentElm)) {
                    removeVnodes([oldVnode], 0, 0);
                }
                else if (isDef(oldVnode.tag)) {
                    invokeDestroyHook(oldVnode);
                }
            }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
    };
}

var directives$1 = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
        // @ts-expect-error emptyNode is not VNodeWithData
        updateDirectives(vnode, emptyNode);
    }
};
function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
    }
}
function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;
    for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
            }
        }
        else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, 'update', vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
            }
        }
    }
    if (dirsWithInsert.length) {
        var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
        };
        if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
        }
        else {
            callInsert();
        }
    }
    if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
            }
        });
    }
    if (!isCreate) {
        for (key in oldDirs) {
            if (!newDirs[key]) {
                // no longer present, unbind
                callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
            }
        }
    }
}
var emptyModifiers = Object.create(null);
function normalizeDirectives(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
        // $flow-disable-line
        return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        if (vm._setupState && vm._setupState.__sfc) {
            var setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
            if (typeof setupDef === 'function') {
                dir.def = {
                    bind: setupDef,
                    update: setupDef,
                };
            }
            else {
                dir.def = setupDef;
            }
        }
        dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
}
function getRawDirName(dir) {
    return (dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join('.')));
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
        try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        }
        catch (e) {
            handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
        }
    }
}

var baseModules = [ref, directives$1];

function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
        attrs = vnode.data.attrs = extend({}, attrs);
    }
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            setAttr(elm, key, cur, vnode.data.pre);
        }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
            if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            }
            else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
            }
        }
    }
}
function setAttr(el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
    }
    else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
        }
        else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
            el.setAttribute(key, value);
        }
    }
    else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
    }
    else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        baseSetAttr(el, key, value);
    }
}
function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
    }
    else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE &&
            !isIE9 &&
            el.tagName === 'TEXTAREA' &&
            key === 'placeholder' &&
            value !== '' &&
            !el.__ieph) {
            var blocker_1 = function (e) {
                e.stopImmediatePropagation();
                el.removeEventListener('input', blocker_1);
            };
            el.addEventListener('input', blocker_1);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
    }
}
var attrs = {
    create: updateAttrs,
    update: updateAttrs
};

function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) &&
        isUndef(data.class) &&
        (isUndef(oldData) ||
            (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
        return;
    }
    var cls = genClassForVnode(vnode);
    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
    }
    // set the class
    if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
    }
}
var klass$1 = {
    create: updateClass,
    update: updateClass
};

var validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;
    for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5c)
                inSingle = false;
        }
        else if (inDouble) {
            if (c === 0x22 && prev !== 0x5c)
                inDouble = false;
        }
        else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5c)
                inTemplateString = false;
        }
        else if (inRegex) {
            if (c === 0x2f && prev !== 0x5c)
                inRegex = false;
        }
        else if (c === 0x7c && // pipe
            exp.charCodeAt(i + 1) !== 0x7c &&
            exp.charCodeAt(i - 1) !== 0x7c &&
            !curly &&
            !square &&
            !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            }
            else {
                pushFilter();
            }
        }
        else {
            switch (c) {
                case 0x22:
                    inDouble = true;
                    break; // "
                case 0x27:
                    inSingle = true;
                    break; // '
                case 0x60:
                    inTemplateString = true;
                    break; // `
                case 0x28:
                    paren++;
                    break; // (
                case 0x29:
                    paren--;
                    break; // )
                case 0x5b:
                    square++;
                    break; // [
                case 0x5d:
                    square--;
                    break; // ]
                case 0x7b:
                    curly++;
                    break; // {
                case 0x7d:
                    curly--;
                    break; // }
            }
            if (c === 0x2f) {
                // /
                var j = i - 1;
                var p 
                // find first non-whitespace prev char
                = void 0;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                    p = exp.charAt(j);
                    if (p !== ' ')
                        break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                    inRegex = true;
                }
            }
        }
    }
    if (expression === undefined) {
        expression = exp.slice(0, i).trim();
    }
    else if (lastFilterIndex !== 0) {
        pushFilter();
    }
    function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }
    if (filters) {
        for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i]);
        }
    }
    return expression;
}
function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
        // _f: resolveFilter
        return "_f(\"".concat(filter, "\")(").concat(exp, ")");
    }
    else {
        var name_1 = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return "_f(\"".concat(name_1, "\")(").concat(exp).concat(args !== ')' ? ',' + args : args);
    }
}

/* eslint-disable no-unused-vars */
function baseWarn(msg, range) {
    console.error("[Vue compiler]: ".concat(msg));
}
/* eslint-enable no-unused-vars */
function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; }) : [];
}
function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic
        ? el.dynamicAttrs || (el.dynamicAttrs = [])
        : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}
function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
        name: name,
        rawName: rawName,
        value: value,
        arg: arg,
        isDynamicArg: isDynamicArg,
        modifiers: modifiers
    }, range));
    el.plain = false;
}
function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(".concat(name, ",\"").concat(symbol, "\")") : symbol + name; // mark the event as captured
}
function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ( true && warn && modifiers.prevent && modifiers.passive) {
        warn("passive and prevent can't be used together. " +
            "Passive handler can't prevent default event.", range);
    }
    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'contextmenu';
            delete modifiers.right;
        }
    }
    else if (modifiers.middle) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'mouseup';
        }
    }
    // check capture modifier
    if (modifiers.capture) {
        delete modifiers.capture;
        name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
        delete modifiers.once;
        name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
        delete modifiers.passive;
        name = prependModifierMarker('&', name, dynamic);
    }
    var events;
    if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
    }
    else {
        events = el.events || (el.events = {});
    }
    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
        newHandler.modifiers = modifiers;
    }
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    }
    else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    }
    else {
        events[name] = newHandler;
    }
    el.plain = false;
}
function getRawBindingAttr(el, name) {
    return (el.rawAttrsMap[':' + name] ||
        el.rawAttrsMap['v-bind:' + name] ||
        el.rawAttrsMap[name]);
}
function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
        return parseFilters(dynamicValue);
    }
    else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
            return JSON.stringify(staticValue);
        }
    }
}
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
                list.splice(i, 1);
                break;
            }
        }
    }
    if (removeFromMap) {
        delete el.attrsMap[name];
    }
    return val;
}
function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
        var attr = list[i];
        if (name.test(attr.name)) {
            list.splice(i, 1);
            return attr;
        }
    }
}
function rangeSetItem(item, range) {
    if (range) {
        if (range.start != null) {
            item.start = range.start;
        }
        if (range.end != null) {
            item.end = range.end;
        }
    }
    return item;
}

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
    var _a = modifiers || {}, number = _a.number, trim = _a.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
        valueExpression =
            "(typeof ".concat(baseValueExpression, " === 'string'") +
                "? ".concat(baseValueExpression, ".trim()") +
                ": ".concat(baseValueExpression, ")");
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
        value: "(".concat(value, ")"),
        expression: JSON.stringify(value),
        callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
    };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
        return "".concat(value, "=").concat(assignment);
    }
    else {
        return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
    }
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
var len, str, chr, index, expressionPos, expressionEndPos;
function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;
    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index = val.lastIndexOf('.');
        if (index > -1) {
            return {
                exp: val.slice(0, index),
                key: '"' + val.slice(index + 1) + '"'
            };
        }
        else {
            return {
                exp: val,
                key: null
            };
        }
    }
    str = val;
    index = expressionPos = expressionEndPos = 0;
    while (!eof()) {
        chr = next();
        /* istanbul ignore if */
        if (isStringStart(chr)) {
            parseString(chr);
        }
        else if (chr === 0x5b) {
            parseBracket(chr);
        }
    }
    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    };
}
function next() {
    return str.charCodeAt(++index);
}
function eof() {
    return index >= len;
}
function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
}
function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index;
    while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
            parseString(chr);
            continue;
        }
        if (chr === 0x5b)
            inBracket++;
        if (chr === 0x5d)
            inBracket--;
        if (inBracket === 0) {
            expressionEndPos = index;
            break;
        }
    }
}
function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
        chr = next();
        if (chr === stringQuote) {
            break;
        }
    }
}

var warn$1;
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
function model$1(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    if (true) {
        // inputs with type="file" are read only and setting the input's
        // value will throw an error.
        if (tag === 'input' && type === 'file') {
            warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\" type=\"file\">:\n") +
                "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
        }
    }
    if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (tag === 'select') {
        genSelect(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'checkbox') {
        genCheckboxModel(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'radio') {
        genRadioModel(el, value, modifiers);
    }
    else if (tag === 'input' || tag === 'textarea') {
        genDefaultModel(el, value, modifiers);
    }
    else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (true) {
        warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
            "v-model is not supported on this element type. " +
            "If you are working with contenteditable, it's recommended to " +
            'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    }
    // ensure runtime directive metadata
    return true;
}
function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(".concat(value, ")") +
        "?_i(".concat(value, ",").concat(valueBinding, ")>-1") +
        (trueValueBinding === 'true'
            ? ":(".concat(value, ")")
            : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
    addHandler(el, 'change', "var $$a=".concat(value, ",") +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") +
        'if(Array.isArray($$a)){' +
        "var $$v=".concat(number ? '_n(' + valueBinding + ')' : valueBinding, ",") +
        '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, '$$a.concat([$$v])'), ")}") +
        "else{$$i>-1&&(".concat(genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ")}") +
        "}else{".concat(genAssignmentCode(value, '$$c'), "}"), null, true);
}
function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
    addProp(el, 'checked', "_q(".concat(value, ",").concat(valueBinding, ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}
function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
        "return ".concat(number ? '_n(val)' : 'val', "})");
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = ".concat(selectedVal, ";");
    code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
}
function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;
    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    if (true) {
        var value_1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
        var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
        if (value_1 && !typeBinding) {
            var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
            warn$1("".concat(binding, "=\"").concat(value_1, "\" conflicts with v-model on the same element ") +
                'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
        }
    }
    var _a = modifiers || {}, lazy = _a.lazy, number = _a.number, trim = _a.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';
    if (trim) {
        valueExpression = "$event.target.value.trim()";
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
        code = "if($event.target.composing)return;".concat(code);
    }
    addProp(el, 'value', "(".concat(value, ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
        addHandler(el, 'blur', '$forceUpdate()');
    }
}

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event_1 = isIE ? 'change' : 'input';
        on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
        delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
var target;
function createOnceHandler(event, handler, capture) {
    var _target = target; // save current target element in closure
    return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
            remove(event, onceHandler, capture, _target);
        }
    };
}
// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
        var attachedTimestamp_1 = currentFlushTimestamp;
        var original_1 = handler;
        //@ts-expect-error
        handler = original_1._wrapper = function (e) {
            if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
                // event is fired after handler attachment
                e.timeStamp >= attachedTimestamp_1 ||
                // bail for environments that have buggy event.timeStamp implementations
                // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                // #9681 QtWebEngine event.timeStamp is negative value
                e.timeStamp <= 0 ||
                // #9448 bail if event is fired in another document in a multi-page
                // electron/nw.js app, since event.timeStamp will be using a different
                // starting reference
                e.target.ownerDocument !== document) {
                return original_1.apply(this, arguments);
            }
        };
    }
    target.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}
function remove(name, handler, capture, _target) {
    (_target || target).removeEventListener(name, 
    //@ts-expect-error
    handler._wrapper || handler, capture);
}
function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    // vnode is empty when removing all listeners,
    // and use old vnode dom element
    target = vnode.elm || oldVnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
    target = undefined;
}
var events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
    // @ts-expect-error emptyNode has actually data
    destroy: function (vnode) { return updateDOMListeners(vnode, emptyNode); }
};

var svgContainer;
function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
        props = vnode.data.domProps = extend({}, props);
    }
    for (key in oldProps) {
        if (!(key in props)) {
            elm[key] = '';
        }
    }
    for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children)
                vnode.children.length = 0;
            if (cur === oldProps[key])
                continue;
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
            }
        }
        if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur;
            // avoid resetting cursor position when value is the same
            var strCur = isUndef(cur) ? '' : String(cur);
            if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
            }
        }
        else if (key === 'innerHTML' &&
            isSVG(elm.tagName) &&
            isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div');
            svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
            var svg = svgContainer.firstChild;
            while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
            }
            while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
            }
        }
        else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
                elm[key] = cur;
            }
            catch (e) { }
        }
    }
}
function shouldUpdateValue(elm, checkVal) {
    return (
    //@ts-expect-error
    !elm.composing &&
        (elm.tagName === 'OPTION' ||
            isNotInFocusAndDirty(elm, checkVal) ||
            isDirtyWithModifiers(elm, checkVal)));
}
function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
        notInFocus = document.activeElement !== elm;
    }
    catch (e) { }
    return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
        if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
            return value.trim() !== newVal.trim();
        }
    }
    return value !== newVal;
}
var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
};

var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;
    if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;
            if (childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
            }
        }
    }
    if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
    }
    var parentNode = vnode;
    // @ts-expect-error parentNode.parent not VNodeWithData
    while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
        }
    }
    return res;
}

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
    }
    else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    }
    else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i];
            }
        }
        else {
            el.style[normalizedName] = val;
        }
    }
};
var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
        return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
        var name_1 = vendorNames[i] + capName;
        if (name_1 in emptyStyle) {
            return name_1;
        }
    }
});
function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticStyle) &&
        isUndef(data.style) &&
        isUndef(oldData.staticStyle) &&
        isUndef(oldData.style)) {
        return;
    }
    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {};
    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);
    for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
            setProp(el, name, '');
        }
    }
    for (name in newStyle) {
        cur = newStyle[name];
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
    }
}
var style$1 = {
    create: updateStyle,
    update: updateStyle
};

var whitespaceRE$1 = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.add(c); });
        }
        else {
            el.classList.add(cls);
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.remove(c); });
        }
        else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        }
        else {
            el.removeAttribute('class');
        }
    }
}

function resolveTransition(def) {
    if (!def) {
        return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
            extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
    }
    else if (typeof def === 'string') {
        return autoCssTransition(def);
    }
}
var autoCssTransition = cached(function (name) {
    return {
        enterClass: "".concat(name, "-enter"),
        enterToClass: "".concat(name, "-enter-to"),
        enterActiveClass: "".concat(name, "-enter-active"),
        leaveClass: "".concat(name, "-leave"),
        leaveToClass: "".concat(name, "-leave-to"),
        leaveActiveClass: "".concat(name, "-leave-active")
    };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';
// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
    }
}
// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
    ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
    : /* istanbul ignore next */ function (/* istanbul ignore next */ fn) { return fn(); };
function nextFrame(fn) {
    raf(function () {
        // @ts-expect-error
        raf(fn);
    });
}
function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}
function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
        remove$2(el._transitionClasses, cls);
    }
    removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
    var _a = getTransitionInfo(el, expectedType), type = _a.type, timeout = _a.timeout, propCount = _a.propCount;
    if (!type)
        return cb();
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
    };
    var onEnd = function (e) {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(function () {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
    }));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function enter(vnode, toggleDisplay) {
    var el = vnode.elm;
    // call leave callback now
    if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
        return;
    }
    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
    }
    var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
    }
    var isAppear = !context._isMounted || !vnode.isRootInsert;
    if (isAppear && !appear && appear !== '') {
        return;
    }
    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear
        ? appearCancelled || enterCancelled
        : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
    if ( true && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
    }
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = (el._enterCb = once(function () {
        if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
        }
        else {
            afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
    }));
    if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
        });
    }
    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
            removeTransitionClass(el, startClass);
            // @ts-expect-error
            if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) {
                        setTimeout(cb, explicitEnterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, cb);
                    }
                }
            }
        });
    }
    if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
    }
    if (!expectsCSS && !userWantsControl) {
        cb();
    }
}
function leave(vnode, rm) {
    var el = vnode.elm;
    // call enter callback now
    if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
        return rm();
    }
    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
        return;
    }
    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
    if ( true && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
    }
    var cb = (el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
        }
        else {
            rm();
            afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
    }));
    if (delayLeave) {
        delayLeave(performLeave);
    }
    else {
        performLeave();
    }
    function performLeave() {
        // the delayed leave may have already been cancelled
        // @ts-expect-error
        if (cb.cancelled) {
            return;
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
                removeTransitionClass(el, leaveClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitLeaveDuration)) {
                            setTimeout(cb, explicitLeaveDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
            cb();
        }
    }
}
// only used in dev mode
function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
        warn$2("<transition> explicit ".concat(name, " duration is not a valid number - ") +
            "got ".concat(JSON.stringify(val), "."), vnode.context);
    }
    else if (isNaN(val)) {
        warn$2("<transition> explicit ".concat(name, " duration is NaN - ") +
            'the duration expression might be incorrect.', vnode.context);
    }
}
function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
        return false;
    }
    // @ts-expect-error
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    }
    else {
        // @ts-expect-error
        return (fn._length || fn.length) > 1;
    }
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) {
        enter(vnode);
    }
}
var transition = inBrowser
    ? {
        create: _enter,
        activate: _enter,
        remove: function (vnode, rm) {
            /* istanbul ignore else */
            if (vnode.data.show !== true) {
                // @ts-expect-error
                leave(vnode, rm);
            }
            else {
                rm();
            }
        }
    }
    : {};

var platformModules = [attrs, klass$1, events, domProps, style$1, transition];

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules$1 = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules$1 });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
/* istanbul ignore if */
if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        // @ts-expect-error
        if (el && el.vmodel) {
            trigger(el, 'input');
        }
    });
}
var directive = {
    inserted: function (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, 'postpatch', function () {
                    directive.componentUpdated(el, binding, vnode);
                });
            }
            else {
                setSelected(el, binding, vnode.context);
            }
            el._vOptions = [].map.call(el.options, getValue);
        }
        else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
                el.addEventListener('compositionstart', onCompositionStart);
                el.addEventListener('compositionend', onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener('change', onCompositionEnd);
                /* istanbul ignore if */
                if (isIE9) {
                    el.vmodel = true;
                }
            }
        }
    },
    componentUpdated: function (el, binding, vnode) {
        if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context);
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var prevOptions_1 = el._vOptions;
            var curOptions_1 = (el._vOptions = [].map.call(el.options, getValue));
            if (curOptions_1.some(function (o, i) { return !looseEqual(o, prevOptions_1[i]); })) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                    ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions_1); })
                    : binding.value !== binding.oldValue &&
                        hasNoMatchingOption(binding.value, curOptions_1);
                if (needReset) {
                    trigger(el, 'change');
                }
            }
        }
    }
};
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
        setTimeout(function () {
            actuallySetSelected(el, binding, vm);
        }, 0);
    }
}
function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
         true &&
            warn$2("<select multiple v-model=\"".concat(binding.expression, "\"> ") +
                "expects an Array value for its binding, but got ".concat(Object.prototype.toString
                    .call(value)
                    .slice(8, -1)), vm);
        return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
                option.selected = selected;
            }
        }
        else {
            if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                    el.selectedIndex = i;
                }
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
function hasNoMatchingOption(value, options) {
    return options.every(function (o) { return !looseEqual(o, value); });
}
function getValue(option) {
    return '_value' in option ? option._value : option.value;
}
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing)
        return;
    e.target.composing = false;
    trigger(e.target, 'input');
}
function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
    // @ts-expect-error
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode;
}
var show = {
    bind: function (el, _a, vnode) {
        var value = _a.value;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        var originalDisplay = (el.__vOriginalDisplay =
            el.style.display === 'none' ? '' : el.style.display);
        if (value && transition) {
            vnode.data.show = true;
            enter(vnode, function () {
                el.style.display = originalDisplay;
            });
        }
        else {
            el.style.display = value ? originalDisplay : 'none';
        }
    },
    update: function (el, _a, vnode) {
        var value = _a.value, oldValue = _a.oldValue;
        /* istanbul ignore if */
        if (!value === !oldValue)
            return;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        if (transition) {
            vnode.data.show = true;
            if (value) {
                enter(vnode, function () {
                    el.style.display = el.__vOriginalDisplay;
                });
            }
            else {
                leave(vnode, function () {
                    el.style.display = 'none';
                });
            }
        }
        else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
    },
    unbind: function (el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
        }
    }
};

var platformDirectives = {
    model: directive,
    show: show
};

// Provides transition support for a single element/component.
var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
    }
    else {
        return vnode;
    }
}
function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
        data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key in listeners) {
        data[camelize(key)] = listeners[key];
    }
    return data;
}
function placeholder(h, rawChild) {
    // @ts-expect-error
    if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
            props: rawChild.componentOptions.propsData
        });
    }
}
function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true;
        }
    }
}
function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
var isVShowDirective = function (d) { return d.name === 'show'; };
var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function (h) {
        var _this = this;
        var children = this.$slots.default;
        if (!children) {
            return;
        }
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
            return;
        }
        // warn multiple elements
        if ( true && children.length > 1) {
            warn$2('<transition> can only be used on a single element. Use ' +
                '<transition-group> for lists.', this.$parent);
        }
        var mode = this.mode;
        // warn invalid mode
        if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
            warn$2('invalid <transition> mode: ' + mode, this.$parent);
        }
        var rawChild = children[0];
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
            return rawChild;
        }
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
            return rawChild;
        }
        if (this._leaving) {
            return placeholder(h, rawChild);
        }
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-".concat(this._uid, "-");
        child.key =
            child.key == null
                ? child.isComment
                    ? id + 'comment'
                    : id + child.tag
                : isPrimitive(child.key)
                    ? String(child.key).indexOf(id) === 0
                        ? child.key
                        : id + child.key
                    : child.key;
        var data = ((child.data || (child.data = {})).transition =
            extractTransitionData(this));
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
        }
        if (oldChild &&
            oldChild.data &&
            !isSameChild(child, oldChild) &&
            !isAsyncPlaceholder(oldChild) &&
            // #6687 component root is a comment node
            !(oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = (oldChild.data.transition = extend({}, data));
            // handle transition mode
            if (mode === 'out-in') {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, 'afterLeave', function () {
                    _this._leaving = false;
                    _this.$forceUpdate();
                });
                return placeholder(h, rawChild);
            }
            else if (mode === 'in-out') {
                if (isAsyncPlaceholder(child)) {
                    return oldRawChild;
                }
                var delayedLeave_1;
                var performLeave = function () {
                    delayedLeave_1();
                };
                mergeVNodeHook(data, 'afterEnter', performLeave);
                mergeVNodeHook(data, 'enterCancelled', performLeave);
                mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                    delayedLeave_1 = leave;
                });
            }
        }
        return rawChild;
    }
};

// Provides transition support for list items.
var props = extend({
    tag: String,
    moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
    props: props,
    beforeMount: function () {
        var _this = this;
        var update = this._update;
        this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(_this);
            // force removing pass
            _this.__patch__(_this._vnode, _this.kept, false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
            );
            _this._vnode = _this.kept;
            restoreActiveInstance();
            update.call(_this, vnode, hydrating);
        };
    },
    render: function (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = (this.prevChildren = this.children);
        var rawChildren = this.$slots.default || [];
        var children = (this.children = []);
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
                if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                }
                else if (true) {
                    var opts = c.componentOptions;
                    var name_1 = opts
                        ? getComponentName(opts.Ctor.options) || opts.tag || ''
                        : c.tag;
                    warn$2("<transition-group> children must be keyed: <".concat(name_1, ">"));
                }
            }
        }
        if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i = 0; i < prevChildren.length; i++) {
                var c = prevChildren[i];
                c.data.transition = transitionData;
                // @ts-expect-error .getBoundingClientRect is not typed in Node
                c.data.pos = c.elm.getBoundingClientRect();
                if (map[c.key]) {
                    kept.push(c);
                }
                else {
                    removed.push(c);
                }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
        }
        return h(tag, null, children);
    },
    updated: function () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || 'v') + '-move';
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
        }
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
        children.forEach(function (c) {
            if (c.data.moved) {
                var el_1 = c.elm;
                var s = el_1.style;
                addTransitionClass(el_1, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = '';
                el_1.addEventListener(transitionEndEvent, (el_1._moveCb = function cb(e) {
                    if (e && e.target !== el_1) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el_1.removeEventListener(transitionEndEvent, cb);
                        el_1._moveCb = null;
                        removeTransitionClass(el_1, moveClass);
                    }
                }));
            }
        });
    },
    methods: {
        hasMove: function (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
                return false;
            }
            /* istanbul ignore if */
            if (this._hasMove) {
                return this._hasMove;
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode();
            if (el._transitionClasses) {
                el._transitionClasses.forEach(function (cls) {
                    removeClass(clone, cls);
                });
            }
            addClass(clone, moveClass);
            clone.style.display = 'none';
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return (this._hasMove = info.hasTransform);
        }
    }
};
function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
        c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
        c.elm._enterCb();
    }
}
function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
        s.transitionDuration = '0s';
    }
}

var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
};

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);
// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;
// public mount method
Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
};
// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
    setTimeout(function () {
        if (config.devtools) {
            if (devtools) {
                devtools.emit('init', Vue);
            }
            else if (true) {
                // @ts-expect-error
                console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools');
            }
        }
        if ( true &&
            config.productionTip !== false &&
            typeof console !== 'undefined') {
            // @ts-expect-error
            console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                "Make sure to turn on production mode when deploying for production.\n" +
                "See more tips at https://vuejs.org/guide/deployment.html");
        }
    }, 0);
}

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});
function parseText(text, delimiters) {
    //@ts-expect-error
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
        return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = (tagRE.lastIndex = 0);
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
            rawTokens.push((tokenValue = text.slice(lastIndex, index)));
            tokens.push(JSON.stringify(tokenValue));
        }
        // tag token
        var exp = parseFilters(match[1].trim());
        tokens.push("_s(".concat(exp, ")"));
        rawTokens.push({ '@binding': exp });
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        rawTokens.push((tokenValue = text.slice(lastIndex)));
        tokens.push(JSON.stringify(tokenValue));
    }
    return {
        expression: tokens.join('+'),
        tokens: rawTokens
    };
}

function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ( true && staticClass) {
        var res = parseText(staticClass, options.delimiters);
        if (res) {
            warn("class=\"".concat(staticClass, "\": ") +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
        }
    }
    if (staticClass) {
        el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, ' ').trim());
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
        el.classBinding = classBinding;
    }
}
function genData$2(el) {
    var data = '';
    if (el.staticClass) {
        data += "staticClass:".concat(el.staticClass, ",");
    }
    if (el.classBinding) {
        data += "class:".concat(el.classBinding, ",");
    }
    return data;
}
var klass = {
    staticKeys: ['staticClass'],
    transformNode: transformNode$1,
    genData: genData$2
};

function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
        /* istanbul ignore if */
        if (true) {
            var res = parseText(staticStyle, options.delimiters);
            if (res) {
                warn("style=\"".concat(staticStyle, "\": ") +
                    'Interpolation inside attributes has been removed. ' +
                    'Use v-bind or the colon shorthand instead. For example, ' +
                    'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
            }
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }
    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
        el.styleBinding = styleBinding;
    }
}
function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
        data += "staticStyle:".concat(el.staticStyle, ",");
    }
    if (el.styleBinding) {
        data += "style:(".concat(el.styleBinding, "),");
    }
    return data;
}
var style = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode,
    genData: genData$1
};

var decoder;
var he = {
    decode: function (html) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = html;
        return decoder.textContent;
    }
};

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track');

/**
 * Not type-checking this file because it's mostly vendor code.
 */
// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
var startTagOpen = new RegExp("^<".concat(qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;
// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};
var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};
function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; });
}
function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag = options.isUnaryTag || no;
    var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    var _loop_1 = function () {
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<');
            if (textEnd === 0) {
                // Comment:
                if (comment.test(html)) {
                    var commentEnd = html.indexOf('-->');
                    if (commentEnd >= 0) {
                        if (options.shouldKeepComment && options.comment) {
                            options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                        }
                        advance(commentEnd + 3);
                        return "continue";
                    }
                }
                // https://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                if (conditionalComment.test(html)) {
                    var conditionalEnd = html.indexOf(']>');
                    if (conditionalEnd >= 0) {
                        advance(conditionalEnd + 2);
                        return "continue";
                    }
                }
                // Doctype:
                var doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length);
                    return "continue";
                }
                // End tag:
                var endTagMatch = html.match(endTag);
                if (endTagMatch) {
                    var curIndex = index;
                    advance(endTagMatch[0].length);
                    parseEndTag(endTagMatch[1], curIndex, index);
                    return "continue";
                }
                // Start tag:
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                    handleStartTag(startTagMatch);
                    if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                        advance(1);
                    }
                    return "continue";
                }
            }
            var text = void 0, rest = void 0, next = void 0;
            if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (!endTag.test(rest) &&
                    !startTagOpen.test(rest) &&
                    !comment.test(rest) &&
                    !conditionalComment.test(rest)) {
                    // < in plain text, be forgiving and treat it as text
                    next = rest.indexOf('<', 1);
                    if (next < 0)
                        break;
                    textEnd += next;
                    rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
            }
            if (textEnd < 0) {
                text = html;
            }
            if (text) {
                advance(text.length);
            }
            if (options.chars && text) {
                options.chars(text, index - text.length, index);
            }
        }
        else {
            var endTagLength_1 = 0;
            var stackedTag_1 = lastTag.toLowerCase();
            var reStackedTag = reCache[stackedTag_1] ||
                (reCache[stackedTag_1] = new RegExp('([\\s\\S]*?)(</' + stackedTag_1 + '[^>]*>)', 'i'));
            var rest = html.replace(reStackedTag, function (all, text, endTag) {
                endTagLength_1 = endTag.length;
                if (!isPlainTextElement(stackedTag_1) && stackedTag_1 !== 'noscript') {
                    text = text
                        .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                        .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                }
                if (shouldIgnoreFirstNewline(stackedTag_1, text)) {
                    text = text.slice(1);
                }
                if (options.chars) {
                    options.chars(text);
                }
                return '';
            });
            index += html.length - rest.length;
            html = rest;
            parseEndTag(stackedTag_1, index - endTagLength_1, index);
        }
        if (html === last) {
            options.chars && options.chars(html);
            if ( true && !stack.length && options.warn) {
                options.warn("Mal-formatted tag at end of template: \"".concat(html, "\""), {
                    start: index + html.length
                });
            }
            return "break";
        }
    };
    while (html) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    // Clean up any remaining tags
    parseEndTag();
    function advance(n) {
        index += n;
        html = html.substring(n);
    }
    function parseStartTag() {
        var start = html.match(startTagOpen);
        if (start) {
            var match = {
                tagName: start[1],
                attrs: [],
                start: index
            };
            advance(start[0].length);
            var end = void 0, attr = void 0;
            while (!(end = html.match(startTagClose)) &&
                (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                attr.start = index;
                advance(attr[0].length);
                attr.end = index;
                match.attrs.push(attr);
            }
            if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
            }
        }
    }
    function handleStartTag(match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
        if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                parseEndTag(lastTag);
            }
            if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
                parseEndTag(tagName);
            }
        }
        var unary = isUnaryTag(tagName) || !!unarySlash;
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
            var args = match.attrs[i];
            var value = args[3] || args[4] || args[5] || '';
            var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                ? options.shouldDecodeNewlinesForHref
                : options.shouldDecodeNewlines;
            attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines)
            };
            if ( true && options.outputSourceRange) {
                attrs[i].start = args.start + args[0].match(/^\s*/).length;
                attrs[i].end = args.end;
            }
        }
        if (!unary) {
            stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
                start: match.start,
                end: match.end
            });
            lastTag = tagName;
        }
        if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end);
        }
    }
    function parseEndTag(tagName, start, end) {
        var pos, lowerCasedTagName;
        if (start == null)
            start = index;
        if (end == null)
            end = index;
        // Find the closest opened tag of the same type
        if (tagName) {
            lowerCasedTagName = tagName.toLowerCase();
            for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                    break;
                }
            }
        }
        else {
            // If no tag name is provided, clean shop
            pos = 0;
        }
        if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) {
                if ( true && (i > pos || !tagName) && options.warn) {
                    options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
                        start: stack[i].start,
                        end: stack[i].end
                    });
                }
                if (options.end) {
                    options.end(stack[i].tag, start, end);
                }
            }
            // Remove the open elements from the stack
            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
        }
        else if (lowerCasedTagName === 'br') {
            if (options.start) {
                options.start(tagName, [], true, start, end);
            }
        }
        else if (lowerCasedTagName === 'p') {
            if (options.start) {
                options.start(tagName, [], false, start, end);
            }
            if (options.end) {
                options.end(tagName, start, end);
            }
        }
    }
}

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE = /[ \f\t\r\n]+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he.decode);
var emptySlotScopeToken = "_empty_";
// configurable state
var warn;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;
function createASTElement(tag, attrs, parent) {
    return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent: parent,
        children: []
    };
}
/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
    warn = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) {
        return !!(el.component ||
            el.attrsMap[':is'] ||
            el.attrsMap['v-bind:is'] ||
            !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
    };
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;
    function warnOnce(msg, range) {
        if (!warned) {
            warned = true;
            warn(msg, range);
        }
    }
    function closeElement(element) {
        trimEndingWhitespace(element);
        if (!inVPre && !element.processed) {
            element = processElement(element, options);
        }
        // tree management
        if (!stack.length && element !== root) {
            // allow root elements with v-if, v-else-if and v-else
            if (root.if && (element.elseif || element.else)) {
                if (true) {
                    checkRootConstraints(element);
                }
                addIfCondition(root, {
                    exp: element.elseif,
                    block: element
                });
            }
            else if (true) {
                warnOnce("Component template should contain exactly one root element. " +
                    "If you are using v-if on multiple elements, " +
                    "use v-else-if to chain them instead.", { start: element.start });
            }
        }
        if (currentParent && !element.forbidden) {
            if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
            }
            else {
                if (element.slotScope) {
                    // scoped slot
                    // keep it in the children list so that v-else(-if) conditions can
                    // find it as the prev node.
                    var name_1 = element.slotTarget || '"default"';
                    (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name_1] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
            }
        }
        // final children cleanup
        // filter out scoped slots
        element.children = element.children.filter(function (c) { return !c.slotScope; });
        // remove trailing whitespace node again
        trimEndingWhitespace(element);
        // check pre state
        if (element.pre) {
            inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
            inPre = false;
        }
        // apply post-transforms
        for (var i = 0; i < postTransforms.length; i++) {
            postTransforms[i](element, options);
        }
    }
    function trimEndingWhitespace(el) {
        // remove trailing whitespace node
        if (!inPre) {
            var lastNode = void 0;
            while ((lastNode = el.children[el.children.length - 1]) &&
                lastNode.type === 3 &&
                lastNode.text === ' ') {
                el.children.pop();
            }
        }
    }
    function checkRootConstraints(el) {
        if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") +
                'contain multiple nodes.', { start: el.start });
        }
        if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' +
                'it renders multiple elements.', el.rawAttrsMap['v-for']);
        }
    }
    parseHTML(template, {
        warn: warn,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        outputSourceRange: options.outputSourceRange,
        start: function (tag, attrs, unary, start, end) {
            // check namespace.
            // inherit parent ns if there is one
            var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
            // handle IE svg bug
            /* istanbul ignore if */
            if (isIE && ns === 'svg') {
                attrs = guardIESVGBug(attrs);
            }
            var element = createASTElement(tag, attrs, currentParent);
            if (ns) {
                element.ns = ns;
            }
            if (true) {
                if (options.outputSourceRange) {
                    element.start = start;
                    element.end = end;
                    element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                        cumulated[attr.name] = attr;
                        return cumulated;
                    }, {});
                }
                attrs.forEach(function (attr) {
                    if (invalidAttributeRE.test(attr.name)) {
                        warn("Invalid dynamic argument expression: attribute names cannot contain " +
                            "spaces, quotes, <, >, / or =.", options.outputSourceRange
                            ? {
                                start: attr.start + attr.name.indexOf("["),
                                end: attr.start + attr.name.length
                            }
                            : undefined);
                    }
                });
            }
            if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                 true &&
                    warn('Templates should only be responsible for mapping the state to the ' +
                        'UI. Avoid placing tags with side-effects in your templates, such as ' +
                        "<".concat(tag, ">") +
                        ', as they will not be parsed.', { start: element.start });
            }
            // apply pre-transforms
            for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
            }
            if (!inVPre) {
                processPre(element);
                if (element.pre) {
                    inVPre = true;
                }
            }
            if (platformIsPreTag(element.tag)) {
                inPre = true;
            }
            if (inVPre) {
                processRawAttrs(element);
            }
            else if (!element.processed) {
                // structural directives
                processFor(element);
                processIf(element);
                processOnce(element);
            }
            if (!root) {
                root = element;
                if (true) {
                    checkRootConstraints(root);
                }
            }
            if (!unary) {
                currentParent = element;
                stack.push(element);
            }
            else {
                closeElement(element);
            }
        },
        end: function (tag, start, end) {
            var element = stack[stack.length - 1];
            // pop stack
            stack.length -= 1;
            currentParent = stack[stack.length - 1];
            if ( true && options.outputSourceRange) {
                element.end = end;
            }
            closeElement(element);
        },
        chars: function (text, start, end) {
            if (!currentParent) {
                if (true) {
                    if (text === template) {
                        warnOnce('Component template requires a root element, rather than just text.', { start: start });
                    }
                    else if ((text = text.trim())) {
                        warnOnce("text \"".concat(text, "\" outside root element will be ignored."), {
                            start: start
                        });
                    }
                }
                return;
            }
            // IE textarea placeholder bug
            /* istanbul ignore if */
            if (isIE &&
                currentParent.tag === 'textarea' &&
                currentParent.attrsMap.placeholder === text) {
                return;
            }
            var children = currentParent.children;
            if (inPre || text.trim()) {
                text = isTextTag(currentParent)
                    ? text
                    : decodeHTMLCached(text);
            }
            else if (!children.length) {
                // remove the whitespace-only node right after an opening tag
                text = '';
            }
            else if (whitespaceOption) {
                if (whitespaceOption === 'condense') {
                    // in condense mode, remove the whitespace node if it contains
                    // line break, otherwise condense to a single space
                    text = lineBreakRE.test(text) ? '' : ' ';
                }
                else {
                    text = ' ';
                }
            }
            else {
                text = preserveWhitespace ? ' ' : '';
            }
            if (text) {
                if (!inPre && whitespaceOption === 'condense') {
                    // condense consecutive whitespaces into single space
                    text = text.replace(whitespaceRE, ' ');
                }
                var res = void 0;
                var child = void 0;
                if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                    child = {
                        type: 2,
                        expression: res.expression,
                        tokens: res.tokens,
                        text: text
                    };
                }
                else if (text !== ' ' ||
                    !children.length ||
                    children[children.length - 1].text !== ' ') {
                    child = {
                        type: 3,
                        text: text
                    };
                }
                if (child) {
                    if ( true && options.outputSourceRange) {
                        child.start = start;
                        child.end = end;
                    }
                    children.push(child);
                }
            }
        },
        comment: function (text, start, end) {
            // adding anything as a sibling to the root node is forbidden
            // comments should still be allowed, but ignored
            if (currentParent) {
                var child = {
                    type: 3,
                    text: text,
                    isComment: true
                };
                if ( true && options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                }
                currentParent.children.push(child);
            }
        }
    });
    return root;
}
function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
        el.pre = true;
    }
}
function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
        var attrs = (el.attrs = new Array(len));
        for (var i = 0; i < len; i++) {
            attrs[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
            };
            if (list[i].start != null) {
                attrs[i].start = list[i].start;
                attrs[i].end = list[i].end;
            }
        }
    }
    else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
    }
}
function processElement(element, options) {
    processKey(element);
    // determine whether this is a plain element after
    // removing structural attributes
    element.plain =
        !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
        element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element;
}
function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
        if (true) {
            if (el.tag === 'template') {
                warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
            }
            if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent_1 = el.parent;
                if (iterator &&
                    iterator === exp &&
                    parent_1 &&
                    parent_1.tag === 'transition-group') {
                    warn("Do not use v-for index as key on <transition-group> children, " +
                        "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */);
                }
            }
        }
        el.key = exp;
    }
}
function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
    }
}
function processFor(el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        var res = parseFor(exp);
        if (res) {
            extend(el, res);
        }
        else if (true) {
            warn("Invalid v-for expression: ".concat(exp), el.rawAttrsMap['v-for']);
        }
    }
}
function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch)
        return;
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
        res.alias = alias.replace(forIteratorRE, '').trim();
        res.iterator1 = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
            res.iterator2 = iteratorMatch[2].trim();
        }
    }
    else {
        res.alias = alias;
    }
    return res;
}
function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
        el.if = exp;
        addIfCondition(el, {
            exp: exp,
            block: el
        });
    }
    else {
        if (getAndRemoveAttr(el, 'v-else') != null) {
            el.else = true;
        }
        var elseif = getAndRemoveAttr(el, 'v-else-if');
        if (elseif) {
            el.elseif = elseif;
        }
    }
}
function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
        addIfCondition(prev, {
            exp: el.elseif,
            block: el
        });
    }
    else if (true) {
        warn("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : 'else', " ") +
            "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
}
function findPrevElement(children) {
    var i = children.length;
    while (i--) {
        if (children[i].type === 1) {
            return children[i];
        }
        else {
            if ( true && children[i].text !== ' ') {
                warn("text \"".concat(children[i].text.trim(), "\" between v-if and v-else(-if) ") +
                    "will be ignored.", children[i]);
            }
            children.pop();
        }
    }
}
function addIfCondition(el, condition) {
    if (!el.ifConditions) {
        el.ifConditions = [];
    }
    el.ifConditions.push(condition);
}
function processOnce(el) {
    var once = getAndRemoveAttr(el, 'v-once');
    if (once != null) {
        el.once = true;
    }
}
// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent(el) {
    var slotScope;
    if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ( true && slotScope) {
            warn("the \"scope\" attribute for scoped slots have been deprecated and " +
                "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
                "can also be used on plain elements in addition to <template> to " +
                "denote scoped slots.", el.rawAttrsMap['scope'], true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    }
    else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if ( true && el.attrsMap['v-for']) {
            warn("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") +
                "(v-for takes higher priority). Use a wrapper <template> for the " +
                "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
        }
        el.slotScope = slotScope;
    }
    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
            addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
        }
    }
    // 2.6 v-slot syntax
    {
        if (el.tag === 'template') {
            // v-slot on <template>
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (el.slotTarget || el.slotScope) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.parent && !maybeComponent(el.parent)) {
                        warn("<template v-slot> can only appear at the root level inside " +
                            "the receiving component", el);
                    }
                }
                var _a = getSlotName(slotBinding), name_2 = _a.name, dynamic = _a.dynamic;
                el.slotTarget = name_2;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
            }
        }
        else {
            // v-slot on component, denotes default slot
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (!maybeComponent(el)) {
                        warn("v-slot can only be used on components or <template>.", slotBinding);
                    }
                    if (el.slotScope || el.slotTarget) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.scopedSlots) {
                        warn("To avoid scope ambiguity, the default slot should also use " +
                            "<template> syntax when there are other named slots.", slotBinding);
                    }
                }
                // add the component's children to its default slot
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var _b = getSlotName(slotBinding), name_3 = _b.name, dynamic = _b.dynamic;
                var slotContainer_1 = (slots[name_3] = createASTElement('template', [], el));
                slotContainer_1.slotTarget = name_3;
                slotContainer_1.slotTargetDynamic = dynamic;
                slotContainer_1.children = el.children.filter(function (c) {
                    if (!c.slotScope) {
                        c.parent = slotContainer_1;
                        return true;
                    }
                });
                slotContainer_1.slotScope = slotBinding.value || emptySlotScopeToken;
                // remove children as they are returned from scopedSlots now
                el.children = [];
                // mark el non-plain so data gets generated
                el.plain = false;
            }
        }
    }
}
function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
        if (binding.name[0] !== '#') {
            name = 'default';
        }
        else if (true) {
            warn("v-slot shorthand syntax requires a slot name.", binding);
        }
    }
    return dynamicArgRE.test(name)
        ? // dynamic [name]
            { name: name.slice(1, -1), dynamic: true }
        : // static name
            { name: "\"".concat(name, "\""), dynamic: false };
}
// handle <slot/> outlets
function processSlotOutlet(el) {
    if (el.tag === 'slot') {
        el.slotName = getBindingAttr(el, 'name');
        if ( true && el.key) {
            warn("`key` does not work on <slot> because slots are abstract outlets " +
                "and can possibly expand into multiple elements. " +
                "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
        }
    }
}
function processComponent(el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
        el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
        el.inlineTemplate = true;
    }
}
function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true;
            // modifiers
            modifiers = parseModifiers(name.replace(dirRE, ''));
            // support .foo shorthand syntax for the .prop modifier
            if (modifiers) {
                name = name.replace(modifierRE, '');
            }
            if (bindRE.test(name)) {
                // v-bind
                name = name.replace(bindRE, '');
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                if ( true && value.trim().length === 0) {
                    warn("The value for a v-bind expression cannot be empty. Found in \"v-bind:".concat(name, "\""));
                }
                if (modifiers) {
                    if (modifiers.prop && !isDynamic) {
                        name = camelize(name);
                        if (name === 'innerHtml')
                            name = 'innerHTML';
                    }
                    if (modifiers.camel && !isDynamic) {
                        name = camelize(name);
                    }
                    if (modifiers.sync) {
                        syncGen = genAssignmentCode(value, "$event");
                        if (!isDynamic) {
                            addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn, list[i]);
                            if (hyphenate(name) !== camelize(name)) {
                                addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn, list[i]);
                            }
                        }
                        else {
                            // handler w/ dynamic event name
                            addHandler(el, "\"update:\"+(".concat(name, ")"), syncGen, null, false, warn, list[i], true // dynamic
                            );
                        }
                    }
                }
                if ((modifiers && modifiers.prop) ||
                    (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))) {
                    addProp(el, name, value, list[i], isDynamic);
                }
                else {
                    addAttr(el, name, value, list[i], isDynamic);
                }
            }
            else if (onRE.test(name)) {
                // v-on
                name = name.replace(onRE, '');
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
            }
            else {
                // normal directives
                name = name.replace(dirRE, '');
                // parse arg
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                    name = name.slice(0, -(arg.length + 1));
                    if (dynamicArgRE.test(arg)) {
                        arg = arg.slice(1, -1);
                        isDynamic = true;
                    }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if ( true && name === 'model') {
                    checkForAliasModel(el, value);
                }
            }
        }
        else {
            // literal attribute
            if (true) {
                var res = parseText(value, delimiters);
                if (res) {
                    warn("".concat(name, "=\"").concat(value, "\": ") +
                        'Interpolation inside attributes has been removed. ' +
                        'Use v-bind or the colon shorthand instead. For example, ' +
                        'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
            }
            addAttr(el, name, JSON.stringify(value), list[i]);
            // #6887 firefox doesn't update muted state if set via attribute
            // even immediately after element creation
            if (!el.component &&
                name === 'muted' &&
                platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, 'true', list[i]);
            }
        }
    }
}
function checkInFor(el) {
    var parent = el;
    while (parent) {
        if (parent.for !== undefined) {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}
function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
        var ret_1 = {};
        match.forEach(function (m) {
            ret_1[m.slice(1)] = true;
        });
        return ret_1;
    }
}
function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
        if ( true && map[attrs[i].name] && !isIE && !isEdge) {
            warn('duplicate attribute: ' + attrs[i].name, attrs[i]);
        }
        map[attrs[i].name] = attrs[i].value;
    }
    return map;
}
// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
}
function isForbiddenTag(el) {
    return (el.tag === 'style' ||
        (el.tag === 'script' &&
            (!el.attrsMap.type || el.attrsMap.type === 'text/javascript')));
}
var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */
function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '');
            res.push(attr);
        }
    }
    return res;
}
function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
        if (_el.for && _el.alias === value) {
            warn("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
                "You are binding v-model directly to a v-for iteration alias. " +
                "This will not be able to modify the v-for source array because " +
                "writing to the alias is like modifying a function local variable. " +
                "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
        }
        _el = _el.parent;
    }
}

/**
 * Expand input[v-model] with dynamic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */
function preTransformNode(el, options) {
    if (el.tag === 'input') {
        var map = el.attrsMap;
        if (!map['v-model']) {
            return;
        }
        var typeBinding = void 0;
        if (map[':type'] || map['v-bind:type']) {
            typeBinding = getBindingAttr(el, 'type');
        }
        if (!map.type && !typeBinding && map['v-bind']) {
            typeBinding = "(".concat(map['v-bind'], ").type");
        }
        if (typeBinding) {
            var ifCondition = getAndRemoveAttr(el, 'v-if', true);
            var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
            var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
            var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
            // 1. checkbox
            var branch0 = cloneASTElement(el);
            // process for on the main node
            processFor(branch0);
            addRawAttr(branch0, 'type', 'checkbox');
            processElement(branch0, options);
            branch0.processed = true; // prevent it from double-processed
            branch0.if = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
            addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
            });
            // 2. add radio else-if condition
            var branch1 = cloneASTElement(el);
            getAndRemoveAttr(branch1, 'v-for', true);
            addRawAttr(branch1, 'type', 'radio');
            processElement(branch1, options);
            addIfCondition(branch0, {
                exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
                block: branch1
            });
            // 3. other
            var branch2 = cloneASTElement(el);
            getAndRemoveAttr(branch2, 'v-for', true);
            addRawAttr(branch2, ':type', typeBinding);
            processElement(branch2, options);
            addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
            });
            if (hasElse) {
                branch0.else = true;
            }
            else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
            }
            return branch0;
        }
    }
}
function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}
var model = {
    preTransformNode: preTransformNode
};

var modules = [klass, style, model];

function text(el, dir) {
    if (dir.value) {
        addProp(el, 'textContent', "_s(".concat(dir.value, ")"), dir);
    }
}

function html(el, dir) {
    if (dir.value) {
        addProp(el, 'innerHTML', "_s(".concat(dir.value, ")"), dir);
    }
}

var directives = {
    model: model$1,
    text: text,
    html: html
};

var baseOptions = {
    expectHTML: true,
    modules: modules,
    directives: directives,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys$1(modules)
};

var isStaticKey;
var isPlatformReservedTag;
var genStaticKeysCached = cached(genStaticKeys);
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
    if (!root)
        return;
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
}
function genStaticKeys(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
        (keys ? ',' + keys : ''));
}
function markStatic(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (!isPlatformReservedTag(node.tag) &&
            node.tag !== 'slot' &&
            node.attrsMap['inline-template'] == null) {
            return;
        }
        for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
            markStatic(child);
            if (!child.static) {
                node.static = false;
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                var block = node.ifConditions[i].block;
                markStatic(block);
                if (!block.static) {
                    node.static = false;
                }
            }
        }
    }
}
function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
        if (node.static || node.once) {
            node.staticInFor = isInFor;
        }
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static &&
            node.children.length &&
            !(node.children.length === 1 && node.children[0].type === 3)) {
            node.staticRoot = true;
            return;
        }
        else {
            node.staticRoot = false;
        }
        if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                markStaticRoots(node.ifConditions[i].block, isInFor);
            }
        }
    }
}
function isStatic(node) {
    if (node.type === 2) {
        // expression
        return false;
    }
    if (node.type === 3) {
        // text
        return true;
    }
    return !!(node.pre ||
        (!node.hasBindings && // no dynamic bindings
            !node.if &&
            !node.for && // not v-if or v-for or v-else
            !isBuiltInTag(node.tag) && // not a built-in
            isPlatformReservedTag(node.tag) && // not a component
            !isDirectChildOfTemplateFor(node) &&
            Object.keys(node).every(isStaticKey)));
}
function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
        node = node.parent;
        if (node.tag !== 'template') {
            return false;
        }
        if (node.for) {
            return true;
        }
    }
    return false;
}

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
// KeyboardEvent.keyCode aliases
var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46]
};
// KeyboardEvent.key aliases
var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    delete: ['Backspace', 'Delete', 'Del']
};
// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return "if(".concat(condition, ")return null;"); };
var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
};
function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name_1 in events) {
        var handlerCode = genHandler(events[name_1]);
        //@ts-expect-error
        if (events[name_1] && events[name_1].dynamic) {
            dynamicHandlers += "".concat(name_1, ",").concat(handlerCode, ",");
        }
        else {
            staticHandlers += "\"".concat(name_1, "\":").concat(handlerCode, ",");
        }
    }
    staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");
    if (dynamicHandlers) {
        return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
    }
    else {
        return prefix + staticHandlers;
    }
}
function genHandler(handler) {
    if (!handler) {
        return 'function(){}';
    }
    if (Array.isArray(handler)) {
        return "[".concat(handler.map(function (handler) { return genHandler(handler); }).join(','), "]");
    }
    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
    if (!handler.modifiers) {
        if (isMethodPath || isFunctionExpression) {
            return handler.value;
        }
        return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}"); // inline statement
    }
    else {
        var code = '';
        var genModifierCode = '';
        var keys = [];
        var _loop_1 = function (key) {
            if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                // left/right
                if (keyCodes[key]) {
                    keys.push(key);
                }
            }
            else if (key === 'exact') {
                var modifiers_1 = handler.modifiers;
                genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta']
                    .filter(function (keyModifier) { return !modifiers_1[keyModifier]; })
                    .map(function (keyModifier) { return "$event.".concat(keyModifier, "Key"); })
                    .join('||'));
            }
            else {
                keys.push(key);
            }
        };
        for (var key in handler.modifiers) {
            _loop_1(key);
        }
        if (keys.length) {
            code += genKeyFilter(keys);
        }
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) {
            code += genModifierCode;
        }
        var handlerCode = isMethodPath
            ? "return ".concat(handler.value, ".apply(null, arguments)")
            : isFunctionExpression
                ? "return (".concat(handler.value, ").apply(null, arguments)")
                : isFunctionInvocation
                    ? "return ".concat(handler.value)
                    : handler.value;
        return "function($event){".concat(code).concat(handlerCode, "}");
    }
}
function genKeyFilter(keys) {
    return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
        "".concat(keys.map(genFilterCode).join('&&'), ")return null;"));
}
function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
        return "$event.keyCode!==".concat(keyVal);
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return ("_k($event.keyCode," +
        "".concat(JSON.stringify(key), ",") +
        "".concat(JSON.stringify(keyCode), ",") +
        "$event.key," +
        "".concat(JSON.stringify(keyName)) +
        ")");
}

function on(el, dir) {
    if ( true && dir.modifiers) {
        warn$2("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return "_g(".concat(code, ",").concat(dir.value, ")"); };
}

function bind(el, dir) {
    el.wrapData = function (code) {
        return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? 'true' : 'false').concat(dir.modifiers && dir.modifiers.sync ? ',true' : '', ")");
    };
}

var baseDirectives = {
    on: on,
    bind: bind,
    cloak: noop
};

var CodegenState = /** @class */ (function () {
    function CodegenState(options) {
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
        this.directives = extend(extend({}, baseDirectives), options.directives);
        var isReservedTag = options.isReservedTag || no;
        this.maybeComponent = function (el) {
            return !!el.component || !isReservedTag(el.tag);
        };
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
    }
    return CodegenState;
}());
function generate(ast, options) {
    var state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    var code = ast
        ? ast.tag === 'script'
            ? 'null'
            : genElement(ast, state)
        : '_c("div")';
    return {
        render: "with(this){return ".concat(code, "}"),
        staticRenderFns: state.staticRenderFns
    };
}
function genElement(el, state) {
    if (el.parent) {
        el.pre = el.pre || el.parent.pre;
    }
    if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state);
    }
    else if (el.once && !el.onceProcessed) {
        return genOnce(el, state);
    }
    else if (el.for && !el.forProcessed) {
        return genFor(el, state);
    }
    else if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
        return genChildren(el, state) || 'void 0';
    }
    else if (el.tag === 'slot') {
        return genSlot(el, state);
    }
    else {
        // component or element
        var code = void 0;
        if (el.component) {
            code = genComponent(el.component, el, state);
        }
        else {
            var data = void 0;
            var maybeComponent = state.maybeComponent(el);
            if (!el.plain || (el.pre && maybeComponent)) {
                data = genData(el, state);
            }
            var tag 
            // check if this is a component in <script setup>
            = void 0;
            // check if this is a component in <script setup>
            var bindings = state.options.bindings;
            if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
                tag = checkBindingType(bindings, el.tag);
            }
            if (!tag)
                tag = "'".concat(el.tag, "'");
            var children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = "_c(".concat(tag).concat(data ? ",".concat(data) : '' // data
            ).concat(children ? ",".concat(children) : '' // children
            , ")");
        }
        // module transforms
        for (var i = 0; i < state.transforms.length; i++) {
            code = state.transforms[i](el, code);
        }
        return code;
    }
}
function checkBindingType(bindings, key) {
    var camelName = camelize(key);
    var PascalName = capitalize(camelName);
    var checkType = function (type) {
        if (bindings[key] === type) {
            return key;
        }
        if (bindings[camelName] === type) {
            return camelName;
        }
        if (bindings[PascalName] === type) {
            return PascalName;
        }
    };
    var fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */) ||
        checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */);
    if (fromConst) {
        return fromConst;
    }
    var fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */) ||
        checkType("setup-ref" /* BindingTypes.SETUP_REF */) ||
        checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */);
    if (fromMaybeRef) {
        return fromMaybeRef;
    }
}
// hoist static sub-trees out
function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
        state.pre = el.pre;
    }
    state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
    state.pre = originalPreState;
    return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ',true' : '', ")");
}
// v-once
function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.staticInFor) {
        var key = '';
        var parent_1 = el.parent;
        while (parent_1) {
            if (parent_1.for) {
                key = parent_1.key;
                break;
            }
            parent_1 = parent_1.parent;
        }
        if (!key) {
             true &&
                state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
            return genElement(el, state);
        }
        return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
    }
    else {
        return genStatic(el, state);
    }
}
function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}
function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
        return altEmpty || '_e()';
    }
    var condition = conditions.shift();
    if (condition.exp) {
        return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
    }
    else {
        return "".concat(genTernaryExp(condition.block));
    }
    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
        return altGen
            ? altGen(el, state)
            : el.once
                ? genOnce(el, state)
                : genElement(el, state);
    }
}
function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : '';
    var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : '';
    if ( true &&
        state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key) {
        state.warn("<".concat(el.tag, " v-for=\"").concat(alias, " in ").concat(exp, "\">: component lists rendered with ") +
            "v-for should have explicit keys. " +
            "See https://v2.vuejs.org/v2/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */);
    }
    el.forProcessed = true; // avoid recursion
    return ("".concat(altHelper || '_l', "((").concat(exp, "),") +
        "function(".concat(alias).concat(iterator1).concat(iterator2, "){") +
        "return ".concat((altGen || genElement)(el, state)) +
        '})');
}
function genData(el, state) {
    var data = '{';
    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs)
        data += dirs + ',';
    // key
    if (el.key) {
        data += "key:".concat(el.key, ",");
    }
    // ref
    if (el.ref) {
        data += "ref:".concat(el.ref, ",");
    }
    if (el.refInFor) {
        data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
        data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
        data += "tag:\"".concat(el.tag, "\",");
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
        data += "attrs:".concat(genProps(el.attrs), ",");
    }
    // DOM props
    if (el.props) {
        data += "domProps:".concat(genProps(el.props), ",");
    }
    // event handlers
    if (el.events) {
        data += "".concat(genHandlers(el.events, false), ",");
    }
    if (el.nativeEvents) {
        data += "".concat(genHandlers(el.nativeEvents, true), ",");
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
        data += "slot:".concat(el.slotTarget, ",");
    }
    // scoped slots
    if (el.scopedSlots) {
        data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
    }
    // component v-model
    if (el.model) {
        data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
    }
    // inline-template
    if (el.inlineTemplate) {
        var inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
            data += "".concat(inlineTemplate, ",");
        }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
        data = "_b(".concat(data, ",\"").concat(el.tag, "\",").concat(genProps(el.dynamicAttrs), ")");
    }
    // v-bind data wrap
    if (el.wrapData) {
        data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
        data = el.wrapListeners(data);
    }
    return data;
}
function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs)
        return;
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = state.directives[dir.name];
        if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime = !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
            hasRuntime = true;
            res += "{name:\"".concat(dir.name, "\",rawName:\"").concat(dir.rawName, "\"").concat(dir.value
                ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value))
                : '').concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : "\"".concat(dir.arg, "\"")) : '').concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : '', "},");
        }
    }
    if (hasRuntime) {
        return res.slice(0, -1) + ']';
    }
}
function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ( true && (el.children.length !== 1 || ast.type !== 1)) {
        state.warn('Inline-template components must have exactly one child element.', { start: el.start });
    }
    if (ast && ast.type === 1) {
        var inlineRenderFns = generate(ast, state.options);
        return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns
            .map(function (code) { return "function(){".concat(code, "}"); })
            .join(','), "]}");
    }
}
function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for ||
        Object.keys(slots).some(function (key) {
            var slot = slots[key];
            return (slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
            );
        });
    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;
    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
        var parent_2 = el.parent;
        while (parent_2) {
            if ((parent_2.slotScope && parent_2.slotScope !== emptySlotScopeToken) ||
                parent_2.for) {
                needsForceUpdate = true;
                break;
            }
            if (parent_2.if) {
                needsKey = true;
            }
            parent_2 = parent_2.parent;
        }
    }
    var generatedSlots = Object.keys(slots)
        .map(function (key) { return genScopedSlot(slots[key], state); })
        .join(',');
    return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
}
function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}
function containsSlotChild(el) {
    if (el.type === 1) {
        if (el.tag === 'slot') {
            return true;
        }
        return el.children.some(containsSlotChild);
    }
    return false;
}
function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
        return genIf(el, state, genScopedSlot, "null");
    }
    if (el.for && !el.forProcessed) {
        return genFor(el, state, genScopedSlot);
    }
    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(".concat(slotScope, "){") +
        "return ".concat(el.tag === 'template'
            ? el.if && isLegacySyntax
                ? "(".concat(el.if, ")?").concat(genChildren(el, state) || 'undefined', ":undefined")
                : genChildren(el, state) || 'undefined'
            : genElement(el, state), "}");
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:".concat(el.slotTarget || "\"default\"", ",fn:").concat(fn).concat(reverseProxy, "}");
}
function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
        var el_1 = children[0];
        // optimize single v-for
        if (children.length === 1 &&
            el_1.for &&
            el_1.tag !== 'template' &&
            el_1.tag !== 'slot') {
            var normalizationType_1 = checkSkip
                ? state.maybeComponent(el_1)
                    ? ",1"
                    : ",0"
                : "";
            return "".concat((altGenElement || genElement)(el_1, state)).concat(normalizationType_1);
        }
        var normalizationType = checkSkip
            ? getNormalizationType(children, state.maybeComponent)
            : 0;
        var gen_1 = altGenNode || genNode;
        return "[".concat(children.map(function (c) { return gen_1(c, state); }).join(','), "]").concat(normalizationType ? ",".concat(normalizationType) : '');
    }
}
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
        var el = children[i];
        if (el.type !== 1) {
            continue;
        }
        if (needsNormalization(el) ||
            (el.ifConditions &&
                el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
            res = 2;
            break;
        }
        if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
            res = 1;
        }
    }
    return res;
}
function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}
function genNode(node, state) {
    if (node.type === 1) {
        return genElement(node, state);
    }
    else if (node.type === 3 && node.isComment) {
        return genComment(node);
    }
    else {
        return genText(node);
    }
}
function genText(text) {
    return "_v(".concat(text.type === 2
        ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text)), ")");
}
function genComment(comment) {
    return "_e(".concat(JSON.stringify(comment.text), ")");
}
function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : '');
    var attrs = el.attrs || el.dynamicAttrs
        ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
        }); }))
        : null;
    var bind = el.attrsMap['v-bind'];
    if ((attrs || bind) && !children) {
        res += ",null";
    }
    if (attrs) {
        res += ",".concat(attrs);
    }
    if (bind) {
        res += "".concat(attrs ? '' : ',null', ",").concat(bind);
    }
    return res + ')';
}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : '', ")");
}
function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        var value = transformSpecialNewlines(prop.value);
        if (prop.dynamic) {
            dynamicProps += "".concat(prop.name, ",").concat(value, ",");
        }
        else {
            staticProps += "\"".concat(prop.name, "\":").concat(value, ",");
        }
    }
    staticProps = "{".concat(staticProps.slice(0, -1), "}");
    if (dynamicProps) {
        return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
    }
    else {
        return staticProps;
    }
}
// #3895, #4268
function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' +
    ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
        'super,throw,while,yield,delete,export,import,return,switch,default,' +
        'extends,finally,continue,debugger,function,arguments')
        .split(',')
        .join('\\b|\\b') +
    '\\b');
// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' +
    'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
    '\\s*\\([^\\)]*\\)');
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
// detect problematic expressions in a template
function detectErrors(ast, warn) {
    if (ast) {
        checkNode(ast, warn);
    }
}
function checkNode(node, warn) {
    if (node.type === 1) {
        for (var name_1 in node.attrsMap) {
            if (dirRE.test(name_1)) {
                var value = node.attrsMap[name_1];
                if (value) {
                    var range = node.rawAttrsMap[name_1];
                    if (name_1 === 'v-for') {
                        checkFor(node, "v-for=\"".concat(value, "\""), warn, range);
                    }
                    else if (name_1 === 'v-slot' || name_1[0] === '#') {
                        checkFunctionParameterExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else if (onRE.test(name_1)) {
                        checkEvent(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else {
                        checkExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                }
            }
        }
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn);
            }
        }
    }
    else if (node.type === 2) {
        checkExpression(node.expression, node.text, warn, node);
    }
}
function checkEvent(exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
        warn("avoid using JavaScript unary operator as property name: " +
            "\"".concat(keywordMatch[0], "\" in expression ").concat(text.trim()), range);
    }
    checkExpression(exp, text, warn, range);
}
function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}
function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
        try {
            new Function("var ".concat(ident, "=_"));
        }
        catch (e) {
            warn("invalid ".concat(type, " \"").concat(ident, "\" in expression: ").concat(text.trim()), range);
        }
    }
}
function checkExpression(exp, text, warn, range) {
    try {
        new Function("return ".concat(exp));
    }
    catch (e) {
        var keywordMatch = exp
            .replace(stripStringRE, '')
            .match(prohibitedKeywordRE);
        if (keywordMatch) {
            warn("avoid using JavaScript keyword as property name: " +
                "\"".concat(keywordMatch[0], "\"\n  Raw expression: ").concat(text.trim()), range);
        }
        else {
            warn("invalid expression: ".concat(e.message, " in\n\n") +
                "    ".concat(exp, "\n\n") +
                "  Raw expression: ".concat(text.trim(), "\n"), range);
        }
    }
}
function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
        new Function(exp, '');
    }
    catch (e) {
        warn("invalid function parameter expression: ".concat(e.message, " in\n\n") +
            "    ".concat(exp, "\n\n") +
            "  Raw expression: ".concat(text.trim(), "\n"), range);
    }
}

var range = 2;
function generateCodeFrame(source, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = source.length; }
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
                var lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    var pad = start - (count - lineLength) + 1;
                    var length_1 = end > count ? lineLength - pad : end - start;
                    res.push("   |  " + repeat(" ", pad) + repeat("^", length_1));
                }
                else if (j > i) {
                    if (end > count) {
                        var length_2 = Math.min(end - count, lineLength);
                        res.push("   |  " + repeat("^", length_2));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
function repeat(str, n) {
    var result = '';
    if (n > 0) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // eslint-disable-line
            if (n & 1)
                result += str;
            n >>>= 1;
            if (n <= 0)
                break;
            str += str;
        }
    }
    return result;
}

function createFunction(code, errors) {
    try {
        return new Function(code);
    }
    catch (err) {
        errors.push({ err: err, code: code });
        return noop;
    }
}
function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
        options = extend({}, options);
        var warn = options.warn || warn$2;
        delete options.warn;
        /* istanbul ignore if */
        if (true) {
            // detect possible CSP restriction
            try {
                new Function('return 1');
            }
            catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                    warn('It seems you are using the standalone build of Vue.js in an ' +
                        'environment with Content Security Policy that prohibits unsafe-eval. ' +
                        'The template compiler cannot work in this environment. Consider ' +
                        'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                        'templates into render functions.');
                }
            }
        }
        // check cache
        var key = options.delimiters
            ? String(options.delimiters) + template
            : template;
        if (cache[key]) {
            return cache[key];
        }
        // compile
        var compiled = compile(template, options);
        // check compilation errors/tips
        if (true) {
            if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                    compiled.errors.forEach(function (e) {
                        warn("Error compiling template:\n\n".concat(e.msg, "\n\n") +
                            generateCodeFrame(template, e.start, e.end), vm);
                    });
                }
                else {
                    warn("Error compiling template:\n\n".concat(template, "\n\n") +
                        compiled.errors.map(function (e) { return "- ".concat(e); }).join('\n') +
                        '\n', vm);
                }
            }
            if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                    compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
                }
                else {
                    compiled.tips.forEach(function (msg) { return tip(msg, vm); });
                }
            }
        }
        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
            return createFunction(code, fnGenErrors);
        });
        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        if (true) {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn("Failed to generate render function:\n\n" +
                    fnGenErrors
                        .map(function (_a) {
                        var err = _a.err, code = _a.code;
                        return "".concat(err.toString(), " in\n\n").concat(code, "\n");
                    })
                        .join('\n'), vm);
            }
        }
        return (cache[key] = res);
    };
}

function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
        function compile(template, options) {
            var finalOptions = Object.create(baseOptions);
            var errors = [];
            var tips = [];
            var warn = function (msg, range, tip) {
                (tip ? tips : errors).push(msg);
            };
            if (options) {
                if ( true && options.outputSourceRange) {
                    // $flow-disable-line
                    var leadingSpaceLength_1 = template.match(/^\s*/)[0].length;
                    warn = function (msg, range, tip) {
                        var data = typeof msg === 'string' ? { msg: msg } : msg;
                        if (range) {
                            if (range.start != null) {
                                data.start = range.start + leadingSpaceLength_1;
                            }
                            if (range.end != null) {
                                data.end = range.end + leadingSpaceLength_1;
                            }
                        }
                        (tip ? tips : errors).push(data);
                    };
                }
                // merge custom modules
                if (options.modules) {
                    finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                }
                // merge custom directives
                if (options.directives) {
                    finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                }
                // copy other options
                for (var key in options) {
                    if (key !== 'modules' && key !== 'directives') {
                        finalOptions[key] = options[key];
                    }
                }
            }
            finalOptions.warn = warn;
            var compiled = baseCompile(template.trim(), finalOptions);
            if (true) {
                detectErrors(compiled.ast, warn);
            }
            compiled.errors = errors;
            compiled.tips = tips;
            return compiled;
        }
        return {
            compile: compile,
            compileToFunctions: createCompileToFunctionFn(compile)
        };
    };
}

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
        optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    };
});

var _a = createCompiler(baseOptions), compileToFunctions = _a.compileToFunctions;

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
}
// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser
    ? getShouldDecode(true)
    : false;

var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
});
var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
         true &&
            warn$2("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
        return this;
    }
    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
        var template = options.template;
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {
                    template = idToTemplate(template);
                    /* istanbul ignore if */
                    if ( true && !template) {
                        warn$2("Template element not found or is empty: ".concat(options.template), this);
                    }
                }
            }
            else if (template.nodeType) {
                template = template.innerHTML;
            }
            else {
                if (true) {
                    warn$2('invalid template option:' + template, this);
                }
                return this;
            }
        }
        else if (el) {
            // @ts-expect-error
            template = getOuterHTML(el);
        }
        if (template) {
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile');
            }
            var _a = compileToFunctions(template, {
                outputSourceRange: "development" !== 'production',
                shouldDecodeNewlines: shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
            }, this), render = _a.render, staticRenderFns = _a.staticRenderFns;
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile end');
                measure("vue ".concat(this._name, " compile"), 'compile', 'compile end');
            }
        }
    }
    return mount.call(this, el, hydrating);
};
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
    if (el.outerHTML) {
        return el.outerHTML;
    }
    else {
        var container = document.createElement('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML;
    }
}
Vue.compile = compileToFunctions;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;