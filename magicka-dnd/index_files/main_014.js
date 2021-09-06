webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Code\\magicka-dnd\\src\\App.tsx";



const elements = ['arcane', 'cold', 'earth', 'fire', 'ice', 'life', 'lightning', 'poison', 'shield', 'steam', 'water'].map(elementName => {
  return {
    name: elementName,
    imageLink: `images/Element_${elementName}.webp`
  };
});
const [arcane, cold, earth, fire, ice, life, lightning, poison, shield, steam, water] = [...elements];
const opposingElements = {
  [arcane.name]: [life],
  [life.name]: [arcane],
  [water.name]: [lightning],
  [shield.name]: [shield],
  [cold.name]: [fire],
  [lightning.name]: [water, earth],
  [earth.name]: [lightning],
  [fire.name]: [cold]
};
const cancelingSubElements = {
  [fire.name]: [[ice, fire]],
  [life.name]: [[poison, water]],
  [poison.name]: [[life, water]],
  [ice.name]: [[fire, water]],
  [steam.name]: [[cold, water]]
};
const combiningElements = {
  [water.name]: [[fire, steam], [cold, ice], [arcane, poison]],
  [fire.name]: [[water, steam]],
  [cold.name]: [[steam, water], [water, ice]],
  [arcane.name]: [[water, poison]]
};

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellBar: [],
      maxElements: 5,
      usePoison: false
    };
    document.addEventListener('keypress', event => {
      switch (event.key.toLowerCase()) {
        case 'q':
          this.addToSpellBar(water);
          break;

        case 'w':
          this.addToSpellBar(life);
          break;

        case 'e':
          this.addToSpellBar(shield);
          break;

        case 'r':
          this.addToSpellBar(cold);
          break;

        case 'a':
          this.addToSpellBar(lightning);
          break;

        case 's':
          this.addToSpellBar(arcane);
          break;

        case 'd':
          this.addToSpellBar(earth);
          break;

        case 'f':
          this.addToSpellBar(fire);
          break;

        default:
          break;
      }
    });
  }

  checkOpposing(e0, e1) {
    if (opposingElements[e0.name] !== undefined) {
      for (const opposingElement of opposingElements[e0.name]) {
        if (opposingElement === e1) {
          return true;
        }
      }
    }

    return false;
  }

  addToSpellBar(element) {
    const spellBar = this.state.spellBar;

    if (spellBar.length > 0) {
      for (let i = spellBar.length - 1; i >= 0; i--) {
        if (this.checkOpposing(spellBar[i], element)) {
          this.setState({
            spellBar: [...spellBar.slice(0, i), ...spellBar.slice(i + 1, spellBar.length)]
          });
          return;
        }
      }

      for (let i = spellBar.length - 1; i >= 0; i--) {
        if (cancelingSubElements[spellBar[i].name] !== undefined) {
          for (const [combiningElement, combinedElement] of cancelingSubElements[spellBar[i].name]) {
            if (combiningElement === element) {
              let newSpellBar = [...spellBar.slice(0, i), combinedElement, ...spellBar.slice(i + 1, spellBar.length)];
              let indexLeft = i;
              let indexRight = i;

              while (indexLeft >= 0 || indexRight <= this.state.maxElements - 1) {
                indexLeft--;

                if (indexLeft >= 0) {
                  if (this.checkOpposing(newSpellBar[indexLeft], combinedElement)) {
                    this.setState({
                      spellBar: [...newSpellBar.slice(0, indexLeft), ...newSpellBar.slice(indexLeft + 1, i), ...newSpellBar.slice(i + 1, newSpellBar.length)]
                    });
                    return;
                  }
                }

                indexRight++;

                if (indexRight < newSpellBar.length) {
                  if (this.checkOpposing(newSpellBar[indexRight], combinedElement)) {
                    this.setState({
                      spellBar: [...newSpellBar.slice(0, i), ...newSpellBar.slice(i + 1, indexRight), ...newSpellBar.slice(indexRight + 1, newSpellBar.length)]
                    });
                    return;
                  }
                }
              }

              this.setState({
                spellBar: newSpellBar
              });
              return;
            }
          }
        }
      }

      for (let i = spellBar.length - 1; i >= 0; i--) {
        if (combiningElements[spellBar[i].name] !== undefined) {
          for (const [combiningElement, combinedElement] of combiningElements[spellBar[i].name]) {
            if (combiningElement === element) {
              if (!this.state.usePoison && combinedElement === poison) {
                continue;
              }

              this.setState({
                spellBar: [...spellBar.slice(0, i), combinedElement, ...spellBar.slice(i + 1, spellBar.length)]
              });
              return;
            }
          }
        }
      }
    }

    if (this.state.spellBar.length < this.state.maxElements) {
      this.setState({
        spellBar: [...spellBar, element]
      });
    }
  }

  countElement(element) {
    let output = 0;

    for (const barElement of this.state.spellBar) {
      if (element === barElement) {
        output++;
      }
    }

    return output;
  }

  get shieldCount() {
    return this.countElement(shield);
  }

  get earthCount() {
    return this.countElement(earth);
  }

  get iceCount() {
    return this.countElement(ice);
  }

  get arcaneCount() {
    return this.countElement(arcane);
  }

  get lifeCount() {
    return this.countElement(life);
  }

  get steamCount() {
    return this.countElement(steam);
  }

  get lightningCount() {
    return this.countElement(lightning);
  }

  get waterCount() {
    return this.countElement(water);
  }

  get fireCount() {
    return this.countElement(fire);
  }

  get coldColunt() {
    return this.countElement(cold);
  }

  get poisonCount() {
    return this.countElement(poison);
  }

  getElementNames(elements) {
    return elements.map(element => {
      return `${element.name[0].toUpperCase()}${element.name.slice(1)}`;
    }).join(' ');
  }

  render() {
    let forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 36
    }, this);

    let area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 33
    }, this);

    let weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 35
    }, this);

    let self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 33
    }, this);

    let elementsUsedSet = new Set();

    for (let element of this.state.spellBar) {
      elementsUsedSet.add(element);
    }

    let elementsUsed = Array.from(elementsUsedSet).sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    if (this.state.spellBar.length === 0) {
      // No Elements
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Wind Burst"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Casting Time:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 21
        }, this), " Standard Action, or Full Round Action", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Range:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 21
        }, this), " 60 ft.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Area:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 21
        }, this), " Cone Shaped Burst", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Duration:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }, this), " Instantaneous", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Saving Throw:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }, this), " Fortitude Negates (object) Creates a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "severe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 31
        }, this), " blast of air that originates from you, affecting all creatures in its path."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Wind Burst"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }, this);
    } else if (this.state.spellBar.length === 1 && this.state.spellBar[0] === shield) {
      // Just Shield
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Arc Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Sphere Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Wall Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Force Armor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 17
      }, this);
    } else if (this.shieldCount === 1) {
      // Shield
      let elementsExceptShield = [...elementsUsed];
      elementsExceptShield.splice(elementsExceptShield.findIndex(element => element === shield), 1);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptShield), " Armor"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }, this);

      if (this.earthCount >= 1) {
        let elementsExceptShieldAndEarth = [...elementsExceptShield];
        elementsExceptShieldAndEarth.splice(elementsExceptShieldAndEarth.findIndex(element => element === earth), 1); // Shield + Earth

        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShieldAndEarth), " Earth Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular ", this.getElementNames(elementsExceptShieldAndEarth), " Earth Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight ", this.getElementNames(elementsExceptShieldAndEarth), " Earth Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 21
        }, this);
      } else if (this.iceCount >= 1) {
        let elementsExceptShieldAndIce = [...elementsExceptShield];
        elementsExceptShieldAndIce.splice(elementsExceptShieldAndIce.findIndex(element => element === ice), 1); // Shield + Ice

        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShieldAndIce), " Ice Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular ", this.getElementNames(elementsExceptShieldAndIce), " Ice Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight ", this.getElementNames(elementsExceptShieldAndIce), " Ice Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }, this);
      } else if (this.arcaneCount >= 1 || this.lifeCount >= 1) {
        // Mines
        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular Surrounding ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight Line ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 21
        }, this);
      } else {
        // Spray Wall
        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular Surrounding ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight Line ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 21
        }, this);
      }
    } else if (this.earthCount >= 1) {
      // Projectile
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Projectile"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Quake"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Fissure"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Drop ", this.getElementNames(elementsUsed), " on head"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 17
      }, this);
    } else if (this.iceCount >= 1) {
      // Barrage
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Barrage"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Spikes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Drop ", this.getElementNames(elementsUsed), " on head"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 17
      }, this);
    } else if (this.arcaneCount >= 1 || this.lifeCount >= 1) {
      // Beam
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Beam"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Burst"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 17
      }, this);
    } else if (this.lightningCount >= 1 || this.steamCount === 0) {
      // Lightning
      let elementsExceptLightning = [...elementsUsed];
      elementsExceptLightning.splice(elementsExceptLightning.findIndex(element => element === lightning), 1);
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptLightning), " Lightning"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptLightning), " Area Lightning"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptLightning), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on Self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 17
      }, this);
    } else {
      // Spray
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Spray"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Area Spray"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on Self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 17
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          width: '170px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            height: '200px'
          },
          children: ["Max Elements: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "number",
            style: {
              width: '50px'
            },
            value: this.state.maxElements,
            onChange: event => {
              this.setState(state => {
                return {
                  maxElements: +event.target.value,
                  spellBar: state.spellBar.slice(0, +event.target.value)
                };
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 594,
            columnNumber: 39
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 606,
            columnNumber: 34
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "checkbox",
            checked: this.state.usePoison,
            onChange: event => {
              this.setState(state => {
                return {
                  usePoison: event.target.checked,
                  spellBar: []
                };
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 607,
            columnNumber: 25
          }, this), " Use Poison", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: "Spell Bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              height: '50px'
            },
            children: this.state.spellBar.map(element => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: `${element.imageLink}`,
              alt: `${element.name}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 621,
              columnNumber: 67
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 620,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            onClick: () => {
              this.setState({
                spellBar: []
              });
            },
            children: "Clear"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 623,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [[water, life, shield, cold].slice(0, 4).map(element => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            style: {
              cursor: 'pointer'
            },
            src: `${element.imageLink}`,
            onClick: event => {
              this.addToSpellBar(element);
            },
            alt: `${element.name}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 630,
            columnNumber: 29
          }, this)), "QWER", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 640,
            columnNumber: 25
          }, this), [lightning, arcane, earth, fire].slice(0, 4).map(element => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            style: {
              cursor: 'pointer'
            },
            src: `${element.imageLink}`,
            onClick: event => {
              this.addToSpellBar(element);
            },
            alt: `${element.name}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 642,
            columnNumber: 29
          }, this)), "ASDF", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 653,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_steam.webp",
            alt: "steam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 654,
            columnNumber: 25
          }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_fire.webp",
            alt: "fireImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 654,
            columnNumber: 83
          }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_water.webp",
            alt: "water"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 654,
            columnNumber: 144
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 654,
            columnNumber: 200
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_ice.webp",
            alt: "ice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 25
          }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_cold.webp",
            alt: "coldImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 79
          }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_water.webp",
            alt: "water"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 140
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 196
          }, this), this.state.usePoison ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_poison.webp",
              alt: "poison"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 55
            }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_arcane.webp",
              alt: "arcane"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 115
            }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_water.webp",
              alt: "water"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 175
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 656,
            columnNumber: 49
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          paddingLeft: '15px',
          paddingRight: '15px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Forward Cast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 21
        }, this), forward]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          paddingLeft: '15px',
          paddingRight: '15px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Area Cast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 21
        }, this), area]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          paddingLeft: '15px',
          paddingRight: '15px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Weapon Cast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 21
        }, this), weapon]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          paddingLeft: '15px',
          paddingRight: '15px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Self Cast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 21
        }, this), self]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.aa389cda7f9bf19136ae.hot-update.js.map