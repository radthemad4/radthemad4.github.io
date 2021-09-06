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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          style: {
            fontSize: 'larger'
          },
          children: "Wind Burst"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 69
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Casting Time:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 21
        }, this), " See Text", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 50
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Range:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 21
        }, this), " See Text", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 43
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Area:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 21
        }, this), " Cone Shaped Burst", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 51
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Duration:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }, this), " Instantaneous", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 51
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Saving Throw:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }, this), " Fortitude Negates (object)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 68
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 21
        }, this), "Creates a blast of air that originates from you, affecting all creatures in its path. If cast as a full round action, the wind force is one category stronger and has double the range. If cast as a swift action, the wind force is one category weaker and has half the range.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 26
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Caster Level"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Default Wind Force"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 50
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Range"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 77
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Strong"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 39
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "30 ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 54
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Severe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 39
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "60 ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 54
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Windstorm"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 40
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "120 ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 58
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Hurricane"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 40
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "240 ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 58
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Area Wind Burst"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 45
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, this);
    } else if (this.state.spellBar.length === 1 && this.state.spellBar[0] === shield) {
      // Just Shield
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Arc Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Sphere Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Wall Shield"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: "Force Armor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
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
          lineNumber: 359,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
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
            lineNumber: 372,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular ", this.getElementNames(elementsExceptShieldAndEarth), " Earth Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight ", this.getElementNames(elementsExceptShieldAndEarth), " Earth Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 383,
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
            lineNumber: 396,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular ", this.getElementNames(elementsExceptShieldAndIce), " Ice Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight ", this.getElementNames(elementsExceptShieldAndIce), " Ice Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 21
        }, this);
      } else if (this.arcaneCount >= 1 || this.lifeCount >= 1) {
        // Mines
        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular Surrounding ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight Line ", this.getElementNames(elementsExceptShield), " Mines"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 21
        }, this);
      } else {
        // Spray Wall
        forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Arc ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 21
        }, this);
        area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Circular Surrounding ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 21
        }, this);
        weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            children: ["Straight Line ", this.getElementNames(elementsExceptShield), " Wall"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 450,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 449,
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
          lineNumber: 462,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Quake"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Fissure"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Drop ", this.getElementNames(elementsUsed), " on head"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 17
      }, this);
    } else if (this.iceCount >= 1) {
      // Barrage
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Barrage"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Spikes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Drop ", this.getElementNames(elementsUsed), " on head"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 17
      }, this);
    } else if (this.arcaneCount >= 1 || this.lifeCount >= 1) {
      // Beam
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Beam"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Burst"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 534,
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
          lineNumber: 548,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptLightning), " Area Lightning"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsExceptLightning), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on Self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 17
      }, this);
    } else {
      // Spray
      forward = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Spray"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 17
      }, this);
      area = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Area Spray"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 17
      }, this);
      weapon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: [this.getElementNames(elementsUsed), " Blade"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 17
      }, this);
      self = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: ["Use ", this.getElementNames(elementsUsed), " on Self"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 592,
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
          flexShrink: 0
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
            lineNumber: 602,
            columnNumber: 39
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 614,
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
            lineNumber: 615,
            columnNumber: 25
          }, this), " Use Poison", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: "Spell Bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 627,
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
              lineNumber: 629,
              columnNumber: 67
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 628,
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
            lineNumber: 631,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 635,
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
            lineNumber: 638,
            columnNumber: 29
          }, this)), "QWER", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 648,
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
            lineNumber: 650,
            columnNumber: 29
          }, this)), "ASDF", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 660,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 661,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_steam.webp",
            alt: "steam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 25
          }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_fire.webp",
            alt: "fireImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 83
          }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_water.webp",
            alt: "water"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 144
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 200
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_ice.webp",
            alt: "ice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 25
          }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_cold.webp",
            alt: "coldImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 79
          }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "images/Element_water.webp",
            alt: "water"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 140
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 196
          }, this), this.state.usePoison ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_poison.webp",
              alt: "poison"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 55
            }, this), " = ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_arcane.webp",
              alt: "arcane"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 115
            }, this), " + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: "images/Element_water.webp",
              alt: "water"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 175
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 664,
            columnNumber: 49
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          display: 'flex'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              paddingLeft: '15px',
              paddingRight: '15px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: "Forward Cast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 29
            }, this), forward]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 670,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              paddingLeft: '15px',
              paddingRight: '15px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: "Area Cast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 29
            }, this), area]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 674,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              paddingLeft: '15px',
              paddingRight: '15px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: "Weapon Cast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 681,
              columnNumber: 29
            }, this), weapon]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 680,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              paddingLeft: '15px',
              paddingRight: '15px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: "Self Cast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 685,
              columnNumber: 29
            }, this), self]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 684,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 599,
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
//# sourceMappingURL=main.e7aeb8d835cc2dfd2e7c.hot-update.js.map