"use strict";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
}(function () {
  "use strict";
  /*!
    Copyright (C) 2016-2020 Timofey Kachalov <sanex3339@yandex.ru>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

  require("source-map-support").install(), module.exports = function (e) {
    var t = {};

    function r(o) {
      if (t[o]) return t[o].exports;
      var n = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var n in e) {
        r.d(o, n, function (t) {
          return e[t];
        }.bind(null, n));
      }
      return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 247);
  }([function (e, t) {
    e.exports = require("inversify");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Factory__ICalleeDataExtractor = "Factory<ICalleeDataExtractor>", e.Factory__IControlFlowCustomNode = "Factory<IControlFlowCustomNode>", e.Factory__IControlFlowReplacer = "Factory<IControlFlowReplacer>", e.Factory__ICustomCodeHelper = "Factory<ICustomCodeHelper>", e.Factory__ICustomCodeHelperGroup = "Factory<ICustomCodeHelperGroup>", e.Factory__IDeadCodeInjectionCustomNode = "Factory<IDeadCodeInjectionCustomNode>", e.Factory__IIdentifierNamesGenerator = "Factory<IIdentifierNamesGenerator>", e.Factory__IIdentifierObfuscatingReplacer = "Factory<IIdentifierObfuscatingReplacer>", e.Factory__INodeGuard = "Factory<INodeGuard>", e.Factory__INodeTransformer = "Factory<INodeTransformer[]>", e.Factory__IObfuscatedCode = "Factory<IObfuscatedCode>", e.Factory__IObfuscatingReplacer = "Factory<IObfuscatingReplacer>", e.Factory__IObjectExpressionKeysTransformerCustomNode = "Factory<IObjectExpressionKeysTransformerCustomNode>", e.Factory__IObjectExpressionExtractor = "Factory<IObjectExpressionExtractor>", e.Factory__TControlFlowStorage = "Factory<TControlFlowStorage>", e.IArrayUtils = "IArrayUtils", e.ICalleeDataExtractor = "ICalleeDataExtractor", e.ICallsGraphAnalyzer = "ICallsGraphAnalyzer", e.ICryptUtils = "ICryptUtils", e.ICustomCodeHelper = "ICustomCodeHelper", e.ICustomCodeHelperGroup = "ICustomCodeHelperGroup", e.IControlFlowReplacer = "IControlFlowReplacer", e.ICustomCodeHelperFormatter = "ICustomCodeHelperFormatter", e.ICustomCodeHelperObfuscator = "ICustomCodeHelperObfuscator", e.IEscapeSequenceEncoder = "IEscapeSequenceEncoder", e.IIdentifierNamesGenerator = "IIdentifierNamesGenerator", e.IIdentifierObfuscatingReplacer = "IIdentifierObfuscatingReplacer", e.IJavaScriptObfuscator = "IJavaScriptObfuscator", e.ILevelledTopologicalSorter = "ILevelledTopologicalSorter", e.ILogger = "ILogger", e.INodeGuard = "INodeGuard", e.INodeTransformer = "INodeTransformer", e.INodeTransformerNamesGroupsBuilder = "INodeTransformerNamesGroupsBuilder", e.IObfuscationEventEmitter = "IObfuscationEventEmitter", e.IObfuscatedCode = "IObfuscatedCode", e.IOptions = "IOptions", e.IOptionsNormalizer = "IOptionsNormalizer", e.IObfuscatingReplacer = "IObfuscatingReplacer", e.IPrevailingKindOfVariablesAnalyzer = "IPrevailingKindOfVariablesAnalyzer", e.IObjectExpressionExtractor = "IObjectExpressionExtractor", e.IRandomGenerator = "IRandomGenerator", e.IScopeIdentifiersTraverser = "IScopeIdentifiersTraverser", e.ISourceCode = "ISourceCode", e.IScopeAnalyzer = "IScopeAnalyzer", e.IStringArrayStorage = "IStringArrayStorage", e.IStringArrayStorageAnalyzer = "IStringArrayStorageAnalyzer", e.ITransformersRunner = "ITransformersRunner", e.Newable__ICustomNode = "Newable<ICustomNode>", e.Newable__TControlFlowStorage = "Newable<TControlFlowStorage>", e.TCustomNodeGroupStorage = "TCustomNodeGroupStorage", e.TInputOptions = "TInputOptions";
    }(t.ServiceIdentifiers || (t.ServiceIdentifiers = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(35);

    var n =
    /*#__PURE__*/
    function () {
      function n() {}

      n.isArrayPatternNode = function isArrayPatternNode(e) {
        return e.type === o.NodeType.ArrayPattern;
      };

      n.isArrowFunctionExpressionNode = function isArrowFunctionExpressionNode(e) {
        return e.type === o.NodeType.ArrowFunctionExpression;
      };

      n.isAssignmentExpressionNode = function isAssignmentExpressionNode(e) {
        return e.type === o.NodeType.AssignmentExpression;
      };

      n.isAssignmentPatternNode = function isAssignmentPatternNode(e) {
        return e.type === o.NodeType.AssignmentPattern;
      };

      n.isAwaitExpressionNode = function isAwaitExpressionNode(e) {
        return e.type === o.NodeType.AwaitExpression;
      };

      n.isBlockStatementNode = function isBlockStatementNode(e) {
        return e.type === o.NodeType.BlockStatement;
      };

      n.isBreakStatementNode = function isBreakStatementNode(e) {
        return e.type === o.NodeType.BreakStatement;
      };

      n.isCallExpressionNode = function isCallExpressionNode(e) {
        return e.type === o.NodeType.CallExpression;
      };

      n.isClassDeclarationNode = function isClassDeclarationNode(e) {
        return e.type === o.NodeType.ClassDeclaration && null !== e.id;
      };

      n.isContinueStatementNode = function isContinueStatementNode(e) {
        return e.type === o.NodeType.ContinueStatement;
      };

      n.isDirectiveNode = function isDirectiveNode(e) {
        return e.type === o.NodeType.ExpressionStatement && "directive" in e;
      };

      n.isExportNamedDeclarationNode = function isExportNamedDeclarationNode(e) {
        return e.type === o.NodeType.ExportNamedDeclaration;
      };

      n.isExpressionStatementNode = function isExpressionStatementNode(e) {
        return e.type === o.NodeType.ExpressionStatement && !("directive" in e);
      };

      n.isFunctionNode = function isFunctionNode(e) {
        return n.isFunctionDeclarationNode(e) || n.isFunctionExpressionNode(e) || n.isArrowFunctionExpressionNode(e);
      };

      n.isFunctionDeclarationNode = function isFunctionDeclarationNode(e) {
        return e.type === o.NodeType.FunctionDeclaration && null !== e.id;
      };

      n.isFunctionExpressionNode = function isFunctionExpressionNode(e) {
        return e.type === o.NodeType.FunctionExpression;
      };

      n.isIdentifierNode = function isIdentifierNode(e) {
        return e.type === o.NodeType.Identifier;
      };

      n.isImportDeclarationNode = function isImportDeclarationNode(e) {
        return e.type === o.NodeType.ImportDeclaration;
      };

      n.isImportSpecifierNode = function isImportSpecifierNode(e) {
        return e.type === o.NodeType.ImportSpecifier;
      };

      n.isLabelIdentifierNode = function isLabelIdentifierNode(e, t) {
        var r = n.isLabeledStatementNode(t) && t.label === e,
            o = n.isContinueStatementNode(t) && t.label === e,
            i = n.isBreakStatementNode(t) && t.label === e;
        return r || o || i;
      };

      n.isLabeledStatementNode = function isLabeledStatementNode(e) {
        return e.type === o.NodeType.LabeledStatement;
      };

      n.isLiteralNode = function isLiteralNode(e) {
        return e.type === o.NodeType.Literal;
      };

      n.isMemberExpressionNode = function isMemberExpressionNode(e) {
        return e.type === o.NodeType.MemberExpression;
      };

      n.isMethodDefinitionNode = function isMethodDefinitionNode(e) {
        return e.type === o.NodeType.MethodDefinition;
      };

      n.isNode = function isNode(e) {
        return e && void 0 !== !e.type;
      };

      n.isNodeWithLexicalScope = function isNodeWithLexicalScope(e) {
        return n.isProgramNode(e) || n.isFunctionNode(e);
      };

      n.isNodeWithBlockLexicalScope = function isNodeWithBlockLexicalScope(e) {
        return n.isNodeWithLexicalScope(e) || n.isBlockStatementNode(e);
      };

      n.isNodeWithLexicalScopeStatements = function isNodeWithLexicalScopeStatements(e, t) {
        return n.isProgramNode(e) || n.isBlockStatementNode(e) && n.nodesWithLexicalStatements.includes(t.type);
      };

      n.isNodeWithStatements = function isNodeWithStatements(e) {
        return n.isProgramNode(e) || n.isBlockStatementNode(e) || n.isSwitchCaseNode(e);
      };

      n.isNodeWithComments = function isNodeWithComments(e) {
        return Boolean(e.leadingComments) || Boolean(e.trailingComments);
      };

      n.isObjectPatternNode = function isObjectPatternNode(e) {
        return e.type === o.NodeType.ObjectPattern;
      };

      n.isObjectExpressionNode = function isObjectExpressionNode(e) {
        return e.type === o.NodeType.ObjectExpression;
      };

      n.isProgramNode = function isProgramNode(e) {
        return e.type === o.NodeType.Program;
      };

      n.isPropertyNode = function isPropertyNode(e) {
        return e.type === o.NodeType.Property;
      };

      n.isRestElementNode = function isRestElementNode(e) {
        return e.type === o.NodeType.RestElement;
      };

      n.isReturnStatementNode = function isReturnStatementNode(e) {
        return e.type === o.NodeType.ReturnStatement;
      };

      n.isSequenceExpressionNode = function isSequenceExpressionNode(e) {
        return e.type === o.NodeType.SequenceExpression;
      };

      n.isSuperNode = function isSuperNode(e) {
        return e.type === o.NodeType.Super;
      };

      n.isSwitchCaseNode = function isSwitchCaseNode(e) {
        return e.type === o.NodeType.SwitchCase;
      };

      n.isTaggedTemplateExpressionNode = function isTaggedTemplateExpressionNode(e) {
        return e.type === o.NodeType.TaggedTemplateExpression;
      };

      n.isTemplateLiteralNode = function isTemplateLiteralNode(e) {
        return e.type === o.NodeType.TemplateLiteral;
      };

      n.isUnaryExpressionNode = function isUnaryExpressionNode(e) {
        return e.type === o.NodeType.UnaryExpression;
      };

      n.isUseStrictOperator = function isUseStrictOperator(e) {
        return n.isDirectiveNode(e) && "use strict" === e.directive;
      };

      n.isVariableDeclarationNode = function isVariableDeclarationNode(e) {
        return e.type === o.NodeType.VariableDeclaration;
      };

      n.isVariableDeclaratorNode = function isVariableDeclaratorNode(e) {
        return e.type === o.NodeType.VariableDeclarator;
      };

      n.isWhileStatementNode = function isWhileStatementNode(e) {
        return e.type === o.NodeType.WhileStatement;
      };

      return n;
    }();

    t.NodeGuards = n, n.nodesWithLexicalStatements = [o.NodeType.ArrowFunctionExpression, o.NodeType.FunctionDeclaration, o.NodeType.FunctionExpression, o.NodeType.MethodDefinition];
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(47)),
        i = o(r(12)),
        a = r(44),
        s = r(57),
        c = r(4),
        d = r(18);

    var l =
    /*#__PURE__*/
    function () {
      function l() {}

      l.addXVerbatimPropertyTo = function addXVerbatimPropertyTo(e) {
        return e["x-verbatim-property"] = {
          content: e.raw,
          precedence: n.Precedence.Primary
        }, e;
      };

      l.clone = function clone(e) {
        return l.parentizeAst(l.cloneRecursive(e));
      };

      l.convertCodeToStructure = function convertCodeToStructure(e) {
        var t = s.ASTParserFacade.parse(e, {
          ecmaVersion: a.ecmaVersion,
          sourceType: "script"
        });
        return i.replace(t, {
          enter: function enter(e, t) {
            return l.parentizeNode(e, t), c.NodeGuards.isLiteralNode(e) && l.addXVerbatimPropertyTo(e), d.NodeMetadata.set(e, {
              ignoredNode: !1
            }), e;
          }
        }), t.body;
      };

      l.convertStructureToCode = function convertStructureToCode(e) {
        return e.reduce(function (e, t) {
          return e + n.generate(t, {
            sourceMapWithCode: !0
          }).code;
        }, "");
      };

      l.getUnaryExpressionArgumentNode = function getUnaryExpressionArgumentNode(e) {
        return c.NodeGuards.isUnaryExpressionNode(e.argument) ? l.getUnaryExpressionArgumentNode(e.argument) : e.argument;
      };

      l.parentizeAst = function parentizeAst(e) {
        return i.replace(e, {
          enter: l.parentizeNode
        }), e;
      };

      l.parentizeNode = function parentizeNode(e, t) {
        return e.parentNode = null != t ? t : e, e;
      };

      l.cloneRecursive = function cloneRecursive(e) {
        if (null === e) return e;
        var t = {};
        return Object.keys(e).forEach(function (r) {
          if ("parentNode" === r) return;
          var o = e[r];
          var n;
          n = null === o || _instanceof(o, RegExp) ? o : Array.isArray(o) ? o.map(l.cloneRecursive) : "object" == _typeof(o) ? l.cloneRecursive(o) : o, t[r] = n;
        }), t;
      };

      return l;
    }();

    t.NodeUtils = l;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = {
      configurable: !0,
      enumerable: !0
    };

    function n(e, t, r) {
      Reflect.hasMetadata(e, r) || Reflect.defineMetadata(e, t, r);
    }

    t.initializable = function (e) {
      if (e === void 0) {
        e = "initialize";
      }

      var t = Object.keys(this)[0];
      return function (r, i) {
        var a = r[e];
        if (!a || "function" != typeof a) throw new Error("`" + e + "` method with initialization logic not " + ("found. `@" + t + "` decorator requires `" + e + "` method"));
        return n("_initialized", !1, r), n("_initializablePropertiesSet", new Set(), r), n("_wrappedMethodsSet", new Set(), r), function (e, t) {
          var r = Object.getOwnPropertyNames(e),
              n = [t, "constructor"];
          r.forEach(function (r) {
            var i;
            var a = Reflect.getMetadata("_initializablePropertiesSet", e),
                s = Reflect.getMetadata("_wrappedMethodsSet", e);
            if (n.includes(r) || a.has(r) || s.has(r)) return;
            if ("function" != typeof e[r]) return;
            var c = null !== (i = Object.getOwnPropertyDescriptor(e, r)) && void 0 !== i ? i : o,
                d = c.value;
            Object.defineProperty(e, r, Object.assign(Object.assign({}, c), {
              value: function value() {
                if (!Reflect.getMetadata("_initialized", this)) throw new Error("Class should be initialized with `" + t + "()` method");
                return d.apply(this, arguments);
              }
            })), s.add(r);
          });
        }(r, e), function (e, t, r) {
          var n;
          var i = null !== (n = Object.getOwnPropertyDescriptor(e, t)) && void 0 !== n ? n : o,
              a = i.value;
          Object.defineProperty(e, t, Object.assign(Object.assign({}, i), {
            value: function value() {
              Reflect.defineMetadata("_initialized", !0, this);
              var e = a.apply(this, arguments);
              return this[r], e;
            }
          }));
        }(r, e, i), function (e, t) {
          var r;
          Reflect.getMetadata("_initializablePropertiesSet", e).add(t);
          var n = "_" + t.toString(),
              i = null !== (r = Object.getOwnPropertyDescriptor(e, n)) && void 0 !== r ? r : o;
          return Object.defineProperty(e, t, Object.assign(Object.assign({}, i), {
            get: function get() {
              if (void 0 === this[n]) throw new Error("Property `" + t.toString() + "` is not initialized! Initialize it first!");
              return this[n];
            },
            set: function set(e) {
              this[n] = e;
            }
          })), i;
        }(r, i);
      };
    };
  }, function (e, t, r) {
    var o = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(47)),
        i = r(35);

    var a =
    /*#__PURE__*/
    function () {
      function a() {}

      a.programNode = function programNode(e) {
        if (e === void 0) {
          e = [];
        }

        return {
          type: i.NodeType.Program,
          body: e,
          sourceType: "script",
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.arrayExpressionNode = function arrayExpressionNode(e) {
        if (e === void 0) {
          e = [];
        }

        return {
          type: i.NodeType.ArrayExpression,
          elements: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.assignmentExpressionNode = function assignmentExpressionNode(e, t, r) {
        return {
          type: i.NodeType.AssignmentExpression,
          operator: e,
          left: t,
          right: r,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.binaryExpressionNode = function binaryExpressionNode(e, t, r) {
        return {
          type: i.NodeType.BinaryExpression,
          operator: e,
          left: t,
          right: r,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.blockStatementNode = function blockStatementNode(e) {
        if (e === void 0) {
          e = [];
        }

        return {
          type: i.NodeType.BlockStatement,
          body: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.breakStatement = function breakStatement(e) {
        return {
          type: i.NodeType.BreakStatement,
          label: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.callExpressionNode = function callExpressionNode(e, t) {
        if (t === void 0) {
          t = [];
        }

        return {
          type: i.NodeType.CallExpression,
          callee: e,
          arguments: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.continueStatement = function continueStatement(e) {
        return {
          type: i.NodeType.ContinueStatement,
          label: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.directiveNode = function directiveNode(e, t) {
        return {
          type: i.NodeType.ExpressionStatement,
          expression: e,
          directive: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.expressionStatementNode = function expressionStatementNode(e) {
        return {
          type: i.NodeType.ExpressionStatement,
          expression: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.functionDeclarationNode = function functionDeclarationNode(e, t, r) {
        return {
          type: i.NodeType.FunctionDeclaration,
          id: a.identifierNode(e),
          params: t,
          body: r,
          generator: !1,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.functionExpressionNode = function functionExpressionNode(e, t) {
        return {
          type: i.NodeType.FunctionExpression,
          params: e,
          body: t,
          generator: !1,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.ifStatementNode = function ifStatementNode(e, t, r) {
        return Object.assign(Object.assign({
          type: i.NodeType.IfStatement,
          test: e,
          consequent: t
        }, r && {
          alternate: r
        }), {
          metadata: {
            ignoredNode: !1
          }
        });
      };

      a.identifierNode = function identifierNode(e) {
        return {
          type: i.NodeType.Identifier,
          name: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.importDeclarationNode = function importDeclarationNode(e, t) {
        return {
          type: i.NodeType.ImportDeclaration,
          specifiers: e,
          source: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.literalNode = function literalNode(e, t) {
        return t = void 0 !== t ? t : "'" + e + "'", {
          type: i.NodeType.Literal,
          value: e,
          raw: t,
          "x-verbatim-property": {
            content: t,
            precedence: n.Precedence.Primary
          },
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.logicalExpressionNode = function logicalExpressionNode(e, t, r) {
        return {
          type: i.NodeType.LogicalExpression,
          operator: e,
          left: t,
          right: r,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.memberExpressionNode = function memberExpressionNode(e, t, r) {
        if (r === void 0) {
          r = !1;
        }

        return {
          type: i.NodeType.MemberExpression,
          computed: r,
          object: e,
          property: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.methodDefinitionNode = function methodDefinitionNode(e, t, r, o) {
        return {
          type: i.NodeType.MethodDefinition,
          key: e,
          value: t,
          kind: r,
          computed: o,
          static: !1,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.objectExpressionNode = function objectExpressionNode(e) {
        return {
          type: i.NodeType.ObjectExpression,
          properties: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.propertyNode = function propertyNode(e, t, r) {
        if (r === void 0) {
          r = !1;
        }

        return {
          type: i.NodeType.Property,
          key: e,
          value: t,
          kind: "init",
          method: !1,
          shorthand: !1,
          computed: r,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.returnStatementNode = function returnStatementNode(e) {
        return {
          type: i.NodeType.ReturnStatement,
          argument: e,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.switchStatementNode = function switchStatementNode(e, t) {
        return {
          type: i.NodeType.SwitchStatement,
          discriminant: e,
          cases: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.switchCaseNode = function switchCaseNode(e, t) {
        return {
          type: i.NodeType.SwitchCase,
          test: e,
          consequent: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.unaryExpressionNode = function unaryExpressionNode(e, t, r) {
        if (r === void 0) {
          r = !0;
        }

        return {
          type: i.NodeType.UnaryExpression,
          operator: e,
          argument: t,
          prefix: r,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.updateExpressionNode = function updateExpressionNode(e, t) {
        return {
          type: i.NodeType.UpdateExpression,
          operator: e,
          argument: t,
          prefix: !1,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.variableDeclarationNode = function variableDeclarationNode(e, t) {
        if (e === void 0) {
          e = [];
        }

        if (t === void 0) {
          t = "var";
        }

        return {
          type: i.NodeType.VariableDeclaration,
          declarations: e,
          kind: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.variableDeclaratorNode = function variableDeclaratorNode(e, t) {
        return {
          type: i.NodeType.VariableDeclarator,
          id: e,
          init: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      a.whileStatementNode = function whileStatementNode(e, t) {
        return {
          type: i.NodeType.WhileStatement,
          test: e,
          body: t,
          metadata: {
            ignoredNode: !1
          }
        };
      };

      return a;
    }();

    t.NodeFactory = a;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Initializing = "Initializing", e.Preparing = "Preparing", e.DeadCodeInjection = "DeadCodeInjection", e.ControlFlowFlattening = "ControlFlowFlattening", e.Converting = "Converting", e.Obfuscating = "Obfuscating", e.Finalizing = "Finalizing";
    }(t.TransformationStage || (t.TransformationStage = {}));
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3);

    var u = function u(e, t) {
      this.randomGenerator = e, this.options = t;
    };

    u = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], u), t.AbstractNodeTransformer = u;
  }, function (e, t) {
    e.exports = require("estraverse");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3);

    var y =
    /*#__PURE__*/
    function () {
      function y(e, t, r, o) {
        this.cachedNode = null, this.identifierNamesGenerator = e(o), this.customCodeHelperFormatter = t, this.randomGenerator = r, this.options = o;
      }

      var _proto = y.prototype;

      _proto.getNode = function getNode() {
        return this.cachedNode || (this.cachedNode = this.customCodeHelperFormatter.formatStructure(this.getNodeStructure())), this.cachedNode;
      };

      return y;
    }();

    y = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], y), t.AbstractCustomNode = y;
  }, function (e, t, r) {
    var _o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(2),
        b = r(3),
        N = r(117),
        I = r(118);

    var v = _o =
    /*#__PURE__*/
    function () {
      function o(e, t, r, _o2, n) {
        this.cachedNode = null, this.identifierNamesGenerator = e(n), this.customCodeHelperFormatter = t, this.customCodeHelperObfuscator = r, this.randomGenerator = _o2, this.options = n;
      }

      var _proto2 = o.prototype;

      _proto2.getNode = function getNode() {
        if (!this.cachedNode) {
          var _e = this.getCodeHelperTemplate();

          this.cachedNode = this.customCodeHelperFormatter.formatStructure(this.getNodeStructure(_e));
        }

        return this.cachedNode;
      };

      _proto2.getGlobalVariableTemplate = function getGlobalVariableTemplate() {
        return this.randomGenerator.getRandomGenerator().pickone(_o.globalVariableTemplateFunctions);
      };

      _proto2.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return "";
      };

      return o;
    }();

    v.globalVariableTemplateFunctions = [N.GlobalVariableTemplate1(), I.GlobalVariableTemplate2()], v = _o = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? i : Object, "function" == typeof (a = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? a : Object, "function" == typeof (s = void 0 !== b.IRandomGenerator && b.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== h.IOptions && h.IOptions) ? c : Object])], v), t.AbstractCustomCodeHelper = v;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(75),
        a = r(85),
        s = r(98),
        c = r(109),
        d = r(149),
        l = r(162),
        f = r(163),
        u = r(167),
        p = r(170),
        m = r(171),
        g = r(180),
        y = r(202),
        h = r(217),
        b = r(222),
        N = r(232),
        I = r(73),
        v = r(236),
        S = r(238),
        O = r(239),
        C = r(240);

    t.InversifyContainerFacade =
    /*#__PURE__*/
    function () {
      function _class() {
        this.container = new o.Container();
      }

      _class.getFactory = function getFactory(e) {
        return function (t) {
          return function (r) {
            return t.container.getNamed(e, r);
          };
        };
      };

      _class.getCacheFactory = function getCacheFactory(e) {
        return function (t) {
          var r = new Map();
          return function (o) {
            if (r.has(o)) return r.get(o);
            var n = t.container.getNamed(e, o);
            return r.set(o, n), n;
          };
        };
      };

      _class.getConstructorFactory = function getConstructorFactory(e) {
        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        return function (r) {
          var o = new Map(),
              n = [];
          return function (i) {
            if (t.forEach(function (e, t) {
              n[t] || (n[t] = r.container.get(e));
            }), o.has(i)) return _construct(o.get(i), n);
            var a = r.container.getNamed(e, i);
            return o.set(i, a), _construct(a, n);
          };
        };
      };

      var _proto3 = _class.prototype;

      _proto3.get = function get(e) {
        return this.container.get(e);
      };

      _proto3.getNamed = function getNamed(e, t) {
        return this.container.getNamed(e, t);
      };

      _proto3.load = function load(e, t, r) {
        this.container.bind(n.ServiceIdentifiers.ISourceCode).toDynamicValue(function () {
          return new O.SourceCode(e, t);
        }).inSingletonScope(), this.container.bind(n.ServiceIdentifiers.TInputOptions).toDynamicValue(function () {
          return r;
        }).inSingletonScope(), this.container.bind(n.ServiceIdentifiers.ILogger).to(I.Logger).inSingletonScope(), this.container.bind(n.ServiceIdentifiers.IJavaScriptObfuscator).to(N.JavaScriptObfuscator).inSingletonScope(), this.container.bind(n.ServiceIdentifiers.ITransformersRunner).to(C.TransformersRunner).inSingletonScope(), this.container.bind(n.ServiceIdentifiers.IObfuscatedCode).to(S.ObfuscatedCode), this.container.bind(n.ServiceIdentifiers.Factory__IObfuscatedCode).toFactory(function (e) {
          return function (t, r) {
            var o = e.container.get(n.ServiceIdentifiers.IObfuscatedCode);
            return o.initialize(t, r), o;
          };
        }), this.container.bind(n.ServiceIdentifiers.IObfuscationEventEmitter).to(v.ObfuscationEventEmitter).inSingletonScope(), this.container.load(i.analyzersModule), this.container.load(a.controlFlowTransformersModule), this.container.load(s.convertingTransformersModule), this.container.load(c.customCodeHelpersModule), this.container.load(d.customNodesModule), this.container.load(l.finalizingTransformersModule), this.container.load(f.generatorsModule), this.container.load(u.nodeModule), this.container.load(p.nodeTransformersModule), this.container.load(m.obfuscatingTransformersModule), this.container.load(g.optionsModule), this.container.load(y.preparingTransformersModule), this.container.load(h.storagesModule), this.container.load(b.utilsModule);
      };

      _proto3.unload = function unload() {
        this.container.unbindAll();
      };

      return _class;
    }();
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(4);

    var n =
    /*#__PURE__*/
    function () {
      function n() {}

      n.getParentNodeWithStatements = function getParentNodeWithStatements(e) {
        return n.getParentNodesWithStatementsRecursive(e, 1)[0];
      };

      n.getParentNodesWithStatements = function getParentNodesWithStatements(e) {
        return n.getParentNodesWithStatementsRecursive(e);
      };

      n.getNextSiblingStatement = function getNextSiblingStatement(e) {
        return n.getSiblingStatementByOffset(e, 1);
      };

      n.getPreviousSiblingStatement = function getPreviousSiblingStatement(e) {
        return n.getSiblingStatementByOffset(e, -1);
      };

      n.getRootStatementOfNode = function getRootStatementOfNode(e) {
        if (o.NodeGuards.isProgramNode(e)) throw new Error("Unable to find root statement for `Program` node");
        var t = e.parentNode;
        if (!t) throw new ReferenceError("`parentNode` property of given node is `undefined`");
        return o.NodeGuards.isNodeWithStatements(t) ? e : n.getRootStatementOfNode(t);
      };

      n.getScopeOfNode = function getScopeOfNode(e) {
        var t = e.parentNode;
        if (!t) throw new ReferenceError("`parentNode` property of given node is `undefined`");
        return o.NodeGuards.isNodeWithStatements(t) ? t : n.getScopeOfNode(t);
      };

      n.getParentNodesWithStatementsRecursive = function getParentNodesWithStatementsRecursive(e, t, r, i) {
        if (t === void 0) {
          t = 1 / 0;
        }

        if (r === void 0) {
          r = [];
        }

        if (i === void 0) {
          i = 0;
        }

        if (r.length >= t) return r;
        var a = e.parentNode;
        if (!a) throw new ReferenceError("`parentNode` property of given node is `undefined`");
        return (o.NodeGuards.isProgramNode(e) || o.NodeGuards.isNodeWithLexicalScopeStatements(e, a) && i > 0) && r.push(e), e !== a ? n.getParentNodesWithStatementsRecursive(a, t, r, ++i) : r;
      };

      n.getSiblingStatementByOffset = function getSiblingStatementByOffset(e, t) {
        var r = n.getScopeOfNode(e),
            i = o.NodeGuards.isSwitchCaseNode(r) ? r.consequent : r.body,
            a = i.indexOf(e);
        return i[a + t] || null;
      };

      return n;
    }();

    t.NodeStatementUtils = n;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o =
    /*#__PURE__*/
    function () {
      function o() {}

      o.set = function set(e, t) {
        var r;
        e.metadata = Object.assign(null !== (r = e.metadata) && void 0 !== r ? r : {}, t);
      };

      o.get = function get(e, t) {
        return void 0 !== e.metadata ? e.metadata[t] : void 0;
      };

      o.isIgnoredNode = function isIgnoredNode(e) {
        return !0 === o.get(e, "ignoredNode");
      };

      o.isReplacedLiteral = function isReplacedLiteral(e) {
        return !0 === o.get(e, "replacedLiteral");
      };

      return o;
    }();

    t.NodeMetadata = o;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BinaryExpressionFunctionNode = "BinaryExpressionFunctionNode", e.BlockStatementControlFlowFlatteningNode = "BlockStatementControlFlowFlatteningNode", e.CallExpressionControlFlowStorageCallNode = "CallExpressionControlFlowStorageCallNode", e.CallExpressionFunctionNode = "CallExpressionFunctionNode", e.ControlFlowStorageNode = "ControlFlowStorageNode", e.ExpressionWithOperatorControlFlowStorageCallNode = "ExpressionWithOperatorControlFlowStorageCallNode", e.LogicalExpressionFunctionNode = "LogicalExpressionFunctionNode", e.StringLiteralControlFlowStorageCallNode = "StringLiteralControlFlowStorageCallNode", e.StringLiteralNode = "StringLiteralNode";
    }(t.ControlFlowCustomNode || (t.ControlFlowCustomNode = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(4);

    var n =
    /*#__PURE__*/
    function () {
      function n() {}

      n.append = function append(e, t) {
        t = n.parentizeScopeStatementsBeforeAppend(e, t), n.setScopeStatements(e, [].concat(n.getScopeStatements(e), t));
      };

      n.appendToOptimalBlockScope = function appendToOptimalBlockScope(e, t, r, o) {
        if (o === void 0) {
          o = 0;
        }

        var i = e.length ? n.getOptimalBlockScope(e, o) : t;
        n.prepend(i, r);
      };

      n.getOptimalBlockScope = function getOptimalBlockScope(e, t, r) {
        if (r === void 0) {
          r = 1 / 0;
        }

        var o = e[t];
        if (r <= 0) throw new Error("Invalid `deep` argument value. Value should be bigger then 0.");
        return r > 1 && o.callsGraph.length ? n.getOptimalBlockScope(o.callsGraph, 0, --r) : o.callee;
      };

      n.insertBefore = function insertBefore(e, t, r) {
        var o = n.getScopeStatements(e).indexOf(r);
        n.insertAtIndex(e, t, o);
      };

      n.insertAfter = function insertAfter(e, t, r) {
        var o = n.getScopeStatements(e).indexOf(r);
        n.insertAtIndex(e, t, o + 1);
      };

      n.insertAtIndex = function insertAtIndex(e, t, r) {
        t = n.parentizeScopeStatementsBeforeAppend(e, t), n.setScopeStatements(e, [].concat(n.getScopeStatements(e).slice(0, r), t, n.getScopeStatements(e).slice(r)));
      };

      n.prepend = function prepend(e, t) {
        t = n.parentizeScopeStatementsBeforeAppend(e, t), n.setScopeStatements(e, [].concat(t, n.getScopeStatements(e)));
      };

      n.getScopeStatements = function getScopeStatements(e) {
        return o.NodeGuards.isSwitchCaseNode(e) ? e.consequent : e.body;
      };

      n.parentizeScopeStatementsBeforeAppend = function parentizeScopeStatementsBeforeAppend(e, t) {
        return t.forEach(function (t) {
          t.parentNode = e;
        }), t;
      };

      n.setScopeStatements = function setScopeStatements(e, t) {
        o.NodeGuards.isSwitchCaseNode(e) ? e.consequent = t : e.body = t;
      };

      return n;
    }();

    t.NodeAppender = n;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(4);

    var n =
    /*#__PURE__*/
    function () {
      function n() {}

      n.getLexicalScope = function getLexicalScope(e) {
        return n.getLexicalScopesRecursive(e, 1)[0];
      };

      n.getLexicalScopes = function getLexicalScopes(e) {
        return n.getLexicalScopesRecursive(e);
      };

      n.getLexicalScopesRecursive = function getLexicalScopesRecursive(e, t, r, i) {
        if (t === void 0) {
          t = 1 / 0;
        }

        if (r === void 0) {
          r = [];
        }

        if (i === void 0) {
          i = 0;
        }

        if (r.length >= t) return r;
        var a = e.parentNode;
        if (!a) throw new ReferenceError("`parentNode` property of given node is `undefined`");
        return o.NodeGuards.isNodeWithLexicalScope(e) && r.push(e), e !== a ? n.getLexicalScopesRecursive(a, t, r, ++i) : r;
      };

      return n;
    }();

    t.NodeLexicalScopeUtils = n;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(31);
    t.ObfuscationTarget = o.MakeEnum({
      Browser: "browser",
      BrowserNoEval: "browser-no-eval",
      Node: "node"
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BlockStatementControlFlowTransformer = "BlockStatementControlFlowTransformer", e.CommentsTransformer = "CommentsTransformer", e.CustomCodeHelpersTransformer = "CustomCodeHelpersTransformer", e.DeadCodeInjectionTransformer = "DeadCodeInjectionTransformer", e.EvalCallExpressionTransformer = "EvalCallExpressionTransformer", e.FunctionControlFlowTransformer = "FunctionControlFlowTransformer", e.LabeledStatementTransformer = "LabeledStatementTransformer", e.LiteralTransformer = "LiteralTransformer", e.MemberExpressionTransformer = "MemberExpressionTransformer", e.MetadataTransformer = "MetadataTransformer", e.MethodDefinitionTransformer = "MethodDefinitionTransformer", e.ObfuscatingGuardsTransformer = "ObfuscatingGuardsTransformer", e.ObjectExpressionKeysTransformer = "ObjectExpressionKeysTransformer", e.ObjectExpressionTransformer = "ObjectExpressionTransformer", e.ParentificationTransformer = "ParentificationTransformer", e.ScopeIdentifiersTransformer = "ScopeIdentifiersTransformer", e.SplitStringTransformer = "SplitStringTransformer", e.TemplateLiteralTransformer = "TemplateLiteralTransformer", e.VariablePreserveTransformer = "VariablePreserveTransformer";
    }(t.NodeTransformer || (t.NodeTransformer = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.AfterObfuscation = "afterObfuscation", e.BeforeObfuscation = "beforeObfuscation";
    }(t.ObfuscationEvent || (t.ObfuscationEvent = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o =
    /*#__PURE__*/
    function () {
      function o() {}

      o.buildVersionMessage = function buildVersionMessage(e, t) {
        return e && t ? e + "_" + new Date(parseInt(t, 10)).toISOString() : "unknown";
      };

      o.extractDomainFrom = function extractDomainFrom(e) {
        var t;
        return t = e.includes("://") || 0 === e.indexOf("//") ? e.split("/")[2] : e.split("/")[0], t = t.split(":")[0], t;
      };

      return o;
    }();

    t.Utils = o, o.hexadecimalPrefix = "0x";
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.CallsControllerFunction = "CallsControllerFunction", e.ConsoleOutputDisable = "ConsoleOutputDisable", e.DebugProtectionFunctionCall = "DebugProtectionFunctionCall", e.DebugProtectionFunctionInterval = "DebugProtectionFunctionInterval", e.DebugProtectionFunction = "DebugProtectionFunction", e.DomainLock = "DomainLock", e.SelfDefendingUnicode = "SelfDefendingUnicode", e.StringArrayCallsWrapper = "StringArrayCallsWrapper", e.StringArray = "StringArray", e.StringArrayRotateFunction = "StringArrayRotateFunction";
    }(t.CustomCodeHelper || (t.CustomCodeHelper = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(31);
    t.StringArrayEncoding = o.MakeEnum({
      Base64: "base64",
      Rc4: "rc4"
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(5),
        u = r(2),
        p = r(3);

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t, r) {
        this.identifierNamesGenerator = e(r), this.randomGenerator = t, this.options = r;
      }

      var _proto4 = m.prototype;

      _proto4.getAppendEvent = function getAppendEvent() {
        return this.appendEvent;
      };

      _proto4.getCustomCodeHelpers = function getCustomCodeHelpers() {
        return this.customCodeHelpers;
      };

      _proto4.appendCustomNodeIfExist = function appendCustomNodeIfExist(e, t) {
        var r = this.customCodeHelpers.get(e);
        r && t(r);
      };

      _proto4.getRandomCallsGraphIndex = function getRandomCallsGraphIndex(e) {
        return this.randomGenerator.getRandomInteger(0, Math.max(0, Math.round(e - 1)));
      };

      return m;
    }();

    m = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), c(1, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(2, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (o = void 0 !== f.TIdentifierNamesGeneratorFactory && f.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.IRandomGenerator && p.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== u.IOptions && u.IOptions) ? i : Object])], m), t.AbstractCustomCodeHelperGroup = m;
  }, function (e, t) {
    e.exports = require("@gradecam/tsenum");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(31);
    t.IdentifierNamesGenerator = o.MakeEnum({
      DictionaryIdentifierNamesGenerator: "dictionary",
      HexadecimalIdentifierNamesGenerator: "hexadecimal",
      MangledIdentifierNamesGenerator: "mangled"
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(31);
    t.SourceMapMode = o.MakeEnum({
      Inline: "inline",
      Separate: "separate"
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.ArrayExpression = "ArrayExpression", e.ArrayPattern = "ArrayPattern", e.ArrowFunctionExpression = "ArrowFunctionExpression", e.AssignmentExpression = "AssignmentExpression", e.AssignmentPattern = "AssignmentPattern", e.AwaitExpression = "AwaitExpression", e.BinaryExpression = "BinaryExpression", e.BlockStatement = "BlockStatement", e.BreakStatement = "BreakStatement", e.CallExpression = "CallExpression", e.CatchClause = "CatchClause", e.ClassDeclaration = "ClassDeclaration", e.ConditionalExpression = "ConditionalExpression", e.ContinueStatement = "ContinueStatement", e.ExportNamedDeclaration = "ExportNamedDeclaration", e.ExpressionStatement = "ExpressionStatement", e.ForStatement = "ForStatement", e.ForInStatement = "ForInStatement", e.ForOfStatement = "ForOfStatement", e.FunctionDeclaration = "FunctionDeclaration", e.FunctionExpression = "FunctionExpression", e.Identifier = "Identifier", e.IfStatement = "IfStatement", e.ImportDeclaration = "ImportDeclaration", e.ImportDefaultSpecifier = "ImportDefaultSpecifier", e.ImportNamespaceSpecifier = "ImportNamespaceSpecifier", e.ImportSpecifier = "ImportSpecifier", e.LabeledStatement = "LabeledStatement", e.Literal = "Literal", e.LogicalExpression = "LogicalExpression", e.MemberExpression = "MemberExpression", e.MethodDefinition = "MethodDefinition", e.ObjectExpression = "ObjectExpression", e.ObjectPattern = "ObjectPattern", e.Program = "Program", e.Property = "Property", e.RestElement = "RestElement", e.ReturnStatement = "ReturnStatement", e.SequenceExpression = "SequenceExpression", e.Super = "Super", e.SwitchCase = "SwitchCase", e.SwitchStatement = "SwitchStatement", e.TaggedTemplateExpression = "TaggedTemplateExpression", e.TemplateLiteral = "TemplateLiteral", e.TryStatement = "TryStatement", e.UnaryExpression = "UnaryExpression", e.UpdateExpression = "UpdateExpression", e.VariableDeclaration = "VariableDeclaration", e.VariableDeclarator = "VariableDeclarator", e.WhileStatement = "WhileStatement";
    }(t.NodeType || (t.NodeType = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.NumberUtils =
    /*#__PURE__*/
    function () {
      function _class2() {}

      _class2.toHex = function toHex(e) {
        return e.toString(16);
      };

      _class2.isCeil = function isCeil(e) {
        return e % 1 == 0;
      };

      return _class2;
    }();
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BaseIdentifierObfuscatingReplacer = "BaseIdentifierObfuscatingReplacer";
    }(t.IdentifierObfuscatingReplacer || (t.IdentifierObfuscatingReplacer = {}));
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(2);

    var l = function l(e) {
      this.options = e;
    };

    l = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.IOptions)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.IOptions && d.IOptions) ? o : Object])], l), t.AbstractObfuscatingReplacer = l;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(33),
        n = r(23),
        i = r(34);
    t.DEFAULT_PRESET = Object.freeze({
      compact: !0,
      config: "",
      controlFlowFlattening: !1,
      controlFlowFlatteningThreshold: .75,
      deadCodeInjection: !1,
      deadCodeInjectionThreshold: .4,
      debugProtection: !1,
      debugProtectionInterval: !1,
      disableConsoleOutput: !1,
      domainLock: [],
      exclude: [],
      identifierNamesGenerator: o.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
      identifiersPrefix: "",
      identifiersDictionary: [],
      inputFileName: "",
      log: !1,
      renameGlobals: !1,
      reservedNames: [],
      reservedStrings: [],
      rotateStringArray: !0,
      seed: 0,
      selfDefending: !1,
      shuffleStringArray: !0,
      sourceMap: !1,
      sourceMapBaseUrl: "",
      sourceMapFileName: "",
      sourceMapMode: i.SourceMapMode.Separate,
      splitStrings: !1,
      splitStringsChunkLength: 10,
      stringArray: !0,
      stringArrayEncoding: !1,
      stringArrayThreshold: .75,
      target: n.ObfuscationTarget.Browser,
      transformObjectKeys: !1,
      unicodeEscapeSequence: !1
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Dot = ".", e.Comma = ",";
    }(t.StringSeparator || (t.StringSeparator = {}));
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n() {};

    n = o([r(0).injectable()], n), t.AbstractCalleeDataExtractor = n;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ecmaVersion = 11;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(4);

    t.NodeLiteralUtils =
    /*#__PURE__*/
    function () {
      function _class3() {}

      _class3.isProhibitedLiteralNode = function isProhibitedLiteralNode(e, t) {
        return !(!o.NodeGuards.isPropertyNode(t) || t.computed || t.key !== e) || !!o.NodeGuards.isImportDeclarationNode(t);
      };

      return _class3;
    }();
  }, function (e, t, r) {
    var _o3,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(19),
        p = r(2),
        m = r(3);

    var g = _o3 =
    /*#__PURE__*/
    function () {
      function o(e, t, r) {
        this.replacerDataByControlFlowStorageId = new Map(), this.controlFlowCustomNodeFactory = e, this.randomGenerator = t, this.options = r;
      }

      o.getStorageKeysByIdForCurrentStorage = function getStorageKeysByIdForCurrentStorage(e, t) {
        var r;
        return r = e.has(t) ? e.get(t) : new Map(), r;
      };

      var _proto5 = o.prototype;

      _proto5.insertCustomNodeToControlFlowStorage = function insertCustomNodeToControlFlowStorage(e, t, r, n) {
        var _this = this;

        var i = t.getStorageId(),
            a = _o3.getStorageKeysByIdForCurrentStorage(this.replacerDataByControlFlowStorageId, i),
            s = a.get(r);

        if (this.randomGenerator.getMathRandom() < n && s && s.length) return this.randomGenerator.getRandomGenerator().pickone(s);

        var c = function c(e) {
          var r = _this.randomGenerator.getRandomString(e);

          return t.getStorage().has(r) ? c(e) : r;
        },
            d = c(5);

        return a.set(r, [d]), this.replacerDataByControlFlowStorageId.set(i, a), t.set(d, e), d;
      };

      return o;
    }();

    g = _o3 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TControlFlowCustomNodeFactory && u.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], g), t.AbstractControlFlowReplacer = g;
  }, function (e, t) {
    e.exports = require("escodegen");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GlobalVariableNoEvalTemplate = function () {
      return "\n        const that = (typeof window !== 'undefined'\n           ? window\n           : (typeof process === 'object' &&\n              typeof require === 'function' &&\n              typeof global === 'object')\n             ? global\n             : this);\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(4);

    var p =
    /*#__PURE__*/
    function () {
      function p(e, t) {
        this.preservedNamesSet = new Set(), this.lexicalScopesPreservedNamesMap = new Map(), this.randomGenerator = e, this.options = t;
      }

      var _proto6 = p.prototype;

      _proto6.generate = function generate(e, t) {
        return u.NodeGuards.isProgramNode(e) ? this.generateForGlobalScope() : this.generateForLexicalScope(e);
      };

      _proto6.preserveName = function preserveName(e) {
        this.preservedNamesSet.add(e);
      };

      _proto6.preserveNameForLexicalScope = function preserveNameForLexicalScope(e, t) {
        var r;
        var o = null !== (r = this.lexicalScopesPreservedNamesMap.get(t)) && void 0 !== r ? r : new Set();
        o.add(e), this.lexicalScopesPreservedNamesMap.set(t, o);
      };

      _proto6.isValidIdentifierName = function isValidIdentifierName(e) {
        return this.notReservedName(e) && !this.preservedNamesSet.has(e);
      };

      _proto6.isValidIdentifierNameInLexicalScopes = function isValidIdentifierNameInLexicalScopes(e, t) {
        var r;
        if (!this.isValidIdentifierName(e)) return !1;

        for (var _iterator = t, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var _o4 = _ref;

          var _t = null !== (r = this.lexicalScopesPreservedNamesMap.get(_o4)) && void 0 !== r ? r : null;

          if (_t && _t.has(e)) return !1;
        }

        return !0;
      };

      _proto6.notReservedName = function notReservedName(e) {
        return !this.options.reservedNames.length || !this.options.reservedNames.some(function (t) {
          return null !== new RegExp(t, "g").exec(e);
        });
      };

      return p;
    }();

    p = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], p), t.AbstractIdentifierNamesGenerator = p;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(2),
        u = r(3),
        p = r(7);

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t) {
        this.randomGenerator = e, this.options = t;
      }

      var _proto7 = m.prototype;

      _proto7.initialize = function initialize() {
        this.storage = new Map(), this.storageId = this.randomGenerator.getRandomString(6);
      };

      _proto7.get = function get(e) {
        return this.storage.get(e);
      };

      _proto7.getOrThrow = function getOrThrow(e) {
        var t = this.get(e);
        if (!t) throw new Error("No value found in map storage with key `" + e + "`");
        return t;
      };

      _proto7.getKeyOf = function getKeyOf(e) {
        for (var _iterator2 = this.storage, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var _ref3 = _ref2,
              _t2 = _ref3[0],
              _r = _ref3[1];
          if (e === _r) return _t2;
        }

        return null;
      };

      _proto7.getLength = function getLength() {
        return this.storage.size;
      };

      _proto7.getStorage = function getStorage() {
        return this.storage;
      };

      _proto7.getStorageId = function getStorageId() {
        return this.storageId;
      };

      _proto7.has = function has(e) {
        return this.storage.has(e);
      };

      _proto7.mergeWith = function mergeWith(e, t) {
        if (t === void 0) {
          t = !1;
        }

        this.storage = new Map([].concat(this.storage, e.getStorage())), t && (this.storageId = e.getStorageId());
      };

      _proto7.set = function set(e, t) {
        this.storage.set(e, t);
      };

      return m;
    }();

    a([p.initializable(), s("design:type", String)], m.prototype, "storageId", void 0), a([p.initializable(), s("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], m.prototype, "storage", void 0), a([d.postConstruct(), s("design:type", Function), s("design:paramtypes", []), s("design:returntype", void 0)], m.prototype, "initialize", null), m = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(1, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== u.IRandomGenerator && u.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== f.IOptions && f.IOptions) ? i : Object])], m), t.MapStorage = m;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(72);
    var o = r(1),
        n = r(16);

    var i =
    /*#__PURE__*/
    function () {
      function i() {}

      i.obfuscate = function obfuscate(e, t) {
        if (t === void 0) {
          t = {};
        }

        var r = new n.InversifyContainerFacade();
        r.load(e, "", t);
        var i = r.get(o.ServiceIdentifiers.IJavaScriptObfuscator).obfuscate(e);
        return r.unload(), i;
      };

      return i;
    }();

    t.JavaScriptObfuscator = i, i.version = "0.25.0";
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.FunctionDeclarationCalleeDataExtractor = "FunctionDeclarationCalleeDataExtractor", e.FunctionExpressionCalleeDataExtractor = "FunctionExpressionCalleeDataExtractor", e.ObjectExpressionCalleeDataExtractor = "ObjectExpressionCalleeDataExtractor";
    }(t.CalleeDataExtractor || (t.CalleeDataExtractor = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BinaryExpressionControlFlowReplacer = "BinaryExpressionControlFlowReplacer", e.CallExpressionControlFlowReplacer = "CallExpressionControlFlowReplacer", e.LogicalExpressionControlFlowReplacer = "LogicalExpressionControlFlowReplacer", e.StringLiteralControlFlowReplacer = "StringLiteralControlFlowReplacer";
    }(t.ControlFlowReplacer || (t.ControlFlowReplacer = {}));
  }, function (e, t, r) {
    var o,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(19),
        u = r(2),
        p = r(3),
        m = r(20),
        g = r(46),
        y = r(4);

    var h =
    /*#__PURE__*/
    function (_g$AbstractControlFlo) {
      _inheritsLoose(h, _g$AbstractControlFlo);

      function h(e, t, r) {
        return _g$AbstractControlFlo.call(this, e, t, r) || this;
      }

      var _proto8 = h.prototype;

      _proto8.getControlFlowStorageCallNode = function getControlFlowStorageCallNode(e, t, r, o) {
        var n = this.controlFlowCustomNodeFactory(m.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode);
        n.initialize(e, t, r, o);
        var i = n.getNode()[0];
        if (!i || !y.NodeGuards.isExpressionStatementNode(i)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
        return i.expression;
      };

      return h;
    }(g.AbstractControlFlowReplacer);

    h = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.Factory__IControlFlowCustomNode)), c(1, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(2, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (o = void 0 !== f.TControlFlowCustomNodeFactory && f.TControlFlowCustomNodeFactory) ? o : Object, "function" == typeof (n = void 0 !== p.IRandomGenerator && p.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== u.IOptions && u.IOptions) ? i : Object])], h), t.ExpressionWithOperatorControlFlowReplacer = h;
  }, function (e, t, r) {
    var o = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    },
        n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = o(r(88)),
        a = n(r(89)),
        s = n(r(58));

    var c =
    /*#__PURE__*/
    function () {
      function c() {}

      c.parse = function parse(e, t) {
        var r = c.sourceTypes.length;

        for (var _o5 = 0; _o5 < r; _o5++) {
          try {
            return c.parseType(e, t, c.sourceTypes[_o5]);
          } catch (t) {
            if (_o5 < r - 1) continue;
            throw new Error(c.processParsingError(e, t.message, t.loc));
          }
        }

        throw new Error("Acorn parsing error");
      };

      c.parseType = function parseType(e, t, r) {
        var o = [],
            n = Object.assign(Object.assign({}, t), {
          onComment: o,
          sourceType: r
        }),
            s = i.Parser.extend(a.default).parse(e, n);
        return o.length && (s.comments = o), s;
      };

      c.processParsingError = function processParsingError(e, t, r) {
        if (!r || !r.line || !r.column) throw new Error(t);
        var o = e.split(/\r?\n/)[r.line - 1];
        if (!o) throw new Error(t);
        var n = Math.max(0, r.column - c.nearestSymbolsCount),
            i = Math.min(o.length, r.column + c.nearestSymbolsCount),
            a = c.colorError(">"),
            s = "..." + o.substring(n, i).replace(/^\s+/, "") + "...";
        throw new Error("ERROR at line " + r.line + ": " + t + "\n" + a + " " + s);
      };

      return c;
    }();

    t.ASTParserFacade = c, c.colorError = s.default.red, c.nearestSymbolsCount = 15, c.sourceTypes = ["script", "module"];
  }, function (e, t) {
    e.exports = require("chalk");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BlockStatementDeadCodeInjectionNode = "BlockStatementDeadCodeInjectionNode";
    }(t.DeadCodeInjectionCustomNode || (t.DeadCodeInjectionCustomNode = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BasePropertiesExtractor = "BasePropertiesExtractor", e.ObjectExpressionToVariableDeclarationExtractor = "ObjectExpressionToVariableDeclarationExtractor";
    }(t.ObjectExpressionExtractor || (t.ObjectExpressionExtractor = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.ObjectExpressionVariableDeclarationHostNode = "ObjectExpressionVariableDeclarationHostNode";
    }(t.ObjectExpressionKeysTransformerCustomNode || (t.ObjectExpressionKeysTransformerCustomNode = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.ConsoleOutput = "ConsoleOutput", e.DebugProtection = "DebugProtection", e.DomainLock = "DomainLock", e.SelfDefending = "SelfDefending", e.StringArray = "StringArray";
    }(t.CustomCodeHelperGroup || (t.CustomCodeHelperGroup = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BooleanLiteralObfuscatingReplacer = "BooleanLiteralObfuscatingReplacer", e.NumberLiteralObfuscatingReplacer = "NumberLiteralObfuscatingReplacer", e.StringLiteralObfuscatingReplacer = "StringLiteralObfuscatingReplacer";
    }(t.LiteralObfuscatingReplacer || (t.LiteralObfuscatingReplacer = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t) {
    e.exports = require("class-validator");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.BlackListObfuscatingGuard = "BlackListObfuscatingGuard", e.ConditionalCommentObfuscatingGuard = "ConditionalCommentObfuscatingGuard", e.ReservedStringObfuscatingGuard = "ReservedStringObfuscatingGuard";
    }(t.ObfuscatingGuard || (t.ObfuscatingGuard = {}));
  }, function (e, t, r) {
    var _o6,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = r(4);

    var s = _o6 =
    /*#__PURE__*/
    function () {
      function o() {
        this.obfuscationAllowedForCurrentNode = !0, this.obfuscationAllowedForNextNode = null;
      }

      o.isConditionalComment = function isConditionalComment(e) {
        return _o6.obfuscationEnableCommentRegExp.test(e.value) || _o6.obfuscationDisableCommentRegExp.test(e.value);
      };

      var _proto9 = o.prototype;

      _proto9.check = function check(e) {
        if (this.obfuscationAllowedForNextNode && (this.obfuscationAllowedForCurrentNode = this.obfuscationAllowedForNextNode, this.obfuscationAllowedForNextNode = null), !a.NodeGuards.isNodeWithComments(e)) return this.obfuscationAllowedForCurrentNode;
        var t = e.leadingComments,
            r = e.trailingComments;
        return t && (this.obfuscationAllowedForCurrentNode = this.checkComments(t)), r && (this.obfuscationAllowedForNextNode = this.checkComments(r)), this.obfuscationAllowedForCurrentNode;
      };

      _proto9.checkComments = function checkComments(e) {
        var t = e.length;
        var r = this.obfuscationAllowedForCurrentNode;

        for (var _n = 0; _n < t; _n++) {
          var _t3 = e[_n];
          _o6.obfuscationEnableCommentRegExp.test(_t3.value) ? r = !0 : _o6.obfuscationDisableCommentRegExp.test(_t3.value) && (r = !1);
        }

        return r;
      };

      return o;
    }();

    s.obfuscationEnableCommentRegExp = new RegExp("javascript-obfuscator *: *enable"), s.obfuscationDisableCommentRegExp = new RegExp("javascript-obfuscator *: *disable"), s = _o6 = n([i.injectable()], s), t.ConditionalCommentObfuscatingGuard = s;
  }, function (e, t, r) {
    var _o7,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        l = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = l(r(225)),
        m = r(226),
        g = r(2),
        y = r(227),
        h = r(7);

    var b = _o7 =
    /*#__PURE__*/
    function () {
      function o(e, t) {
        this.sourceCode = e, this.options = t;
      }

      var _proto10 = o.prototype;

      _proto10.initialize = function initialize() {
        this.randomGenerator = new m.Chance(this.getRawSeed());
      };

      _proto10.getMathRandom = function getMathRandom() {
        return this.getRandomInteger(0, 99999) / 1e5;
      };

      _proto10.getRandomGenerator = function getRandomGenerator() {
        return this.randomGenerator;
      };

      _proto10.getRandomInteger = function getRandomInteger(e, t) {
        return this.getRandomGenerator().integer({
          min: e,
          max: t
        });
      };

      _proto10.getRandomString = function getRandomString(e, t) {
        if (t === void 0) {
          t = _o7.randomGeneratorPool;
        }

        return this.getRandomGenerator().string({
          length: e,
          pool: t
        });
      };

      _proto10.getInputSeed = function getInputSeed() {
        return this.options.seed.toString();
      };

      _proto10.getRawSeed = function getRawSeed() {
        var e = this.getInputSeed();
        return ("" + e).split("|").length > 1 ? e : e + "|" + p.default(this.sourceCode.getSourceCode());
      };

      return o;
    }();

    b.randomGeneratorPool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", s([h.initializable(), c("design:type", "function" == typeof (n = void 0 !== m.Chance && m.Chance.Chance) ? n : Object)], b.prototype, "randomGenerator", void 0), s([f.postConstruct(), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", void 0)], b.prototype, "initialize", null), b = _o7 = s([f.injectable(), d(0, f.inject(u.ServiceIdentifiers.ISourceCode)), d(1, f.inject(u.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (i = void 0 !== y.ISourceCode && y.ISourceCode) ? i : Object, "function" == typeof (a = void 0 !== g.IOptions && g.IOptions) ? a : Object])], b), t.RandomGenerator = b;
  }, function (e, t) {
    e.exports = require("reflect-metadata");
  }, function (e, t, r) {
    var _o8,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        c = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = c(r(58)),
        u = r(2),
        p = r(74);

    var m = _o8 =
    /*#__PURE__*/
    function () {
      function o(e) {
        this.options = e;
      }

      o.log = function log(e, t, r, o) {
        var n = e("\n" + t + " " + r);
        console.log(n, null != o ? o : "");
      };

      var _proto11 = o.prototype;

      _proto11.info = function info(e, t) {
        this.options.log && _o8.log(_o8.colorInfo, p.LoggingPrefix.Base, e, t);
      };

      _proto11.success = function success(e, t) {
        this.options.log && _o8.log(_o8.colorSuccess, p.LoggingPrefix.Base, e, t);
      };

      _proto11.warn = function warn(e, t) {
        this.options.log && _o8.log(_o8.colorWarn, p.LoggingPrefix.Base, e, t);
      };

      return o;
    }();

    m.colorInfo = f.default.cyan, m.colorSuccess = f.default.green, m.colorWarn = f.default.yellow, m = _o8 = i([d.injectable(), s(0, d.inject(l.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (n = void 0 !== u.IOptions && u.IOptions) ? n : Object])], m), t.Logger = m;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Base = "[javascript-obfuscator]", e.CLI = "[javascript-obfuscator-cli]";
    }(t.LoggingPrefix || (t.LoggingPrefix = {}));
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(54),
        s = r(76),
        c = r(78),
        d = r(79),
        l = r(80),
        f = r(81),
        u = r(82),
        p = r(84);
    t.analyzersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.ICallsGraphAnalyzer).to(s.CallsGraphAnalyzer).inSingletonScope(), e(i.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer).to(f.PrevailingKindOfVariablesAnalyzer).inSingletonScope(), e(i.ServiceIdentifiers.IScopeAnalyzer).to(u.ScopeAnalyzer).inSingletonScope(), e(i.ServiceIdentifiers.IStringArrayStorageAnalyzer).to(p.StringArrayStorageAnalyzer).inSingletonScope(), e(i.ServiceIdentifiers.ICalleeDataExtractor).to(c.FunctionDeclarationCalleeDataExtractor).whenTargetNamed(a.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor), e(i.ServiceIdentifiers.ICalleeDataExtractor).to(d.FunctionExpressionCalleeDataExtractor).whenTargetNamed(a.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor), e(i.ServiceIdentifiers.ICalleeDataExtractor).to(l.ObjectExpressionCalleeDataExtractor).whenTargetNamed(a.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor), e(i.ServiceIdentifiers.Factory__ICalleeDataExtractor).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.ICalleeDataExtractor));
    });
  }, function (e, t, r) {
    var _o9,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        c = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = c(r(12)),
        u = r(77),
        p = r(54),
        m = r(4),
        g = r(17);

    var y = _o9 =
    /*#__PURE__*/
    function () {
      function o(e) {
        this.calleeDataExtractorFactory = e;
      }

      o.getLimitIndex = function getLimitIndex(e) {
        var t = e - 1,
            r = _o9.limitThresholdActivationLength - 1;
        var n = t;
        return t > r && (n = Math.round(r + t * _o9.limitThreshold), n > t && (n = t)), n;
      };

      var _proto12 = o.prototype;

      _proto12.analyze = function analyze(e) {
        return this.analyzeRecursive(e.body);
      };

      _proto12.analyzeRecursive = function analyzeRecursive(e) {
        var _this2 = this;

        var t = _o9.getLimitIndex(e.length),
            r = [],
            n = e.length;

        var _loop = function _loop(_o10) {
          var t = e[_o10];
          f.traverse(t, {
            enter: function enter(o) {
              if (m.NodeGuards.isCallExpressionNode(o)) return t.parentNode !== g.NodeStatementUtils.getParentNodeWithStatements(o) ? f.VisitorOption.Skip : void _this2.analyzeCallExpressionNode(r, e, o);
            }
          });
        };

        for (var _o10 = 0; _o10 < n && !(_o10 > t); _o10++) {
          _loop(_o10);
        }

        return r;
      };

      _proto12.analyzeCallExpressionNode = function analyzeCallExpressionNode(e, t, r) {
        var _this3 = this;

        _o9.calleeDataExtractorsList.forEach(function (o) {
          var n = _this3.calleeDataExtractorFactory(o).extract(t, r.callee);

          n && e.push(Object.assign(Object.assign({}, n), {
            callsGraph: _this3.analyzeRecursive(n.callee.body)
          }));
        });
      };

      return o;
    }();

    y.calleeDataExtractorsList = [p.CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor, p.CalleeDataExtractor.FunctionExpressionCalleeDataExtractor, p.CalleeDataExtractor.ObjectExpressionCalleeDataExtractor], y.limitThresholdActivationLength = 25, y.limitThreshold = .002, y = _o9 = i([d.injectable(), s(0, d.inject(l.ServiceIdentifiers.Factory__ICalleeDataExtractor)), a("design:paramtypes", ["function" == typeof (n = void 0 !== u.TCalleeDataExtractorFactory && u.TCalleeDataExtractorFactory) ? n : Object])], y), t.CallsGraphAnalyzer = y;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        n = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = n(r(12)),
        s = r(43),
        c = r(4),
        d = r(17);

    var l =
    /*#__PURE__*/
    function (_s$AbstractCalleeData) {
      _inheritsLoose(l, _s$AbstractCalleeData);

      function l() {
        return _s$AbstractCalleeData.apply(this, arguments) || this;
      }

      var _proto13 = l.prototype;

      _proto13.extract = function extract(e, t) {
        if (!c.NodeGuards.isIdentifierNode(t)) return null;
        var r = this.getCalleeBlockStatement(d.NodeStatementUtils.getParentNodeWithStatements(e[0]), t.name);
        return r ? {
          callee: r,
          name: t.name
        } : null;
      };

      _proto13.getCalleeBlockStatement = function getCalleeBlockStatement(e, t) {
        var r = null;
        return a.traverse(e, {
          enter: function enter(e) {
            if (c.NodeGuards.isFunctionDeclarationNode(e) && e.id.name === t) return r = e.body, a.VisitorOption.Break;
          }
        }), r;
      };

      return l;
    }(s.AbstractCalleeDataExtractor);

    l = o([i.injectable()], l), t.FunctionDeclarationCalleeDataExtractor = l;
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        n = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = n(r(12)),
        s = r(43),
        c = r(4),
        d = r(17);

    var l =
    /*#__PURE__*/
    function (_s$AbstractCalleeData2) {
      _inheritsLoose(l, _s$AbstractCalleeData2);

      function l() {
        return _s$AbstractCalleeData2.apply(this, arguments) || this;
      }

      var _proto14 = l.prototype;

      _proto14.extract = function extract(e, t) {
        var r;
        var o = null;
        return c.NodeGuards.isIdentifierNode(t) && (o = this.getCalleeBlockStatement(d.NodeStatementUtils.getParentNodeWithStatements(e[0]), t.name)), c.NodeGuards.isFunctionExpressionNode(t) && (o = t.body), o ? {
          callee: o,
          name: null !== (r = t.name) && void 0 !== r ? r : null
        } : null;
      };

      _proto14.getCalleeBlockStatement = function getCalleeBlockStatement(e, t) {
        var r = null;
        return a.traverse(e, {
          enter: function enter(e, o) {
            if (c.NodeGuards.isFunctionExpressionNode(e) && o && c.NodeGuards.isVariableDeclaratorNode(o) && c.NodeGuards.isIdentifierNode(o.id) && o.id.name === t) return r = e.body, a.VisitorOption.Break;
          }
        }), r;
      };

      return l;
    }(s.AbstractCalleeDataExtractor);

    l = o([i.injectable()], l), t.FunctionExpressionCalleeDataExtractor = l;
  }, function (e, t, r) {
    var _o11,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = r(0),
        s = i(r(12)),
        c = r(43),
        d = r(4),
        l = r(17);

    var f = _o11 =
    /*#__PURE__*/
    function (_c$AbstractCalleeData) {
      _inheritsLoose(o, _c$AbstractCalleeData);

      function o() {
        return _c$AbstractCalleeData.apply(this, arguments) || this;
      }

      o.isValidTargetPropertyNode = function isValidTargetPropertyNode(e, t) {
        if (!e.key) return !1;
        var r = d.NodeGuards.isIdentifierNode(e.key) && e.key.name === t,
            o = d.NodeGuards.isLiteralNode(e.key) && Boolean(e.key.value) && e.key.value === t;
        return r || o;
      };

      var _proto15 = o.prototype;

      _proto15.extract = function extract(e, t) {
        if (!d.NodeGuards.isMemberExpressionNode(t)) return null;
        var r = this.createObjectMembersCallsChain([], t);
        if (!r.length) return null;
        var o = r[r.length - 1],
            n = this.getCalleeBlockStatement(l.NodeStatementUtils.getParentNodeWithStatements(e[0]), r);
        return n ? {
          callee: n,
          name: o
        } : null;
      };

      _proto15.createObjectMembersCallsChain = function createObjectMembersCallsChain(e, t) {
        if (d.NodeGuards.isIdentifierNode(t.property) && !1 === t.computed) e.unshift(t.property.name);else {
          if (!d.NodeGuards.isLiteralNode(t.property) || "string" != typeof t.property.value && "number" != typeof t.property.value) return e;
          e.unshift(t.property.value);
        }
        return d.NodeGuards.isMemberExpressionNode(t.object) ? this.createObjectMembersCallsChain(e, t.object) : (d.NodeGuards.isIdentifierNode(t.object) && e.unshift(t.object.name), e);
      };

      _proto15.getCalleeBlockStatement = function getCalleeBlockStatement(e, t) {
        var _this4 = this;

        var r = t.shift();
        if (!r) return null;
        var o = null;
        return s.traverse(e, {
          enter: function enter(e) {
            if (d.NodeGuards.isVariableDeclaratorNode(e) && d.NodeGuards.isIdentifierNode(e.id) && e.init && d.NodeGuards.isObjectExpressionNode(e.init) && e.id.name === r) return o = _this4.findCalleeBlockStatement(e.init.properties, t), s.VisitorOption.Break;
          }
        }), o;
      };

      _proto15.findCalleeBlockStatement = function findCalleeBlockStatement(e, t) {
        var r = t.shift();
        if (!r) return null;

        for (var _iterator3 = e, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref4 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref4 = _i3.value;
          }

          var _n2 = _ref4;

          if (_o11.isValidTargetPropertyNode(_n2, r)) {
            if (d.NodeGuards.isObjectExpressionNode(_n2.value)) return this.findCalleeBlockStatement(_n2.value.properties, t);
            if (d.NodeGuards.isFunctionExpressionNode(_n2.value)) return _n2.value.body;
          }
        }

        return null;
      };

      return o;
    }(c.AbstractCalleeDataExtractor);

    f = _o11 = n([a.injectable()], f), t.ObjectExpressionCalleeDataExtractor = f;
  }, function (e, t, r) {
    var _o12,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        c = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = c(r(12)),
        u = r(36),
        p = r(4);

    var m = _o12 =
    /*#__PURE__*/
    function () {
      function o(e) {
        this.prevailingKindOfVariables = _o12.defaultKindOfVariables, this.arrayUtils = e;
      }

      var _proto16 = o.prototype;

      _proto16.analyze = function analyze(e) {
        var t;
        var r = [];
        f.traverse(e, {
          enter: function enter(e) {
            p.NodeGuards.isVariableDeclarationNode(e) && r.push(e.kind);
          }
        }), this.prevailingKindOfVariables = null !== (t = this.arrayUtils.findMostOccurringElement(r)) && void 0 !== t ? t : _o12.defaultKindOfVariables;
      };

      _proto16.getPrevailingKind = function getPrevailingKind() {
        return this.prevailingKindOfVariables;
      };

      return o;
    }();

    m.defaultKindOfVariables = "var", m = _o12 = i([d.injectable(), s(0, d.inject(l.ServiceIdentifiers.IArrayUtils)), a("design:paramtypes", ["function" == typeof (n = void 0 !== u.IArrayUtils && u.IArrayUtils) ? n : Object])], m), t.PrevailingKindOfVariablesAnalyzer = m;
  }, function (e, t, r) {
    var _o13,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = r(0),
        s = i(r(83)),
        c = i(r(12)),
        d = r(44),
        l = r(4);

    var f = _o13 =
    /*#__PURE__*/
    function () {
      function o() {
        this.scopeManager = null;
      }

      o.attachMissingRanges = function attachMissingRanges(e) {
        c.replace(e, {
          enter: function enter(e) {
            return e.range || (e.range = [_o13.emptyRangeValue, _o13.emptyRangeValue]), e;
          }
        });
      };

      o.isRootNode = function isRootNode(e) {
        return l.NodeGuards.isProgramNode(e) || e.parentNode === e;
      };

      var _proto17 = o.prototype;

      _proto17.analyze = function analyze(e) {
        var t = _o13.sourceTypes.length;

        _o13.attachMissingRanges(e);

        for (var _r2 = 0; _r2 < t; _r2++) {
          try {
            return void (this.scopeManager = s.analyze(e, Object.assign(Object.assign({}, _o13.eslintScopeOptions), {
              sourceType: _o13.sourceTypes[_r2]
            })));
          } catch (e) {
            if (_r2 < t - 1) continue;
            throw new Error(e);
          }
        }

        throw new Error("Scope analyzing error");
      };

      _proto17.acquireScope = function acquireScope(e) {
        if (!this.scopeManager) throw new Error("Scope manager is not defined");
        var t = this.scopeManager.acquire(e, _o13.isRootNode(e));
        if (!t) throw new Error("Cannot acquire scope for node");
        return this.sanitizeScopes(t), t;
      };

      _proto17.sanitizeScopes = function sanitizeScopes(e) {
        e.childScopes.forEach(function (e) {
          if ("class" === e.type && e.upper) {
            var _r3$references;

            if (!e.variables.length) return;

            var _t4 = e.variables[0],
                _r3 = e.upper.variables.find(function (e) {
              return _t4.defs.some(function (e) {
                return "ClassName" === e.type;
              }) && e.name === _t4.name;
            });

            null == _r3 || (_r3$references = _r3.references).push.apply(_r3$references, e.variables[0].references);
          }
        });

        for (var _iterator4 = e.childScopes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref5 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref5 = _i4.value;
          }

          var _t5 = _ref5;
          this.sanitizeScopes(_t5);
        }
      };

      return o;
    }();

    f.eslintScopeOptions = {
      ecmaVersion: d.ecmaVersion,
      optimistic: !0
    }, f.sourceTypes = ["script", "module"], f.emptyRangeValue = 0, f = _o13 = n([a.injectable()], f), t.ScopeAnalyzer = f;
  }, function (e, t) {
    e.exports = require("eslint-scope");
  }, function (e, t, r) {
    var _o14,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        l = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = l(r(12)),
        m = r(2),
        g = r(3),
        y = r(37),
        h = r(4),
        b = r(18),
        N = r(45);

    var I = _o14 =
    /*#__PURE__*/
    function () {
      function o(e, t, r) {
        this.stringArrayStorageData = new Map(), this.stringArrayStorage = e, this.randomGenerator = t, this.options = r;
      }

      var _proto18 = o.prototype;

      _proto18.analyze = function analyze(e) {
        var _this5 = this;

        this.options.stringArray && p.traverse(e, {
          enter: function enter(e, t) {
            if (t) return b.NodeMetadata.isIgnoredNode(e) ? p.VisitorOption.Skip : void (h.NodeGuards.isLiteralNode(e) && _this5.analyzeLiteralNode(e, t));
          }
        });
      };

      _proto18.getItemDataForLiteralNode = function getItemDataForLiteralNode(e) {
        return this.stringArrayStorageData.get(e);
      };

      _proto18.analyzeLiteralNode = function analyzeLiteralNode(e, t) {
        "string" == typeof e.value && (N.NodeLiteralUtils.isProhibitedLiteralNode(e, t) || this.shouldAddValueToStringArray(e.value) && this.stringArrayStorageData.set(e, this.stringArrayStorage.getOrThrow(e.value)));
      };

      _proto18.shouldAddValueToStringArray = function shouldAddValueToStringArray(e) {
        return e.length >= _o14.minimumLengthForStringArray && this.randomGenerator.getMathRandom() <= this.options.stringArrayThreshold;
      };

      return o;
    }();

    I.minimumLengthForStringArray = 3, I = _o14 = s([f.injectable(), d(0, f.inject(u.ServiceIdentifiers.IStringArrayStorage)), d(1, f.inject(u.ServiceIdentifiers.IRandomGenerator)), d(2, f.inject(u.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== y.IStringArrayStorage && y.IStringArrayStorage) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], I), t.StringArrayStorageAnalyzer = I;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(55),
        s = r(24),
        c = r(86),
        d = r(87),
        l = r(90),
        f = r(91),
        u = r(93),
        p = r(96),
        m = r(97);
    t.controlFlowTransformersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.INodeTransformer).to(d.BlockStatementControlFlowTransformer).whenTargetNamed(s.NodeTransformer.BlockStatementControlFlowTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(f.DeadCodeInjectionTransformer).whenTargetNamed(s.NodeTransformer.DeadCodeInjectionTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(u.FunctionControlFlowTransformer).whenTargetNamed(s.NodeTransformer.FunctionControlFlowTransformer), e(i.ServiceIdentifiers.IControlFlowReplacer).to(c.BinaryExpressionControlFlowReplacer).whenTargetNamed(a.ControlFlowReplacer.BinaryExpressionControlFlowReplacer), e(i.ServiceIdentifiers.IControlFlowReplacer).to(l.CallExpressionControlFlowReplacer).whenTargetNamed(a.ControlFlowReplacer.CallExpressionControlFlowReplacer), e(i.ServiceIdentifiers.IControlFlowReplacer).to(p.LogicalExpressionControlFlowReplacer).whenTargetNamed(a.ControlFlowReplacer.LogicalExpressionControlFlowReplacer), e(i.ServiceIdentifiers.IControlFlowReplacer).to(m.StringLiteralControlFlowReplacer).whenTargetNamed(a.ControlFlowReplacer.StringLiteralControlFlowReplacer), e(i.ServiceIdentifiers.Factory__IControlFlowReplacer).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.IControlFlowReplacer));
    });
  }, function (e, t, r) {
    var _o15,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(19),
        p = r(2),
        m = r(3),
        g = r(20),
        y = r(56);

    var h = _o15 =
    /*#__PURE__*/
    function (_y$ExpressionWithOper) {
      _inheritsLoose(o, _y$ExpressionWithOper);

      function o(e, t, r) {
        return _y$ExpressionWithOper.call(this, e, t, r) || this;
      }

      var _proto19 = o.prototype;

      _proto19.replace = function replace(e, t, r) {
        var n = e.operator,
            i = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.BinaryExpressionFunctionNode);
        i.initialize(n);
        var a = this.insertCustomNodeToControlFlowStorage(i, r, n, _o15.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(r.getStorageId(), a, e.left, e.right);
      };

      return o;
    }(y.ExpressionWithOperatorControlFlowReplacer);

    h.usingExistingIdentifierChance = .5, h = _o15 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TControlFlowCustomNodeFactory && u.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], h), t.BinaryExpressionControlFlowReplacer = h;
  }, function (e, t, r) {
    var _o16,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        f = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = f(r(12)),
        g = r(19),
        y = r(36),
        h = r(2),
        b = r(3),
        N = r(20),
        I = r(10),
        v = r(11),
        S = r(4),
        O = r(6);

    var C = _o16 =
    /*#__PURE__*/
    function (_v$AbstractNodeTransf) {
      _inheritsLoose(o, _v$AbstractNodeTransf);

      function o(e, t, r, _o17) {
        var _this6;

        _this6 = _v$AbstractNodeTransf.call(this, r, _o17) || this, _this6.controlFlowCustomNodeFactory = e, _this6.arrayUtils = t;
        return _this6;
      }

      o.isProhibitedStatementNode = function isProhibitedStatementNode(e) {
        var t = S.NodeGuards.isBreakStatementNode(e) || S.NodeGuards.isContinueStatementNode(e),
            r = S.NodeGuards.isVariableDeclarationNode(e) && ("const" === e.kind || "let" === e.kind),
            o = S.NodeGuards.isClassDeclarationNode(e);
        return S.NodeGuards.isFunctionDeclarationNode(e) || t || r || o;
      };

      o.canTransformBlockStatementNode = function canTransformBlockStatementNode(e) {
        var t = !0;
        return m.traverse(e, {
          enter: function enter(e) {
            if (S.NodeGuards.isWhileStatementNode(e)) return m.VisitorOption.Skip;
            _o16.isProhibitedStatementNode(e) && (t = !1);
          }
        }), e.body.length <= 4 && (t = !1), t;
      };

      var _proto20 = o.prototype;

      _proto20.getVisitor = function getVisitor(e) {
        var _this7 = this;

        switch (e) {
          case I.TransformationStage.ControlFlowFlattening:
            return {
              leave: function leave(e, t) {
                if (t && S.NodeGuards.isBlockStatementNode(e)) return _this7.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto20.transformNode = function transformNode(e, t) {
        if (this.randomGenerator.getMathRandom() > this.options.controlFlowFlatteningThreshold || !_o16.canTransformBlockStatementNode(e)) return e;
        var r = e.body,
            n = this.arrayUtils.createWithRange(r.length),
            i = this.arrayUtils.shuffle(n),
            a = n.map(function (e) {
          return i.indexOf(e);
        }),
            s = this.controlFlowCustomNodeFactory(N.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode);
        s.initialize(r, i, a);
        var c = s.getNode()[0];
        return O.NodeUtils.parentizeNode(c, t), c;
      };

      return o;
    }(v.AbstractNodeTransformer);

    C = _o16 = c([u.injectable(), l(0, u.inject(p.ServiceIdentifiers.Factory__IControlFlowCustomNode)), l(1, u.inject(p.ServiceIdentifiers.IArrayUtils)), l(2, u.inject(p.ServiceIdentifiers.IRandomGenerator)), l(3, u.inject(p.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== g.TControlFlowCustomNodeFactory && g.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== y.IArrayUtils && y.IArrayUtils) ? i : Object, "function" == typeof (a = void 0 !== b.IRandomGenerator && b.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== h.IOptions && h.IOptions) ? s : Object])], C), t.BlockStatementControlFlowTransformer = C;
  }, function (e, t) {
    e.exports = require("acorn");
  }, function (e, t) {
    e.exports = require("acorn-import-meta");
  }, function (e, t, r) {
    var _o18,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(19),
        p = r(2),
        m = r(3),
        g = r(20),
        y = r(46),
        h = r(4);

    var b = _o18 =
    /*#__PURE__*/
    function (_y$AbstractControlFlo) {
      _inheritsLoose(o, _y$AbstractControlFlo);

      function o(e, t, r) {
        return _y$AbstractControlFlo.call(this, e, t, r) || this;
      }

      var _proto21 = o.prototype;

      _proto21.replace = function replace(e, t, r) {
        var n = e.callee;
        if (!h.NodeGuards.isIdentifierNode(n)) return e;
        var i = String(e.arguments.length),
            a = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.CallExpressionFunctionNode),
            s = e.arguments;
        a.initialize(s);
        var c = this.insertCustomNodeToControlFlowStorage(a, r, i, _o18.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(r.getStorageId(), c, n, s);
      };

      _proto21.getControlFlowStorageCallNode = function getControlFlowStorageCallNode(e, t, r, o) {
        var n = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode);
        n.initialize(e, t, r, o);
        var i = n.getNode()[0];
        if (!i || !h.NodeGuards.isExpressionStatementNode(i)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
        return i.expression;
      };

      return o;
    }(y.AbstractControlFlowReplacer);

    b.usingExistingIdentifierChance = .5, b = _o18 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TControlFlowCustomNodeFactory && u.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], b), t.CallExpressionControlFlowReplacer = b;
  }, function (e, t, r) {
    var _o19,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        f = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = r(0),
        p = r(1),
        m = f(r(12)),
        g = r(92),
        y = r(2),
        h = r(3),
        b = r(59),
        N = r(60),
        I = r(24),
        v = r(35),
        S = r(10),
        O = r(11),
        C = r(8),
        j = r(4),
        _ = r(17),
        R = r(6);

    var F = _o19 =
    /*#__PURE__*/
    function (_O$AbstractNodeTransf) {
      _inheritsLoose(o, _O$AbstractNodeTransf);

      function o(e, t, r, _o20) {
        var _this8;

        _this8 = _O$AbstractNodeTransf.call(this, r, _o20) || this, _this8.deadCodeInjectionRootAstHostNodeSet = new Set(), _this8.collectedBlockStatements = [], _this8.collectedBlockStatementsTotalLength = 0, _this8.deadCodeInjectionCustomNodeFactory = e, _this8.transformersRunner = t;
        return _this8;
      }

      o.isProhibitedNodeInsideCollectedBlockStatement = function isProhibitedNodeInsideCollectedBlockStatement(e) {
        return j.NodeGuards.isBreakStatementNode(e) || j.NodeGuards.isContinueStatementNode(e) || j.NodeGuards.isAwaitExpressionNode(e) || j.NodeGuards.isSuperNode(e);
      };

      o.isScopeHoistingFunctionDeclaration = function isScopeHoistingFunctionDeclaration(e) {
        if (!j.NodeGuards.isFunctionDeclarationNode(e)) return !1;

        var t = _.NodeStatementUtils.getScopeOfNode(e),
            r = j.NodeGuards.isSwitchCaseNode(t) ? t.consequent : t.body,
            o = r.indexOf(e);

        if (0 === o) return !1;
        var n = r.slice(0, o),
            i = C.NodeFactory.blockStatementNode(n),
            a = e.id.name;
        var s = !1;
        return m.traverse(i, {
          enter: function enter(e) {
            if (j.NodeGuards.isIdentifierNode(e) && e.name === a) return s = !0, m.VisitorOption.Break;
          }
        }), s;
      };

      o.isValidCollectedBlockStatementNode = function isValidCollectedBlockStatementNode(e) {
        if (!e.body.length) return !1;
        var t = 0,
            r = !0;
        return m.traverse(e, {
          enter: function enter(e) {
            if (j.NodeGuards.isBlockStatementNode(e) && t++, t > _o19.maxNestedBlockStatementsCount || _o19.isProhibitedNodeInsideCollectedBlockStatement(e) || _o19.isScopeHoistingFunctionDeclaration(e)) return r = !1, m.VisitorOption.Break;
          }
        }), r;
      };

      o.isValidWrappedBlockStatementNode = function isValidWrappedBlockStatementNode(e) {
        if (!e.body.length) return !1;
        var t = !0;
        return m.traverse(e, {
          enter: function enter(e) {
            if (_o19.isScopeHoistingFunctionDeclaration(e)) return t = !1, m.VisitorOption.Break;
          }
        }), !!t && _.NodeStatementUtils.getParentNodeWithStatements(e).type !== v.NodeType.Program;
      };

      var _proto22 = o.prototype;

      _proto22.getVisitor = function getVisitor(e) {
        var _this9 = this;

        switch (e) {
          case S.TransformationStage.DeadCodeInjection:
            return {
              enter: function enter(e, t) {
                if (t && j.NodeGuards.isProgramNode(e)) return _this9.analyzeNode(e, t), e;
              },
              leave: function leave(e, t) {
                if (t && j.NodeGuards.isBlockStatementNode(e)) return _this9.transformNode(e, t);
              }
            };

          case S.TransformationStage.Finalizing:
            return this.deadCodeInjectionRootAstHostNodeSet.size ? {
              enter: function enter(e, t) {
                if (t && _this9.isDeadCodeInjectionRootAstHostNode(e)) return _this9.restoreNode(e, t);
              }
            } : null;

          default:
            return null;
        }
      };

      _proto22.analyzeNode = function analyzeNode(e, t) {
        var _this10 = this;

        m.traverse(e, {
          enter: function enter(e) {
            if (!j.NodeGuards.isBlockStatementNode(e)) return;
            var t = R.NodeUtils.clone(e);
            if (!_o19.isValidCollectedBlockStatementNode(t)) return;

            var r = _this10.makeClonedBlockStatementNodeUnique(t);

            _this10.collectedBlockStatements.push(r);
          }
        }), this.collectedBlockStatementsTotalLength = this.collectedBlockStatements.length;
      };

      _proto22.transformNode = function transformNode(e, t) {
        if (!this.collectedBlockStatements.length || this.collectedBlockStatementsTotalLength < _o19.minCollectedBlockStatementsCount) return m.VisitorOption.Break;
        if (this.randomGenerator.getMathRandom() > this.options.deadCodeInjectionThreshold || !_o19.isValidWrappedBlockStatementNode(e)) return e;
        var r = this.collectedBlockStatements.length - 1,
            n = this.randomGenerator.getRandomInteger(0, r),
            i = this.collectedBlockStatements.splice(n, 1)[0];
        return i === e ? e : this.replaceBlockStatementNode(e, i, t);
      };

      _proto22.restoreNode = function restoreNode(e, t) {
        var r = e.body[0];
        if (!j.NodeGuards.isFunctionDeclarationNode(r)) throw new Error("Wrong dead code injection root AST host node. Host node should contain `FunctionDeclaration` node");
        return r.body;
      };

      _proto22.isDeadCodeInjectionRootAstHostNode = function isDeadCodeInjectionRootAstHostNode(e) {
        return j.NodeGuards.isBlockStatementNode(e) && this.deadCodeInjectionRootAstHostNodeSet.has(e);
      };

      _proto22.makeClonedBlockStatementNodeUnique = function makeClonedBlockStatementNodeUnique(e) {
        var t = C.NodeFactory.programNode([C.NodeFactory.expressionStatementNode(C.NodeFactory.functionExpressionNode([], e))]);
        return R.NodeUtils.parentizeAst(t), R.NodeUtils.parentizeNode(t, t), this.transformersRunner.transform(t, _o19.transformersToRenameBlockScopeIdentifiers, S.TransformationStage.Obfuscating), e;
      };

      _proto22.replaceBlockStatementNode = function replaceBlockStatementNode(e, t, r) {
        var n = C.NodeFactory.blockStatementNode([C.NodeFactory.functionDeclarationNode(_o19.deadCodeInjectionRootAstHostNodeName, [], t)]);
        this.deadCodeInjectionRootAstHostNodeSet.add(n);
        var i = this.deadCodeInjectionCustomNodeFactory(N.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode);
        i.initialize(e, n);
        var a = i.getNode()[0];
        return R.NodeUtils.parentizeNode(a, r), a;
      };

      return o;
    }(O.AbstractNodeTransformer);

    F.deadCodeInjectionRootAstHostNodeName = "deadCodeInjectionRootAstHostNode", F.maxNestedBlockStatementsCount = 4, F.minCollectedBlockStatementsCount = 5, F.transformersToRenameBlockScopeIdentifiers = [I.NodeTransformer.LabeledStatementTransformer, I.NodeTransformer.ScopeIdentifiersTransformer], F = _o19 = c([u.injectable(), l(0, u.inject(p.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode)), l(1, u.inject(p.ServiceIdentifiers.ITransformersRunner)), l(2, u.inject(p.ServiceIdentifiers.IRandomGenerator)), l(3, u.inject(p.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== g.TDeadNodeInjectionCustomNodeFactory && g.TDeadNodeInjectionCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== b.ITransformersRunner && b.ITransformersRunner) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], F), t.DeadCodeInjectionTransformer = F;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var _o21,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        u = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var p = r(0),
        m = r(1),
        g = u(r(12)),
        y = r(19),
        h = r(94),
        b = r(95),
        N = r(2),
        I = r(3),
        v = r(20),
        S = r(55),
        O = r(35),
        C = r(10),
        j = r(11),
        _ = r(21),
        R = r(4),
        F = r(18),
        T = r(17),
        x = r(6);

    var G = _o21 =
    /*#__PURE__*/
    function (_j$AbstractNodeTransf) {
      _inheritsLoose(o, _j$AbstractNodeTransf);

      function o(e, t, r, _o22, n) {
        var _this11;

        _this11 = _j$AbstractNodeTransf.call(this, _o22, n) || this, _this11.controlFlowData = new Map(), _this11.visitedFunctionNodes = new Set(), _this11.hostNodesWithControlFlowNode = new Set(), _this11.controlFlowStorageFactory = e, _this11.controlFlowReplacerFactory = t, _this11.controlFlowCustomNodeFactory = r;
        return _this11;
      }

      var _proto23 = o.prototype;

      _proto23.getVisitor = function getVisitor(e) {
        var _this12 = this;

        switch (e) {
          case C.TransformationStage.ControlFlowFlattening:
            return {
              leave: function leave(e, t) {
                if (t && (R.NodeGuards.isFunctionDeclarationNode(e) || R.NodeGuards.isFunctionExpressionNode(e) || R.NodeGuards.isArrowFunctionExpressionNode(e))) return _this12.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto23.transformNode = function transformNode(e, t) {
        if (this.visitedFunctionNodes.add(e), !R.NodeGuards.isBlockStatementNode(e.body)) return e;
        var r = this.getHostNode(e.body),
            o = this.getControlFlowStorage(r);
        if (this.controlFlowData.set(r, o), this.transformFunctionBody(e.body, o), !o.getLength()) return e;
        var n = this.controlFlowCustomNodeFactory(v.ControlFlowCustomNode.ControlFlowStorageNode);
        return n.initialize(o), _.NodeAppender.prepend(r, n.getNode()), this.hostNodesWithControlFlowNode.add(r), x.NodeUtils.parentizeAst(e), e;
      };

      _proto23.getControlFlowStorage = function getControlFlowStorage(e) {
        var t = this.controlFlowStorageFactory();

        if (this.controlFlowData.has(e)) {
          this.hostNodesWithControlFlowNode.has(e) && (R.NodeGuards.isSwitchCaseNode(e) ? e.consequent.shift() : e.body.shift());

          var _r4 = this.controlFlowData.get(e);

          t.mergeWith(_r4, !0);
        }

        return t;
      };

      _proto23.getHostNode = function getHostNode(e) {
        var t = T.NodeStatementUtils.getParentNodesWithStatements(e);
        return 1 === t.length ? e : (t.pop(), t.length > _o21.hostNodeSearchMinDepth && t.splice(0, _o21.hostNodeSearchMinDepth), t.length > _o21.hostNodeSearchMaxDepth && (t.length = _o21.hostNodeSearchMaxDepth), this.randomGenerator.getRandomGenerator().pickone(t));
      };

      _proto23.isVisitedFunctionNode = function isVisitedFunctionNode(e) {
        return (R.NodeGuards.isFunctionDeclarationNode(e) || R.NodeGuards.isFunctionExpressionNode(e) || R.NodeGuards.isArrowFunctionExpressionNode(e)) && this.visitedFunctionNodes.has(e);
      };

      _proto23.transformFunctionBody = function transformFunctionBody(e, t) {
        var _this13 = this;

        g.replace(e, {
          enter: function enter(e, r) {
            if (F.NodeMetadata.isIgnoredNode(e)) return g.VisitorOption.Skip;
            if (_this13.isVisitedFunctionNode(e) || !r) return g.VisitorOption.Skip;
            if (!_o21.controlFlowReplacersMap.has(e.type)) return e;
            if (_this13.randomGenerator.getMathRandom() > _this13.options.controlFlowFlatteningThreshold) return e;

            var n = _o21.controlFlowReplacersMap.get(e.type);

            return void 0 === n ? e : Object.assign(Object.assign({}, _this13.controlFlowReplacerFactory(n).replace(e, r, t)), {
              parentNode: r
            });
          }
        });
      };

      return o;
    }(j.AbstractNodeTransformer);

    G.controlFlowReplacersMap = new Map([[O.NodeType.BinaryExpression, S.ControlFlowReplacer.BinaryExpressionControlFlowReplacer], [O.NodeType.CallExpression, S.ControlFlowReplacer.CallExpressionControlFlowReplacer], [O.NodeType.LogicalExpression, S.ControlFlowReplacer.LogicalExpressionControlFlowReplacer], [O.NodeType.Literal, S.ControlFlowReplacer.StringLiteralControlFlowReplacer]]), G.hostNodeSearchMinDepth = 0, G.hostNodeSearchMaxDepth = 2, G = _o21 = d([p.injectable(), f(0, p.inject(m.ServiceIdentifiers.Factory__TControlFlowStorage)), f(1, p.inject(m.ServiceIdentifiers.Factory__IControlFlowReplacer)), f(2, p.inject(m.ServiceIdentifiers.Factory__IControlFlowCustomNode)), f(3, p.inject(m.ServiceIdentifiers.IRandomGenerator)), f(4, p.inject(m.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== b.TControlFlowStorageFactory && b.TControlFlowStorageFactory) ? n : Object, "function" == typeof (i = void 0 !== h.TControlFlowReplacerFactory && h.TControlFlowReplacerFactory) ? i : Object, "function" == typeof (a = void 0 !== y.TControlFlowCustomNodeFactory && y.TControlFlowCustomNodeFactory) ? a : Object, "function" == typeof (s = void 0 !== I.IRandomGenerator && I.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== N.IOptions && N.IOptions) ? c : Object])], G), t.FunctionControlFlowTransformer = G;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var _o23,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(19),
        p = r(2),
        m = r(3),
        g = r(20),
        y = r(56),
        h = r(4),
        b = r(6);

    var N = _o23 =
    /*#__PURE__*/
    function (_y$ExpressionWithOper2) {
      _inheritsLoose(o, _y$ExpressionWithOper2);

      function o(e, t, r) {
        return _y$ExpressionWithOper2.call(this, e, t, r) || this;
      }

      var _proto24 = o.prototype;

      _proto24.replace = function replace(e, t, r) {
        if (this.checkForProhibitedExpressions(e.left, e.right)) return e;
        var n = e.operator,
            i = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.LogicalExpressionFunctionNode);
        i.initialize(n);
        var a = this.insertCustomNodeToControlFlowStorage(i, r, n, _o23.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(r.getStorageId(), a, e.left, e.right);
      };

      _proto24.checkForProhibitedExpressions = function checkForProhibitedExpressions(e, t) {
        return [e, t].some(function (e) {
          var t;
          return t = h.NodeGuards.isUnaryExpressionNode(e) ? b.NodeUtils.getUnaryExpressionArgumentNode(e) : e, !(h.NodeGuards.isLiteralNode(t) || h.NodeGuards.isIdentifierNode(t) || h.NodeGuards.isObjectExpressionNode(t) || h.NodeGuards.isExpressionStatementNode(t));
        });
      };

      return o;
    }(y.ExpressionWithOperatorControlFlowReplacer);

    N.usingExistingIdentifierChance = .5, N = _o23 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TControlFlowCustomNodeFactory && u.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], N), t.LogicalExpressionControlFlowReplacer = N;
  }, function (e, t, r) {
    var _o24,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(19),
        p = r(2),
        m = r(3),
        g = r(20),
        y = r(46),
        h = r(4);

    var b = _o24 =
    /*#__PURE__*/
    function (_y$AbstractControlFlo2) {
      _inheritsLoose(o, _y$AbstractControlFlo2);

      function o(e, t, r) {
        return _y$AbstractControlFlo2.call(this, e, t, r) || this;
      }

      var _proto25 = o.prototype;

      _proto25.replace = function replace(e, t, r) {
        if (h.NodeGuards.isPropertyNode(t) && t.key === e) return e;
        if ("string" != typeof e.value || e.value.length < 3) return e;
        var n = String(e.value),
            i = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.StringLiteralNode);
        i.initialize(e.value);
        var a = this.insertCustomNodeToControlFlowStorage(i, r, n, _o24.usingExistingIdentifierChance);
        return this.getControlFlowStorageCallNode(r.getStorageId(), a);
      };

      _proto25.getControlFlowStorageCallNode = function getControlFlowStorageCallNode(e, t) {
        var r = this.controlFlowCustomNodeFactory(g.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode);
        r.initialize(e, t);
        var o = r.getNode()[0];
        if (!o || !h.NodeGuards.isExpressionStatementNode(o)) throw new Error("`controlFlowStorageCallCustomNode.getNode()[0]` should returns array with `ExpressionStatement` node");
        return o.expression;
      };

      return o;
    }(y.AbstractControlFlowReplacer);

    b.usingExistingIdentifierChance = 1, b = _o24 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IControlFlowCustomNode)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TControlFlowCustomNodeFactory && u.TControlFlowCustomNodeFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], b), t.StringLiteralControlFlowReplacer = b;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(16),
        i = r(1),
        a = r(24),
        s = r(61),
        c = r(99),
        d = r(101),
        l = r(102),
        f = r(103),
        u = r(105),
        p = r(106),
        m = r(107),
        g = r(108);
    t.convertingTransformersModule = new o.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.INodeTransformer).to(d.MemberExpressionTransformer).whenTargetNamed(a.NodeTransformer.MemberExpressionTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(l.MethodDefinitionTransformer).whenTargetNamed(a.NodeTransformer.MethodDefinitionTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(f.ObjectExpressionKeysTransformer).whenTargetNamed(a.NodeTransformer.ObjectExpressionKeysTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(u.ObjectExpressionTransformer).whenTargetNamed(a.NodeTransformer.ObjectExpressionTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(p.SplitStringTransformer).whenTargetNamed(a.NodeTransformer.SplitStringTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(m.TemplateLiteralTransformer).whenTargetNamed(a.NodeTransformer.TemplateLiteralTransformer), e(i.ServiceIdentifiers.IObjectExpressionExtractor).to(c.ObjectExpressionToVariableDeclarationExtractor).whenTargetNamed(s.ObjectExpressionExtractor.ObjectExpressionToVariableDeclarationExtractor), e(i.ServiceIdentifiers.IObjectExpressionExtractor).to(g.BasePropertiesExtractor).whenTargetNamed(s.ObjectExpressionExtractor.BasePropertiesExtractor), e(i.ServiceIdentifiers.Factory__IObjectExpressionExtractor).toFactory(n.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.IObjectExpressionExtractor));
    });
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(100),
        l = r(62),
        f = r(21),
        u = r(4),
        p = r(17),
        m = r(6),
        g = r(22);

    var y =
    /*#__PURE__*/
    function () {
      function y(e) {
        this.objectExpressionKeysTransformerCustomNodeFactory = e;
      }

      var _proto26 = y.prototype;

      _proto26.extract = function extract(e, t) {
        return this.transformObjectExpressionToVariableDeclaration(e, t);
      };

      _proto26.transformObjectExpressionToVariableDeclaration = function transformObjectExpressionToVariableDeclaration(e, t) {
        var r;
        var o = p.NodeStatementUtils.getScopeOfNode(t),
            n = u.NodeGuards.isNodeWithLexicalScope(o) ? o : null !== (r = g.NodeLexicalScopeUtils.getLexicalScope(o)) && void 0 !== r ? r : null;
        if (!n) throw new Error("Cannot find lexical scope node for the host statement node");
        var i = e.properties,
            a = this.getObjectExpressionHostNode(n, i),
            s = [a];
        return f.NodeAppender.insertBefore(o, s, t), m.NodeUtils.parentizeAst(a), m.NodeUtils.parentizeNode(a, o), {
          nodeToReplace: this.getObjectExpressionIdentifierNode(a),
          objectExpressionHostStatement: a,
          objectExpressionNode: this.getObjectExpressionNode(a)
        };
      };

      _proto26.getObjectExpressionHostNode = function getObjectExpressionHostNode(e, t) {
        var r = this.objectExpressionKeysTransformerCustomNodeFactory(l.ObjectExpressionKeysTransformerCustomNode.ObjectExpressionVariableDeclarationHostNode);
        r.initialize(e, t);
        var o = r.getNode()[0];
        if (!o || !u.NodeGuards.isVariableDeclarationNode(o)) throw new Error("`objectExpressionHostCustomNode.getNode()[0]` should returns array with `VariableDeclaration` node");
        return o;
      };

      _proto26.getObjectExpressionIdentifierNode = function getObjectExpressionIdentifierNode(e) {
        var t = e.declarations[0].id;
        if (!u.NodeGuards.isIdentifierNode(t)) throw new Error("`objectExpressionHostNode` should contain `VariableDeclarator` node with `Identifier` id property");
        return t;
      };

      _proto26.getObjectExpressionNode = function getObjectExpressionNode(e) {
        var t;
        var r = null !== (t = e.declarations[0].init) && void 0 !== t ? t : null;
        if (!r || !u.NodeGuards.isObjectExpressionNode(r)) throw new Error("`objectExpressionHostNode` should contain `VariableDeclarator` node with `ObjectExpression` init property");
        return r;
      };

      return y;
    }();

    y = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.Factory__IObjectExpressionKeysTransformerCustomNode)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.TObjectExpressionKeysTransformerCustomNodeFactory && d.TObjectExpressionKeysTransformerCustomNodeFactory) ? o : Object])], y), t.ObjectExpressionToVariableDeclarationExtractor = y;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(10),
        p = r(11),
        m = r(8),
        g = r(4);

    var y =
    /*#__PURE__*/
    function (_p$AbstractNodeTransf) {
      _inheritsLoose(y, _p$AbstractNodeTransf);

      function y(e, t) {
        return _p$AbstractNodeTransf.call(this, e, t) || this;
      }

      var _proto27 = y.prototype;

      _proto27.getVisitor = function getVisitor(e) {
        var _this14 = this;

        switch (e) {
          case u.TransformationStage.Converting:
            return {
              enter: function enter(e, t) {
                if (t && g.NodeGuards.isMemberExpressionNode(e)) return _this14.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto27.transformNode = function transformNode(e, t) {
        if (g.NodeGuards.isIdentifierNode(e.property)) {
          if (e.computed) return e;
          e.computed = !0, e.property = m.NodeFactory.literalNode(e.property.name);
        }

        return e;
      };

      return y;
    }(p.AbstractNodeTransformer);

    y = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], y), t.MemberExpressionTransformer = y;
  }, function (e, t, r) {
    var _o25,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(2),
        u = r(3),
        p = r(10),
        m = r(11),
        g = r(8),
        y = r(4);

    var h = _o25 =
    /*#__PURE__*/
    function (_m$AbstractNodeTransf) {
      _inheritsLoose(o, _m$AbstractNodeTransf);

      function o(e, t) {
        return _m$AbstractNodeTransf.call(this, e, t) || this;
      }

      var _proto28 = o.prototype;

      _proto28.getVisitor = function getVisitor(e) {
        var _this15 = this;

        switch (e) {
          case p.TransformationStage.Converting:
            return {
              enter: function enter(e, t) {
                if (t && y.NodeGuards.isMethodDefinitionNode(e)) return _this15.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto28.transformNode = function transformNode(e, t) {
        return y.NodeGuards.isIdentifierNode(e.key) ? this.replaceIdentifierKey(e, e.key) : y.NodeGuards.isLiteralNode(e.key) ? this.replaceLiteralKey(e, e.key) : e;
      };

      _proto28.replaceIdentifierKey = function replaceIdentifierKey(e, t) {
        return _o25.ignoredNames.includes(t.name) || e.computed || (e.computed = !0, e.key = g.NodeFactory.literalNode(t.name)), e;
      };

      _proto28.replaceLiteralKey = function replaceLiteralKey(e, t) {
        return "string" != typeof t.value || _o25.ignoredNames.includes(t.value) || e.computed || (e.computed = !0), e;
      };

      return o;
    }(m.AbstractNodeTransformer);

    h.ignoredNames = ["constructor"], h = _o25 = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(1, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== u.IRandomGenerator && u.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== f.IOptions && f.IOptions) ? i : Object])], h), t.MethodDefinitionTransformer = h;
  }, function (e, t, r) {
    var _o26,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        l = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = l(r(12)),
        m = r(104),
        g = r(2),
        y = r(3),
        h = r(10),
        b = r(11),
        N = r(4),
        I = r(17),
        v = r(61);

    var S = _o26 =
    /*#__PURE__*/
    function (_b$AbstractNodeTransf) {
      _inheritsLoose(o, _b$AbstractNodeTransf);

      function o(e, t, r) {
        var _this16;

        _this16 = _b$AbstractNodeTransf.call(this, t, r) || this, _this16.objectExpressionExtractorFactory = e;
        return _this16;
      }

      o.isProhibitedHostStatement = function isProhibitedHostStatement(e, t) {
        return _o26.isReferencedIdentifierName(e, t) || _o26.isProhibitedSequenceExpression(e, t);
      };

      o.isReferencedIdentifierName = function isReferencedIdentifierName(e, t) {
        var r = [];
        var o = !1,
            n = !1;
        return p.traverse(t, {
          enter: function enter(t) {
            t === e && (n = !0), N.NodeGuards.isIdentifierNode(t) && (n ? r.includes(t.name) && (o = !0) : r.push(t.name));
          },
          leave: function leave(t) {
            if (t === e) return n = !1, p.VisitorOption.Break;
          }
        }), o;
      };

      o.isProhibitedSequenceExpression = function isProhibitedSequenceExpression(e, t) {
        return N.NodeGuards.isExpressionStatementNode(t) && N.NodeGuards.isSequenceExpressionNode(t.expression) && t.expression.expressions.some(function (e) {
          return N.NodeGuards.isCallExpressionNode(e) && N.NodeGuards.isSuperNode(e.callee);
        });
      };

      var _proto29 = o.prototype;

      _proto29.getVisitor = function getVisitor(e) {
        var _this17 = this;

        if (!this.options.transformObjectKeys) return null;

        switch (e) {
          case h.TransformationStage.Converting:
            return {
              leave: function leave(e, t) {
                if (t && N.NodeGuards.isObjectExpressionNode(e)) return _this17.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto29.transformNode = function transformNode(e, t) {
        if (!e.properties.length) return e;
        var r = I.NodeStatementUtils.getRootStatementOfNode(e);
        return _o26.isProhibitedHostStatement(e, r) ? e : this.applyObjectExpressionKeysExtractorsRecursive(_o26.objectExpressionExtractorNames, e, r);
      };

      _proto29.applyObjectExpressionKeysExtractorsRecursive = function applyObjectExpressionKeysExtractorsRecursive(e, t, r) {
        var o = [].concat(e),
            n = o.shift();
        if (!n) return t;

        var _this$objectExpressio = this.objectExpressionExtractorFactory(n).extract(t, r),
            i = _this$objectExpressio.nodeToReplace,
            a = _this$objectExpressio.objectExpressionHostStatement,
            s = _this$objectExpressio.objectExpressionNode;

        return this.applyObjectExpressionKeysExtractorsRecursive(o, s, a), i;
      };

      return o;
    }(b.AbstractNodeTransformer);

    S.objectExpressionExtractorNames = [v.ObjectExpressionExtractor.ObjectExpressionToVariableDeclarationExtractor, v.ObjectExpressionExtractor.BasePropertiesExtractor], S = _o26 = s([f.injectable(), d(0, f.inject(u.ServiceIdentifiers.Factory__IObjectExpressionExtractor)), d(1, f.inject(u.ServiceIdentifiers.IRandomGenerator)), d(2, f.inject(u.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== m.TObjectExpressionExtractorFactory && m.TObjectExpressionExtractorFactory) ? n : Object, "function" == typeof (i = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== g.IOptions && g.IOptions) ? a : Object])], S), t.ObjectExpressionKeysTransformer = S;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(10),
        p = r(11),
        m = r(8),
        g = r(4);

    var y =
    /*#__PURE__*/
    function (_p$AbstractNodeTransf2) {
      _inheritsLoose(y, _p$AbstractNodeTransf2);

      function y(e, t) {
        return _p$AbstractNodeTransf2.call(this, e, t) || this;
      }

      var _proto30 = y.prototype;

      _proto30.getVisitor = function getVisitor(e) {
        var _this18 = this;

        switch (e) {
          case u.TransformationStage.Converting:
            return {
              enter: function enter(e, t) {
                if (t && g.NodeGuards.isObjectExpressionNode(e)) return _this18.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto30.transformNode = function transformNode(e, t) {
        var _this19 = this;

        return e.properties.forEach(function (e) {
          e.key && (e.computed ? _this19.transformComputedProperty(e) : _this19.transformBaseProperty(e));
        }), e;
      };

      _proto30.transformComputedProperty = function transformComputedProperty(e) {
        g.NodeGuards.isLiteralNode(e.key) && "string" == typeof e.key.value && (e.key = m.NodeFactory.literalNode(e.key.value));
      };

      _proto30.transformBaseProperty = function transformBaseProperty(e) {
        e.shorthand && (e.shorthand = !1), g.NodeGuards.isIdentifierNode(e.key) && (e.key = m.NodeFactory.literalNode(e.key.name));
      };

      return y;
    }(p.AbstractNodeTransformer);

    y = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], y), t.ObjectExpressionTransformer = y;
  }, function (e, t, r) {
    var _o27,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        d = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = d(r(12)),
        p = r(2),
        m = r(3),
        g = r(24),
        y = r(10),
        h = r(11),
        b = r(8),
        N = r(4),
        I = r(45),
        v = r(6);

    var S = _o27 =
    /*#__PURE__*/
    function (_h$AbstractNodeTransf) {
      _inheritsLoose(o, _h$AbstractNodeTransf);

      function o(e, t) {
        var _this20;

        _this20 = _h$AbstractNodeTransf.call(this, e, t) || this, _this20.runAfter = [g.NodeTransformer.ObjectExpressionKeysTransformer, g.NodeTransformer.TemplateLiteralTransformer];
        return _this20;
      }

      o.chunkString = function chunkString(e, t) {
        var r = Math.ceil(e.length / t),
            o = [];
        var n = 0;

        for (var _i5 = 0; _i5 < r; ++_i5, n += t) {
          o[_i5] = e.substr(n, t);
        }

        return o;
      };

      var _proto31 = o.prototype;

      _proto31.getVisitor = function getVisitor(e) {
        var _this21 = this;

        switch (e) {
          case y.TransformationStage.Converting:
            return {
              enter: function enter(e, t) {
                if (_this21.options.splitStrings) return t && N.NodeGuards.isLiteralNode(e) ? _this21.transformNode(e, t) : void 0;
              }
            };

          default:
            return null;
        }
      };

      _proto31.transformNode = function transformNode(e, t) {
        var _this22 = this;

        if (I.NodeLiteralUtils.isProhibitedLiteralNode(e, t)) return e;
        var r = this.transformLiteralNodeByChunkLength(e, t, _o27.firstPassChunkLength);
        return u.replace(r, {
          enter: function enter(e, t) {
            if (t && N.NodeGuards.isLiteralNode(e)) return _this22.transformLiteralNodeByChunkLength(e, t, _this22.options.splitStringsChunkLength);
          }
        });
      };

      _proto31.transformLiteralNodeByChunkLength = function transformLiteralNodeByChunkLength(e, t, r) {
        if ("string" != typeof e.value) return e;
        if (r >= e.value.length) return e;

        var n = _o27.chunkString(e.value, r),
            i = this.transformStringChunksToBinaryExpressionNode(n);

        return v.NodeUtils.parentizeAst(i), v.NodeUtils.parentizeNode(i, t), i;
      };

      _proto31.transformStringChunksToBinaryExpressionNode = function transformStringChunksToBinaryExpressionNode(e) {
        var t = e.shift(),
            r = e.shift();
        if (!t || !r) throw new Error("First and second chunks values should not be empty");
        var o = b.NodeFactory.binaryExpressionNode("+", b.NodeFactory.literalNode(t), b.NodeFactory.literalNode(r));
        return e.reduce(function (e, t) {
          var r = b.NodeFactory.literalNode(t);
          return b.NodeFactory.binaryExpressionNode("+", e, r);
        }, o);
      };

      return o;
    }(h.AbstractNodeTransformer);

    S.firstPassChunkLength = 1e3, S = _o27 = a([l.injectable(), c(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), c(1, l.inject(f.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== p.IOptions && p.IOptions) ? i : Object])], S), t.SplitStringTransformer = S;
  }, function (e, t, r) {
    var _o28,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(2),
        u = r(3),
        p = r(10),
        m = r(11),
        g = r(8),
        y = r(4),
        h = r(6);

    var b = _o28 =
    /*#__PURE__*/
    function (_m$AbstractNodeTransf2) {
      _inheritsLoose(o, _m$AbstractNodeTransf2);

      function o(e, t) {
        return _m$AbstractNodeTransf2.call(this, e, t) || this;
      }

      o.isLiteralNodeWithStringValue = function isLiteralNodeWithStringValue(e) {
        return !!e && y.NodeGuards.isLiteralNode(e) && "string" == typeof e.value;
      };

      o.isValidTemplateLiteralNode = function isValidTemplateLiteralNode(e, t) {
        return y.NodeGuards.isTemplateLiteralNode(e) && !y.NodeGuards.isTaggedTemplateExpressionNode(t);
      };

      var _proto32 = o.prototype;

      _proto32.getVisitor = function getVisitor(e) {
        var _this23 = this;

        switch (e) {
          case p.TransformationStage.Converting:
            return {
              enter: function enter(e, t) {
                if (t && _o28.isValidTemplateLiteralNode(e, t)) return _this23.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto32.transformNode = function transformNode(e, t) {
        var r = e.expressions;
        var n,
            i = [];

        if (e.quasis.forEach(function (e) {
          i.push(g.NodeFactory.literalNode(e.value.cooked));
          var t = r.shift();
          t && i.push(t);
        }), i = i.filter(function (e) {
          return !(y.NodeGuards.isLiteralNode(e) && "" === e.value);
        }), _o28.isLiteralNodeWithStringValue(i[0]) || _o28.isLiteralNodeWithStringValue(i[1]) || i.unshift(g.NodeFactory.literalNode("")), i.length > 1) {
          var _e2 = g.NodeFactory.binaryExpressionNode("+", i.shift(), i.shift());

          i.forEach(function (t) {
            _e2 = g.NodeFactory.binaryExpressionNode("+", _e2, t);
          }), n = _e2;
        } else n = i[0];

        return h.NodeUtils.parentizeAst(n), h.NodeUtils.parentizeNode(n, t), n;
      };

      return o;
    }(m.AbstractNodeTransformer);

    b = _o28 = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(1, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== u.IRandomGenerator && u.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== f.IOptions && f.IOptions) ? i : Object])], b), t.TemplateLiteralTransformer = b;
  }, function (e, t, r) {
    var _o29,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = r(21),
        s = r(8),
        c = r(4),
        d = r(17);

    var l = _o29 =
    /*#__PURE__*/
    function () {
      function o() {}

      o.getPropertyNodeKeyName = function getPropertyNodeKeyName(e) {
        var t = e.key;
        return !c.NodeGuards.isLiteralNode(t) || "string" != typeof t.value && "number" != typeof t.value ? c.NodeGuards.isIdentifierNode(t) ? t.name : null : t.value.toString();
      };

      o.isProhibitedPattern = function isProhibitedPattern(e) {
        return !e || c.NodeGuards.isObjectPatternNode(e) || c.NodeGuards.isArrayPatternNode(e) || c.NodeGuards.isAssignmentPatternNode(e) || c.NodeGuards.isRestElementNode(e);
      };

      var _proto33 = o.prototype;

      _proto33.extract = function extract(e, t) {
        var r = e.parentNode;
        return r && c.NodeGuards.isVariableDeclaratorNode(r) && c.NodeGuards.isIdentifierNode(r.id) ? this.transformObjectExpressionNode(e, t, r.id) : {
          nodeToReplace: e,
          objectExpressionHostStatement: t,
          objectExpressionNode: e
        };
      };

      _proto33.transformObjectExpressionNode = function transformObjectExpressionNode(e, t, r) {
        var o = e.properties,
            _this$extractProperti = this.extractPropertiesToExpressionStatements(o, t, r),
            n = _this$extractProperti[0],
            i = _this$extractProperti[1],
            s = d.NodeStatementUtils.getScopeOfNode(t);

        return this.filterExtractedObjectExpressionProperties(e, i), a.NodeAppender.insertAfter(s, n, t), {
          nodeToReplace: e,
          objectExpressionHostStatement: t,
          objectExpressionNode: e
        };
      };

      _proto33.extractPropertiesToExpressionStatements = function extractPropertiesToExpressionStatements(e, t, r) {
        var n = e.length,
            i = [],
            a = [];

        for (var _d = 0; _d < n; _d++) {
          var _n3 = e[_d],
              _l = _n3.value;
          if (_o29.isProhibitedPattern(_l)) continue;

          var f = _o29.getPropertyNodeKeyName(_n3);

          if (!f) continue;
          var u = !_n3.computed || _n3.computed && _n3.key && c.NodeGuards.isLiteralNode(_n3.key) ? s.NodeFactory.literalNode(f) : s.NodeFactory.identifierNode(f),
              p = s.NodeFactory.memberExpressionNode(r, u, !0),
              m = s.NodeFactory.expressionStatementNode(s.NodeFactory.assignmentExpressionNode("=", p, _l));
          c.NodeGuards.isObjectExpressionNode(_n3.value) && this.transformObjectExpressionNode(_n3.value, t, p), i.push(m), a.push(_d);
        }

        return [i, a];
      };

      _proto33.filterExtractedObjectExpressionProperties = function filterExtractedObjectExpressionProperties(e, t) {
        e.properties = e.properties.filter(function (e, r) {
          return !t.includes(r);
        });
      };

      return o;
    }();

    l = _o29 = n([i.injectable()], l), t.BasePropertiesExtractor = l;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(27),
        s = r(63),
        c = r(110),
        d = r(111),
        l = r(112),
        f = r(113),
        u = r(114),
        p = r(115),
        m = r(119),
        g = r(121),
        y = r(123),
        h = r(125),
        b = r(127),
        N = r(131),
        I = r(133),
        v = r(135),
        S = r(137),
        O = r(144),
        C = r(146);
    t.customCodeHelpersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.ICustomCodeHelper).to(p.ConsoleOutputDisableCodeHelper).whenTargetNamed(a.CustomCodeHelper.ConsoleOutputDisable), e(i.ServiceIdentifiers.ICustomCodeHelper).to(y.DebugProtectionFunctionCallCodeHelper).whenTargetNamed(a.CustomCodeHelper.DebugProtectionFunctionCall), e(i.ServiceIdentifiers.ICustomCodeHelper).to(h.DebugProtectionFunctionIntervalCodeHelper).whenTargetNamed(a.CustomCodeHelper.DebugProtectionFunctionInterval), e(i.ServiceIdentifiers.ICustomCodeHelper).to(b.DebugProtectionFunctionCodeHelper).whenTargetNamed(a.CustomCodeHelper.DebugProtectionFunction), e(i.ServiceIdentifiers.ICustomCodeHelper).to(N.DomainLockCodeHelper).whenTargetNamed(a.CustomCodeHelper.DomainLock), e(i.ServiceIdentifiers.ICustomCodeHelper).to(I.CallsControllerFunctionCodeHelper).whenTargetNamed(a.CustomCodeHelper.CallsControllerFunction), e(i.ServiceIdentifiers.ICustomCodeHelper).to(v.SelfDefendingUnicodeCodeHelper).whenTargetNamed(a.CustomCodeHelper.SelfDefendingUnicode), e(i.ServiceIdentifiers.ICustomCodeHelper).to(S.StringArrayCallsWrapperCodeHelper).whenTargetNamed(a.CustomCodeHelper.StringArrayCallsWrapper), e(i.ServiceIdentifiers.ICustomCodeHelper).to(O.StringArrayCodeHelper).whenTargetNamed(a.CustomCodeHelper.StringArray), e(i.ServiceIdentifiers.ICustomCodeHelper).to(C.StringArrayRotateFunctionCodeHelper).whenTargetNamed(a.CustomCodeHelper.StringArrayRotateFunction), e(i.ServiceIdentifiers.ICustomCodeHelperGroup).to(c.ConsoleOutputCodeHelperGroup).whenTargetNamed(s.CustomCodeHelperGroup.ConsoleOutput), e(i.ServiceIdentifiers.ICustomCodeHelperGroup).to(d.DebugProtectionCodeHelperGroup).whenTargetNamed(s.CustomCodeHelperGroup.DebugProtection), e(i.ServiceIdentifiers.ICustomCodeHelperGroup).to(l.DomainLockCustomCodeHelperGroup).whenTargetNamed(s.CustomCodeHelperGroup.DomainLock), e(i.ServiceIdentifiers.ICustomCodeHelperGroup).to(f.SelfDefendingCodeHelperGroup).whenTargetNamed(s.CustomCodeHelperGroup.SelfDefending), e(i.ServiceIdentifiers.ICustomCodeHelperGroup).to(u.StringArrayCodeHelperGroup).whenTargetNamed(s.CustomCodeHelperGroup.StringArray), e(i.ServiceIdentifiers.Factory__ICustomCodeHelper).toFactory(o.InversifyContainerFacade.getFactory(i.ServiceIdentifiers.ICustomCodeHelper)), e(i.ServiceIdentifiers.Factory__ICustomCodeHelperGroup).toFactory(o.InversifyContainerFacade.getFactory(i.ServiceIdentifiers.ICustomCodeHelperGroup)), e(i.ServiceIdentifiers.ICustomCodeHelperFormatter).to(m.CustomCodeHelperFormatter).inSingletonScope(), e(i.ServiceIdentifiers.ICustomCodeHelperObfuscator).to(g.CustomCodeHelperObfuscator).inSingletonScope();
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(29),
        m = r(5),
        g = r(2),
        y = r(3),
        h = r(7),
        b = r(27),
        N = r(25),
        I = r(30),
        v = r(21),
        S = r(22),
        O = r(4);

    var C =
    /*#__PURE__*/
    function (_I$AbstractCustomCode) {
      _inheritsLoose(C, _I$AbstractCustomCode);

      function C(e, t, r, o) {
        var _this24;

        _this24 = _I$AbstractCustomCode.call(this, t, r, o) || this, _this24.appendEvent = N.ObfuscationEvent.BeforeObfuscation, _this24.customCodeHelperFactory = e;
        return _this24;
      }

      var _proto34 = C.prototype;

      _proto34.appendNodes = function appendNodes(e, t) {
        var _this25 = this;

        var r;
        if (!this.options.disableConsoleOutput) return;
        var o = this.getRandomCallsGraphIndex(t.length),
            n = t.length ? v.NodeAppender.getOptimalBlockScope(t, o) : e,
            i = t.length ? v.NodeAppender.getOptimalBlockScope(t, o, 1) : e,
            a = null !== (r = S.NodeLexicalScopeUtils.getLexicalScope(n)) && void 0 !== r ? r : null,
            s = a && O.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5),
            c = a && O.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5);
        this.appendCustomNodeIfExist(b.CustomCodeHelper.ConsoleOutputDisable, function (e) {
          e.initialize(c, s), v.NodeAppender.prepend(n, e.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.CallsControllerFunction, function (e) {
          e.initialize(_this25.appendEvent, c), v.NodeAppender.prepend(i, e.getNode());
        });
      };

      _proto34.initialize = function initialize() {
        if (this.customCodeHelpers = new Map(), !this.options.disableConsoleOutput) return;
        var e = this.customCodeHelperFactory(b.CustomCodeHelper.ConsoleOutputDisable),
            t = this.customCodeHelperFactory(b.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(b.CustomCodeHelper.ConsoleOutputDisable, e), this.customCodeHelpers.set(b.CustomCodeHelper.CallsControllerFunction, t);
      };

      return C;
    }(I.AbstractCustomCodeHelperGroup);

    c([h.initializable(), d("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], C.prototype, "customCodeHelpers", void 0), C = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__ICustomCodeHelper)), l(1, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== p.TCustomCodeHelperFactory && p.TCustomCodeHelperFactory) ? n : Object, "function" == typeof (i = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? i : Object, "function" == typeof (a = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== g.IOptions && g.IOptions) ? s : Object])], C), t.ConsoleOutputCodeHelperGroup = C;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(29),
        m = r(5),
        g = r(2),
        y = r(3),
        h = r(7),
        b = r(27),
        N = r(25),
        I = r(30),
        v = r(21),
        S = r(4),
        O = r(22);

    var C =
    /*#__PURE__*/
    function (_I$AbstractCustomCode2) {
      _inheritsLoose(C, _I$AbstractCustomCode2);

      function C(e, t, r, o) {
        var _this26;

        _this26 = _I$AbstractCustomCode2.call(this, t, r, o) || this, _this26.appendEvent = N.ObfuscationEvent.BeforeObfuscation, _this26.customCodeHelperFactory = e;
        return _this26;
      }

      var _proto35 = C.prototype;

      _proto35.appendNodes = function appendNodes(e, t) {
        var _this27 = this;

        var r;
        if (!this.options.debugProtection) return;
        var o = this.getRandomCallsGraphIndex(t.length),
            n = t.length ? v.NodeAppender.getOptimalBlockScope(t, o) : e,
            i = t.length ? v.NodeAppender.getOptimalBlockScope(t, o, 1) : e,
            a = null !== (r = O.NodeLexicalScopeUtils.getLexicalScope(n)) && void 0 !== r ? r : null,
            s = a && S.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5),
            c = a && S.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5);
        this.appendCustomNodeIfExist(b.CustomCodeHelper.DebugProtectionFunctionCall, function (e) {
          e.initialize(s, c), v.NodeAppender.prepend(n, e.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.CallsControllerFunction, function (e) {
          e.initialize(_this27.appendEvent, c), v.NodeAppender.prepend(i, e.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.DebugProtectionFunction, function (t) {
          t.initialize(s), v.NodeAppender.append(e, t.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.DebugProtectionFunctionInterval, function (t) {
          var r = S.NodeGuards.isSwitchCaseNode(e) ? e.consequent.length : e.body.length,
              o = _this27.randomGenerator.getRandomInteger(0, r);

          t.initialize(s), v.NodeAppender.insertAtIndex(e, t.getNode(), o);
        });
      };

      _proto35.initialize = function initialize() {
        if (this.customCodeHelpers = new Map(), !this.options.debugProtection) return;
        var e = this.customCodeHelperFactory(b.CustomCodeHelper.DebugProtectionFunction),
            t = this.customCodeHelperFactory(b.CustomCodeHelper.DebugProtectionFunctionCall),
            r = this.customCodeHelperFactory(b.CustomCodeHelper.DebugProtectionFunctionInterval),
            o = this.customCodeHelperFactory(b.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(b.CustomCodeHelper.DebugProtectionFunction, e), this.customCodeHelpers.set(b.CustomCodeHelper.DebugProtectionFunctionCall, t), this.options.debugProtectionInterval && this.customCodeHelpers.set(b.CustomCodeHelper.DebugProtectionFunctionInterval, r), this.customCodeHelpers.set(b.CustomCodeHelper.CallsControllerFunction, o);
      };

      return C;
    }(I.AbstractCustomCodeHelperGroup);

    c([h.initializable(), d("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], C.prototype, "customCodeHelpers", void 0), C = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__ICustomCodeHelper)), l(1, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== p.TCustomCodeHelperFactory && p.TCustomCodeHelperFactory) ? n : Object, "function" == typeof (i = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? i : Object, "function" == typeof (a = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== g.IOptions && g.IOptions) ? s : Object])], C), t.DebugProtectionCodeHelperGroup = C;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(29),
        m = r(5),
        g = r(2),
        y = r(3),
        h = r(7),
        b = r(27),
        N = r(25),
        I = r(30),
        v = r(21),
        S = r(22),
        O = r(4);

    var C =
    /*#__PURE__*/
    function (_I$AbstractCustomCode3) {
      _inheritsLoose(C, _I$AbstractCustomCode3);

      function C(e, t, r, o) {
        var _this28;

        _this28 = _I$AbstractCustomCode3.call(this, t, r, o) || this, _this28.appendEvent = N.ObfuscationEvent.BeforeObfuscation, _this28.customCodeHelperFactory = e;
        return _this28;
      }

      var _proto36 = C.prototype;

      _proto36.appendNodes = function appendNodes(e, t) {
        var _this29 = this;

        var r;
        if (!this.options.domainLock.length) return;
        var o = this.getRandomCallsGraphIndex(t.length),
            n = t.length ? v.NodeAppender.getOptimalBlockScope(t, o) : e,
            i = t.length ? v.NodeAppender.getOptimalBlockScope(t, o, 1) : e,
            a = null !== (r = S.NodeLexicalScopeUtils.getLexicalScope(n)) && void 0 !== r ? r : null,
            s = a && O.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5),
            c = a && O.NodeGuards.isProgramNode(a) ? this.identifierNamesGenerator.generate(a) : this.randomGenerator.getRandomString(5);
        this.appendCustomNodeIfExist(b.CustomCodeHelper.DomainLock, function (e) {
          e.initialize(c, s), v.NodeAppender.prepend(n, e.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.CallsControllerFunction, function (e) {
          e.initialize(_this29.appendEvent, c), v.NodeAppender.prepend(i, e.getNode());
        });
      };

      _proto36.initialize = function initialize() {
        if (this.customCodeHelpers = new Map(), !this.options.domainLock.length) return;
        var e = this.customCodeHelperFactory(b.CustomCodeHelper.DomainLock),
            t = this.customCodeHelperFactory(b.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(b.CustomCodeHelper.DomainLock, e), this.customCodeHelpers.set(b.CustomCodeHelper.CallsControllerFunction, t);
      };

      return C;
    }(I.AbstractCustomCodeHelperGroup);

    c([h.initializable(), d("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], C.prototype, "customCodeHelpers", void 0), C = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__ICustomCodeHelper)), l(1, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== p.TCustomCodeHelperFactory && p.TCustomCodeHelperFactory) ? n : Object, "function" == typeof (i = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? i : Object, "function" == typeof (a = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== g.IOptions && g.IOptions) ? s : Object])], C), t.DomainLockCustomCodeHelperGroup = C;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(29),
        m = r(5),
        g = r(2),
        y = r(3),
        h = r(7),
        b = r(27),
        N = r(25),
        I = r(30),
        v = r(21),
        S = r(22);

    var O =
    /*#__PURE__*/
    function (_I$AbstractCustomCode4) {
      _inheritsLoose(O, _I$AbstractCustomCode4);

      function O(e, t, r, o) {
        var _this30;

        _this30 = _I$AbstractCustomCode4.call(this, t, r, o) || this, _this30.appendEvent = N.ObfuscationEvent.BeforeObfuscation, _this30.customCodeHelperFactory = e;
        return _this30;
      }

      var _proto37 = O.prototype;

      _proto37.appendNodes = function appendNodes(e, t) {
        var _this31 = this;

        var r;
        if (!this.options.selfDefending) return;
        var o = this.getRandomCallsGraphIndex(t.length),
            n = t.length ? v.NodeAppender.getOptimalBlockScope(t, o) : e,
            i = t.length ? v.NodeAppender.getOptimalBlockScope(t, o, 1) : e,
            a = null !== (r = S.NodeLexicalScopeUtils.getLexicalScope(n)) && void 0 !== r ? r : null,
            s = a ? this.identifierNamesGenerator.generate(a) : this.identifierNamesGenerator.generateForGlobalScope(),
            c = a ? this.identifierNamesGenerator.generate(a) : this.identifierNamesGenerator.generateForGlobalScope();
        this.appendCustomNodeIfExist(b.CustomCodeHelper.SelfDefendingUnicode, function (e) {
          e.initialize(c, s), v.NodeAppender.prepend(n, e.getNode());
        }), this.appendCustomNodeIfExist(b.CustomCodeHelper.CallsControllerFunction, function (e) {
          e.initialize(_this31.appendEvent, c), v.NodeAppender.prepend(i, e.getNode());
        });
      };

      _proto37.initialize = function initialize() {
        if (this.customCodeHelpers = new Map(), !this.options.selfDefending) return;
        var e = this.customCodeHelperFactory(b.CustomCodeHelper.SelfDefendingUnicode),
            t = this.customCodeHelperFactory(b.CustomCodeHelper.CallsControllerFunction);
        this.customCodeHelpers.set(b.CustomCodeHelper.SelfDefendingUnicode, e), this.customCodeHelpers.set(b.CustomCodeHelper.CallsControllerFunction, t);
      };

      return O;
    }(I.AbstractCustomCodeHelperGroup);

    c([h.initializable(), d("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], O.prototype, "customCodeHelpers", void 0), O = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__ICustomCodeHelper)), l(1, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== p.TCustomCodeHelperFactory && p.TCustomCodeHelperFactory) ? n : Object, "function" == typeof (i = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? i : Object, "function" == typeof (a = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== g.IOptions && g.IOptions) ? s : Object])], O), t.SelfDefendingCodeHelperGroup = O;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(29),
        g = r(5),
        y = r(2),
        h = r(3),
        b = r(37),
        N = r(7),
        I = r(27),
        v = r(25),
        S = r(30),
        O = r(21);

    var C =
    /*#__PURE__*/
    function (_S$AbstractCustomCode) {
      _inheritsLoose(C, _S$AbstractCustomCode);

      function C(e, t, r, o, n) {
        var _this32;

        _this32 = _S$AbstractCustomCode.call(this, r, o, n) || this, _this32.appendEvent = v.ObfuscationEvent.AfterObfuscation, _this32.customCodeHelperFactory = e, _this32.stringArrayStorage = t;
        return _this32;
      }

      var _proto38 = C.prototype;

      _proto38.appendNodes = function appendNodes(e, t) {
        this.stringArrayStorage.getLength() && (this.appendCustomNodeIfExist(I.CustomCodeHelper.StringArray, function (t) {
          O.NodeAppender.prepend(e, t.getNode());
        }), this.appendCustomNodeIfExist(I.CustomCodeHelper.StringArrayCallsWrapper, function (t) {
          O.NodeAppender.insertAtIndex(e, t.getNode(), 1);
        }), this.appendCustomNodeIfExist(I.CustomCodeHelper.StringArrayRotateFunction, function (t) {
          O.NodeAppender.insertAtIndex(e, t.getNode(), 1);
        }));
      };

      _proto38.initialize = function initialize() {
        if (this.customCodeHelpers = new Map(), !this.options.stringArray) return;
        var e = this.customCodeHelperFactory(I.CustomCodeHelper.StringArray),
            t = this.customCodeHelperFactory(I.CustomCodeHelper.StringArrayCallsWrapper),
            r = this.customCodeHelperFactory(I.CustomCodeHelper.StringArrayRotateFunction),
            o = this.stringArrayStorage.getStorageName(),
            n = this.stringArrayStorage.getStorageCallsWrapperName(),
            i = this.stringArrayStorage.getRotationAmount();
        e.initialize(this.stringArrayStorage, o), t.initialize(o, n), r.initialize(o, i), this.customCodeHelpers.set(I.CustomCodeHelper.StringArray, e), this.customCodeHelpers.set(I.CustomCodeHelper.StringArrayCallsWrapper, t), this.options.rotateStringArray && this.customCodeHelpers.set(I.CustomCodeHelper.StringArrayRotateFunction, r);
      };

      return C;
    }(S.AbstractCustomCodeHelperGroup);

    d([N.initializable(), l("design:type", "function" == typeof (o = "undefined" != typeof Map && Map) ? o : Object)], C.prototype, "customCodeHelpers", void 0), C = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__ICustomCodeHelper)), f(1, u.inject(p.ServiceIdentifiers.IStringArrayStorage)), f(2, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== m.TCustomCodeHelperFactory && m.TCustomCodeHelperFactory) ? n : Object, "function" == typeof (i = void 0 !== b.IStringArrayStorage && b.IStringArrayStorage) ? i : Object, "function" == typeof (a = void 0 !== g.TIdentifierNamesGeneratorFactory && g.TIdentifierNamesGeneratorFactory) ? a : Object, "function" == typeof (s = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== y.IOptions && y.IOptions) ? c : Object])], C), t.StringArrayCodeHelperGroup = C;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(5),
        m = r(9),
        g = r(13),
        y = r(2),
        h = r(3),
        b = r(23),
        N = r(116),
        I = r(48),
        v = r(7),
        S = r(15),
        O = r(6);

    var C =
    /*#__PURE__*/
    function (_S$AbstractCustomCode2) {
      _inheritsLoose(C, _S$AbstractCustomCode2);

      function C(e, t, r, o, n) {
        return _S$AbstractCustomCode2.call(this, e, t, r, o, n) || this;
      }

      var _proto39 = C.prototype;

      _proto39.initialize = function initialize(e, t) {
        this.callsControllerFunctionName = e, this.consoleOutputDisableFunctionName = t;
      };

      _proto39.getNodeStructure = function getNodeStructure(e) {
        return O.NodeUtils.convertCodeToStructure(e);
      };

      _proto39.getCodeHelperTemplate = function getCodeHelperTemplate() {
        var e = this.options.target !== b.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : I.GlobalVariableNoEvalTemplate();
        return this.customCodeHelperFormatter.formatTemplate(N.ConsoleOutputDisableExpressionTemplate(), {
          callControllerFunctionName: this.callsControllerFunctionName,
          consoleLogDisableFunctionName: this.consoleOutputDisableFunctionName,
          globalVariableTemplate: e
        });
      };

      return C;
    }(S.AbstractCustomCodeHelper);

    c([v.initializable(), d("design:type", String)], C.prototype, "callsControllerFunctionName", void 0), c([v.initializable(), d("design:type", String)], C.prototype, "consoleOutputDisableFunctionName", void 0), C = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.ICustomCodeHelperObfuscator)), l(3, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(4, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (o = void 0 !== p.TIdentifierNamesGeneratorFactory && p.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== m.ICustomCodeHelperFormatter && m.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperObfuscator && g.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], C), t.ConsoleOutputDisableCodeHelper = C;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ConsoleOutputDisableExpressionTemplate = function () {
      return "\n        const {consoleLogDisableFunctionName} = {callControllerFunctionName}(this, function () {\n            const func = function () {};\n            \n            {globalVariableTemplate}\n                        \n            if (!that.console) {\n                that.console = (function (func){\n                    const c = {};\n                    \n                    c.log = func;\n                    c.warn = func;\n                    c.debug = func;\n                    c.info = func;\n                    c.error = func;\n                    c.exception = func;\n                    c.table = func;\n                    c.trace = func;\n                    \n                    return c;\n                })(func);\n            } else {\n                that.console.log = func;\n                that.console.warn = func;\n                that.console.debug = func;\n                that.console.info = func;\n                that.console.error = func;\n                that.console.exception = func;\n                that.console.table = func;\n                that.console.trace = func;\n            }\n        });\n        \n        {consoleLogDisableFunctionName}();\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GlobalVariableTemplate1 = function () {
      return "\n        let that;\n        \n        try {\n            const getGlobal = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');');\n            \n            that = getGlobal();\n        } catch (e) {\n            that = window;\n        }\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GlobalVariableTemplate2 = function () {
      return "\n        const getGlobal = function () {\n            let globalObject;\n        \n            try {\n                globalObject = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();\n            } catch (e) {\n                globalObject = window;\n            }\n            \n            return globalObject;\n        };\n        const that = getGlobal();\n    ";
    };
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        s = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    },
        c = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = s(r(12)),
        u = c(r(120)),
        p = r(64),
        m = r(4);

    var g =
    /*#__PURE__*/
    function () {
      function g(e) {
        this.prevailingKindOfVariables = e.getPrevailingKind();
      }

      var _proto40 = g.prototype;

      _proto40.formatTemplate = function formatTemplate(e, t) {
        return u.default(e, t);
      };

      _proto40.formatStructure = function formatStructure(e) {
        var _this33 = this;

        for (var _iterator5 = e, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray5) {
            if (_i6 >= _iterator5.length) break;
            _ref6 = _iterator5[_i6++];
          } else {
            _i6 = _iterator5.next();
            if (_i6.done) break;
            _ref6 = _i6.value;
          }

          var _t6 = _ref6;
          f.replace(_t6, {
            enter: function enter(e) {
              if (m.NodeGuards.isVariableDeclarationNode(e)) return "var" === _this33.prevailingKindOfVariables && (e.kind = "var"), e;
            }
          });
        }

        return e;
      };

      return g;
    }();

    g = n([d.injectable(), a(0, d.inject(l.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)), i("design:paramtypes", ["function" == typeof (o = void 0 !== p.IPrevailingKindOfVariablesAnalyzer && p.IPrevailingKindOfVariablesAnalyzer) ? o : Object])], g), t.CustomCodeHelperFormatter = g;
  }, function (e, t) {
    e.exports = require("string-template");
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(122),
        p = r(53);

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t) {
        this.randomGenerator = e, this.options = t;
      }

      var _proto41 = m.prototype;

      _proto41.obfuscateTemplate = function obfuscateTemplate(e, t) {
        if (t === void 0) {
          t = {};
        }

        return p.JavaScriptObfuscator.obfuscate(e, Object.assign(Object.assign(Object.assign({}, u.NO_ADDITIONAL_NODES_PRESET), {
          identifierNamesGenerator: this.options.identifierNamesGenerator,
          identifiersDictionary: this.options.identifiersDictionary,
          seed: this.randomGenerator.getRawSeed()
        }), t)).getObfuscatedCode();
      };

      return m;
    }();

    m = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], m), t.CustomCodeHelperObfuscator = m;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(33),
        n = r(23),
        i = r(34);
    t.NO_ADDITIONAL_NODES_PRESET = Object.freeze({
      compact: !0,
      controlFlowFlattening: !1,
      controlFlowFlatteningThreshold: 0,
      deadCodeInjection: !1,
      deadCodeInjectionThreshold: 0,
      debugProtection: !1,
      debugProtectionInterval: !1,
      disableConsoleOutput: !1,
      domainLock: [],
      exclude: [],
      identifierNamesGenerator: o.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator,
      identifiersPrefix: "",
      identifiersDictionary: [],
      inputFileName: "",
      log: !1,
      renameGlobals: !1,
      reservedNames: [],
      reservedStrings: [],
      rotateStringArray: !1,
      seed: 0,
      selfDefending: !1,
      shuffleStringArray: !1,
      sourceMap: !1,
      sourceMapBaseUrl: "",
      sourceMapFileName: "",
      sourceMapMode: i.SourceMapMode.Separate,
      splitStrings: !1,
      splitStringsChunkLength: 0,
      stringArray: !1,
      stringArrayEncoding: !1,
      stringArrayThreshold: 0,
      target: n.ObfuscationTarget.Browser,
      transformObjectKeys: !1,
      unicodeEscapeSequence: !1
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(5),
        m = r(9),
        g = r(13),
        y = r(2),
        h = r(3),
        b = r(7),
        N = r(124),
        I = r(15),
        v = r(6);

    var S =
    /*#__PURE__*/
    function (_I$AbstractCustomCode5) {
      _inheritsLoose(S, _I$AbstractCustomCode5);

      function S(e, t, r, o, n) {
        return _I$AbstractCustomCode5.call(this, e, t, r, o, n) || this;
      }

      var _proto42 = S.prototype;

      _proto42.initialize = function initialize(e, t) {
        this.debugProtectionFunctionName = e, this.callsControllerFunctionName = t;
      };

      _proto42.getNodeStructure = function getNodeStructure(e) {
        return v.NodeUtils.convertCodeToStructure(e);
      };

      _proto42.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(N.DebugProtectionFunctionCallTemplate(), {
          debugProtectionFunctionName: this.debugProtectionFunctionName,
          callControllerFunctionName: this.callsControllerFunctionName
        });
      };

      return S;
    }(I.AbstractCustomCodeHelper);

    c([b.initializable(), d("design:type", String)], S.prototype, "callsControllerFunctionName", void 0), c([b.initializable(), d("design:type", String)], S.prototype, "debugProtectionFunctionName", void 0), S = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.ICustomCodeHelperObfuscator)), l(3, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(4, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (o = void 0 !== p.TIdentifierNamesGeneratorFactory && p.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== m.ICustomCodeHelperFormatter && m.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperObfuscator && g.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], S), t.DebugProtectionFunctionCallCodeHelper = S;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DebugProtectionFunctionCallTemplate = function () {
      return "\n        (function () {\n            {callControllerFunctionName}(\n                this,\n                function () {\n                    const regExp1 = new RegExp('function *\\\\( *\\\\)');\n                    const regExp2 = new RegExp('\\\\+\\\\+ *\\(?:[a-zA-Z_$][0-9a-zA-Z_$]*\\)', 'i');\n           \n                    const result = {debugProtectionFunctionName}('init');\n                    \n                    if (!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {\n                        result('0');\n                    } else {\n                        {debugProtectionFunctionName}();\n                    }\n                }\n            )();\n        })();\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(5),
        m = r(9),
        g = r(13),
        y = r(2),
        h = r(3),
        b = r(7),
        N = r(126),
        I = r(15),
        v = r(6);

    var S =
    /*#__PURE__*/
    function (_I$AbstractCustomCode6) {
      _inheritsLoose(S, _I$AbstractCustomCode6);

      function S(e, t, r, o, n) {
        return _I$AbstractCustomCode6.call(this, e, t, r, o, n) || this;
      }

      var _proto43 = S.prototype;

      _proto43.initialize = function initialize(e) {
        this.debugProtectionFunctionName = e;
      };

      _proto43.getNodeStructure = function getNodeStructure(e) {
        return v.NodeUtils.convertCodeToStructure(e);
      };

      _proto43.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(N.DebugProtectionFunctionIntervalTemplate(), {
          debugProtectionFunctionName: this.debugProtectionFunctionName
        });
      };

      return S;
    }(I.AbstractCustomCodeHelper);

    c([b.initializable(), d("design:type", String)], S.prototype, "debugProtectionFunctionName", void 0), S = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.ICustomCodeHelperObfuscator)), l(3, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(4, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (o = void 0 !== p.TIdentifierNamesGeneratorFactory && p.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== m.ICustomCodeHelperFormatter && m.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperObfuscator && g.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], S), t.DebugProtectionFunctionIntervalCodeHelper = S;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DebugProtectionFunctionIntervalTemplate = function () {
      return "\n        setInterval(function () {\n            {debugProtectionFunctionName}();\n        }, 4000);\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(5),
        m = r(9),
        g = r(13),
        y = r(2),
        h = r(3),
        b = r(23),
        N = r(7),
        I = r(128),
        v = r(129),
        S = r(130),
        O = r(15),
        C = r(6);

    var j =
    /*#__PURE__*/
    function (_O$AbstractCustomCode) {
      _inheritsLoose(j, _O$AbstractCustomCode);

      function j(e, t, r, o, n) {
        return _O$AbstractCustomCode.call(this, e, t, r, o, n) || this;
      }

      var _proto44 = j.prototype;

      _proto44.initialize = function initialize(e) {
        this.debugProtectionFunctionName = e;
      };

      _proto44.getNodeStructure = function getNodeStructure(e) {
        return C.NodeUtils.convertCodeToStructure(e);
      };

      _proto44.getCodeHelperTemplate = function getCodeHelperTemplate() {
        var e = this.options.target !== b.ObfuscationTarget.BrowserNoEval ? I.DebuggerTemplate() : v.DebuggerTemplateNoEval();
        return this.customCodeHelperFormatter.formatTemplate(S.DebugProtectionFunctionTemplate(), {
          debuggerTemplate: e,
          debugProtectionFunctionName: this.debugProtectionFunctionName
        });
      };

      return j;
    }(O.AbstractCustomCodeHelper);

    c([N.initializable(), d("design:type", String)], j.prototype, "debugProtectionFunctionName", void 0), j = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.ICustomCodeHelperObfuscator)), l(3, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(4, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (o = void 0 !== p.TIdentifierNamesGeneratorFactory && p.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== m.ICustomCodeHelperFormatter && m.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperObfuscator && g.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], j), t.DebugProtectionFunctionCodeHelper = j;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DebuggerTemplate = function () {
      return "\n        if (typeof counter === 'string') {\n            return (function (arg) {}.constructor('while (true) {}').apply('counter'));\n        } else {\n            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                (function () {return true;}.constructor('debu' + 'gger').call('action'));\n            } else {\n                (function () {return false;}.constructor('debu' + 'gger').apply('stateObject'));\n            }\n            \n        }\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DebuggerTemplateNoEval = function () {
      return "\n        if (typeof counter === 'string') {\n            const func = function () {\n                while (true) {}\n            };\n            \n            return func();\n        } else {\n            if (('' + counter / counter)['length'] !== 1 || counter % 20 === 0) {\n                debugger;\n            } else {\n                debugger;\n            }\n            \n        }\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DebugProtectionFunctionTemplate = function () {
      return "\n        function {debugProtectionFunctionName} (ret) {\n            function debuggerProtection (counter) {\n            \n                {debuggerTemplate}\n                \n                debuggerProtection(++counter);\n            }\n            \n            try {\n                if (ret) {\n                    return debuggerProtection;\n                } else {\n                    debuggerProtection(0);\n                }\n            } catch (y) {}\n        }\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(49),
        b = r(2),
        N = r(3),
        I = r(23),
        v = r(7),
        S = r(132),
        O = r(48),
        C = r(15),
        j = r(6);

    var _ =
    /*#__PURE__*/
    function (_C$AbstractCustomCode) {
      _inheritsLoose(_, _C$AbstractCustomCode);

      function _(e, t, r, o, n, i) {
        var _this34;

        _this34 = _C$AbstractCustomCode.call(this, e, t, r, o, n) || this, _this34.cryptUtils = i;
        return _this34;
      }

      var _proto45 = _.prototype;

      _proto45.initialize = function initialize(e, t) {
        this.callsControllerFunctionName = e, this.domainLockFunctionName = t;
      };

      _proto45.getNodeStructure = function getNodeStructure(e) {
        return j.NodeUtils.convertCodeToStructure(e);
      };

      _proto45.getCodeHelperTemplate = function getCodeHelperTemplate() {
        var e = this.options.domainLock.join(";"),
            _this$cryptUtils$hide = this.cryptUtils.hideString(e, 3 * e.length),
            t = _this$cryptUtils$hide[0],
            r = _this$cryptUtils$hide[1],
            o = this.options.target !== I.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : O.GlobalVariableNoEvalTemplate();

        return this.customCodeHelperFormatter.formatTemplate(S.DomainLockTemplate(), {
          callControllerFunctionName: this.callsControllerFunctionName,
          domainLockFunctionName: this.domainLockFunctionName,
          diff: r,
          domains: t,
          globalVariableTemplate: o
        });
      };

      return _;
    }(C.AbstractCustomCodeHelper);

    d([v.initializable(), l("design:type", String)], _.prototype, "callsControllerFunctionName", void 0), d([v.initializable(), l("design:type", String)], _.prototype, "domainLockFunctionName", void 0), _ = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), f(5, u.inject(p.ServiceIdentifiers.ICryptUtils)), l("design:paramtypes", ["function" == typeof (o = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== N.IRandomGenerator && N.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== b.IOptions && b.IOptions) ? s : Object, "function" == typeof (c = void 0 !== h.ICryptUtils && h.ICryptUtils) ? c : Object])], _), t.DomainLockCodeHelper = _;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DomainLockTemplate = function () {
      return '\n        const {domainLockFunctionName} = {callControllerFunctionName}(this, function () {\n            \n            {globalVariableTemplate}\n            \n            const func = function () {\n                return {\n                    key: \'item\',\n                    value: \'attribute\',\n                    getAttribute: function () {\n                        for (let i = 0; i < 1000; i--) {\n                            const isPositive = i > 0;\n                            \n                            switch (isPositive) {\n                                case true:\n                                    return this.item + \'_\' + this.value + \'_\' + i;\n                                default:\n                                    this.item + \'_\' + this.value;\n                            }\n                        }\n                    }()\n                };\n            };\n                        \n            const regExp = new RegExp("[{diff}]", "g");\n            const domains = "{domains}".replace(regExp, "").split(";");\n            let document;\n            let domain;\n            let location;\n            let hostname;\n\n            for (let d in that) {\n                if (d.length == 8 && d.charCodeAt(7) == 116 && d.charCodeAt(5) == 101 && d.charCodeAt(3) == 117 && d.charCodeAt(0) == 100) {\n                    document = d;\n                \n                    break;\n                }\n            }\n\n            for (let d1 in that[document]) {\n                if (d1.length == 6 && d1.charCodeAt(5) == 110 && d1.charCodeAt(0) == 100) {\n                    domain = d1;\n                    \n                    break;\n                }\n            }\n\n            if (!("~" > domain)) {\n                for (let d2 in that[document]) {\n                    if (d2.length == 8 && d2.charCodeAt(7) == 110 && d2.charCodeAt(0) == 108) {\n                        location = d2;\n                        \n                        break;\n                    }\n                }\n\n                for (let d3 in that[document][location]) {\n                    if (d3.length == 8 && d3.charCodeAt(7) == 101 && d3.charCodeAt(0) == 104) {\n                        hostname = d3;\n                        \n                        break;\n                    }\n                }\n            }\n            \n            if (!document || !that[document]) {\n                return;\n            }\n            \n            const documentDomain = that[document][domain];\n            const documentLocationHostName = !!that[document][location] && that[document][location][hostname];\n            const currentDomain = documentDomain || documentLocationHostName;\n          \n            if (!currentDomain) {\n                return;\n            }\n          \n            let ok = false;\n                        \n            for (let i = 0; i < domains.length; i++) {\n                const domain = domains[i];\n                const position = currentDomain.length - domain.length;\n                const lastIndex = currentDomain.indexOf(domain, position);\n                const endsWith = lastIndex !== -1 && lastIndex === position;\n                \n                if (endsWith) {\n                    if (currentDomain.length == domain.length || domain.indexOf(".") === 0) {\n                        ok = true;\n                    }\n                }\n            }\n               \n            if (!ok) {\n                data;\n            } else {\n                return;\n            }\n            \n            func();\n        });\n\n        {domainLockFunctionName}();\n    ';
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(13),
        y = r(9),
        h = r(2),
        b = r(3),
        N = r(25),
        I = r(7),
        v = r(134),
        S = r(15),
        O = r(6);

    var C =
    /*#__PURE__*/
    function (_S$AbstractCustomCode3) {
      _inheritsLoose(C, _S$AbstractCustomCode3);

      function C(e, t, r, o, n) {
        return _S$AbstractCustomCode3.call(this, e, t, r, o, n) || this;
      }

      var _proto46 = C.prototype;

      _proto46.initialize = function initialize(e, t) {
        this.appendEvent = e, this.callsControllerFunctionName = t;
      };

      _proto46.getNodeStructure = function getNodeStructure(e) {
        return O.NodeUtils.convertCodeToStructure(e);
      };

      _proto46.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return this.appendEvent === N.ObfuscationEvent.AfterObfuscation ? this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(v.SingleCallControllerTemplate(), {
          callControllerFunctionName: this.callsControllerFunctionName
        })) : this.customCodeHelperFormatter.formatTemplate(v.SingleCallControllerTemplate(), {
          callControllerFunctionName: this.callsControllerFunctionName
        });
      };

      return C;
    }(S.AbstractCustomCodeHelper);

    d([I.initializable(), l("design:type", String)], C.prototype, "callsControllerFunctionName", void 0), d([I.initializable(), l("design:type", "function" == typeof (o = void 0 !== N.ObfuscationEvent && N.ObfuscationEvent) ? o : Object)], C.prototype, "appendEvent", void 0), C = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== y.ICustomCodeHelperFormatter && y.ICustomCodeHelperFormatter) ? i : Object, "function" == typeof (a = void 0 !== g.ICustomCodeHelperObfuscator && g.ICustomCodeHelperObfuscator) ? a : Object, "function" == typeof (s = void 0 !== b.IRandomGenerator && b.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== h.IOptions && h.IOptions) ? c : Object])], C), t.CallsControllerFunctionCodeHelper = C;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SingleCallControllerTemplate = function () {
      return "\n        const {callControllerFunctionName} = (function(){\n            let firstCall = true;\n            \n            return function (context, fn){\n                const rfn = firstCall ? function(){\n                    if(fn){\n                        const res = fn.apply(context, arguments);\n                        fn = null;\n                        return res;\n                    }\n                } : function(){}\n                \n                firstCall = false;\n                \n                return rfn;\n            }\n        })();\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(32),
        b = r(2),
        N = r(3),
        I = r(7),
        v = r(136),
        S = r(15),
        O = r(6);

    var C =
    /*#__PURE__*/
    function (_S$AbstractCustomCode4) {
      _inheritsLoose(C, _S$AbstractCustomCode4);

      function C(e, t, r, o, n, i) {
        var _this35;

        _this35 = _S$AbstractCustomCode4.call(this, e, t, r, o, n) || this, _this35.escapeSequenceEncoder = i;
        return _this35;
      }

      var _proto47 = C.prototype;

      _proto47.initialize = function initialize(e, t) {
        this.callsControllerFunctionName = e, this.selfDefendingFunctionName = t;
      };

      _proto47.getNodeStructure = function getNodeStructure(e) {
        return O.NodeUtils.convertCodeToStructure(e);
      };

      _proto47.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(v.SelfDefendingTemplate(this.escapeSequenceEncoder), {
          callControllerFunctionName: this.callsControllerFunctionName,
          selfDefendingFunctionName: this.selfDefendingFunctionName
        });
      };

      return C;
    }(S.AbstractCustomCodeHelper);

    d([I.initializable(), l("design:type", String)], C.prototype, "callsControllerFunctionName", void 0), d([I.initializable(), l("design:type", String)], C.prototype, "selfDefendingFunctionName", void 0), C = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), f(5, u.inject(p.ServiceIdentifiers.IEscapeSequenceEncoder)), l("design:paramtypes", ["function" == typeof (o = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== N.IRandomGenerator && N.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== b.IOptions && b.IOptions) ? s : Object, "function" == typeof (c = void 0 !== h.IEscapeSequenceEncoder && h.IEscapeSequenceEncoder) ? c : Object])], C), t.SelfDefendingUnicodeCodeHelper = C;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SelfDefendingTemplate = function (e) {
      return "\n        const {selfDefendingFunctionName} = {callControllerFunctionName}(this, function () {\n            const test = function () {\n                const regExp = test\n                    .constructor('return /\" + this + \"/')()\n                    .compile('^([^ ]+( +[^ ]+)+)+[^ ]}');\n                \n                return !regExp.test({selfDefendingFunctionName});\n            };\n            \n            return test();\n        });\n        \n        {selfDefendingFunctionName}();\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(32),
        b = r(2),
        N = r(3),
        I = r(23),
        v = r(28),
        S = r(7),
        O = r(138),
        C = r(48),
        j = r(139),
        _ = r(140),
        R = r(141),
        F = r(142),
        T = r(143),
        x = r(15),
        G = r(6);

    var w =
    /*#__PURE__*/
    function (_x$AbstractCustomCode) {
      _inheritsLoose(w, _x$AbstractCustomCode);

      function w(e, t, r, o, n, i) {
        var _this36;

        _this36 = _x$AbstractCustomCode.call(this, e, t, r, o, n) || this, _this36.escapeSequenceEncoder = i;
        return _this36;
      }

      var _proto48 = w.prototype;

      _proto48.initialize = function initialize(e, t) {
        this.stringArrayName = e, this.stringArrayCallsWrapperName = t;
      };

      _proto48.getNodeStructure = function getNodeStructure(e) {
        return G.NodeUtils.convertCodeToStructure(e);
      };

      _proto48.getCodeHelperTemplate = function getCodeHelperTemplate() {
        var e = this.getDecodeStringArrayTemplate(),
            t = ["^" + this.stringArrayName + "$"];
        return this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(F.StringArrayCallsWrapperTemplate(), {
          decodeCodeHelperTemplate: e,
          stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
          stringArrayName: this.stringArrayName
        }), {
          reservedNames: t
        });
      };

      _proto48.getDecodeStringArrayTemplate = function getDecodeStringArrayTemplate() {
        var e = this.options.target !== I.ObfuscationTarget.BrowserNoEval ? this.getGlobalVariableTemplate() : C.GlobalVariableNoEvalTemplate(),
            t = this.customCodeHelperFormatter.formatTemplate(O.AtobTemplate(), {
          globalVariableTemplate: e
        });
        var r = "",
            o = "";

        switch (this.options.selfDefending && (o = this.customCodeHelperFormatter.formatTemplate(_.SelfDefendingTemplate(this.randomGenerator, this.escapeSequenceEncoder), {
          stringArrayCallsWrapperName: this.stringArrayCallsWrapperName,
          stringArrayName: this.stringArrayName
        })), this.options.stringArrayEncoding) {
          case v.StringArrayEncoding.Rc4:
            r = this.customCodeHelperFormatter.formatTemplate(T.StringArrayRC4DecodeTemplate(this.randomGenerator), {
              atobPolyfill: t,
              selfDefendingCode: o,
              rc4Polyfill: j.Rc4Template(),
              stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
            });
            break;

          case v.StringArrayEncoding.Base64:
            r = this.customCodeHelperFormatter.formatTemplate(R.StringArrayBase64DecodeTemplate(this.randomGenerator), {
              atobPolyfill: t,
              selfDefendingCode: o,
              stringArrayCallsWrapperName: this.stringArrayCallsWrapperName
            });
        }

        return r;
      };

      return w;
    }(x.AbstractCustomCodeHelper);

    d([S.initializable(), l("design:type", String)], w.prototype, "stringArrayName", void 0), d([S.initializable(), l("design:type", String)], w.prototype, "stringArrayCallsWrapperName", void 0), w = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), f(5, u.inject(p.ServiceIdentifiers.IEscapeSequenceEncoder)), l("design:paramtypes", ["function" == typeof (o = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== N.IRandomGenerator && N.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== b.IOptions && b.IOptions) ? s : Object, "function" == typeof (c = void 0 !== h.IEscapeSequenceEncoder && h.IEscapeSequenceEncoder) ? c : Object])], w), t.StringArrayCallsWrapperCodeHelper = w;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.AtobTemplate = function () {
      return "\n        (function () {\n            {globalVariableTemplate}\n            \n            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\n            that.atob || (\n                that.atob = function(input) {\n                    const str = String(input).replace(/=+$/, '');\n                    let output = '';\n                    for (\n                        let bc = 0, bs, buffer, idx = 0;\n                        buffer = str.charAt(idx++);\n                        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n                            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n                    ) {\n                        buffer = chars.indexOf(buffer);\n                    }\n                    return output;\n                }\n            );\n        })();\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Rc4Template = function () {
      return "\n        const rc4 = function (str, key) {\n            let s = [], j = 0, x, res = '', newStr = '';\n           \n            str = atob(str);\n                \n            for (let k = 0, length = str.length; k < length; k++) {\n                newStr += '%' + ('00' + str.charCodeAt(k).toString(16)).slice(-2);\n            }\n        \n            str = decodeURIComponent(newStr);\n                    \t     \n            let i;\n                    \t        \n\t        for (i = 0; i < 256; i++) {\n                s[i] = i;\n            }\n \n            for (i = 0; i < 256; i++) {\n                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n            }\n            \n            i = 0;\n            j = 0;\n            \n            for (let y = 0; y < str.length; y++) {\n                i = (i + 1) % 256;\n                j = (j + s[i]) % 256;\n                x = s[i];\n                s[i] = s[j];\n                s[j] = x;\n                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);\n            }\n                      \n            return res;\n        }\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SelfDefendingTemplate = function (e, t) {
      var r = e.getRandomString(6),
          o = e.getRandomString(6),
          n = e.getRandomString(6),
          i = e.getRandomString(6),
          a = e.getRandomString(6),
          s = e.getRandomString(6),
          c = e.getRandomString(6),
          d = e.getRandomString(6),
          l = e.getRandomString(6);
      return "\n        const StatesClass = function (" + r + ") {\n            this." + r + " = " + r + ";\n            this." + o + " = [1, 0, 0];\n            this." + n + " = function(){return 'newState';};\n            this." + i + " = '" + t.encode("\\w+ *\\(\\) *{\\w+ *", !0) + "';\n            this." + a + " = '" + t.encode("['|\"].+['|\"];? *}", !0) + "';\n        };\n        \n        StatesClass.prototype." + s + " = function () {\n            const regExp = new RegExp(this." + i + " + this." + a + ");\n            const expression = regExp.test(this." + n + ".toString())\n                ? --this." + o + "[1]\n                : --this." + o + "[0];\n            \n            return this." + c + "(expression);\n        };\n        \n        StatesClass.prototype." + c + " = function (" + l + ") {\n            if (!Boolean(~" + l + ")) {\n                return " + l + ";\n            }\n            \n            return this." + d + "(this." + r + ");\n        };\n\n        StatesClass.prototype." + d + " = function (" + r + ") {\n            for (let i = 0, len = this." + o + ".length; i < len; i++) {\n                this." + o + ".push(Math.round(Math.random()));\n                len = this." + o + ".length;\n            }\n            \n            return " + r + "(this." + o + "[0]);\n        };\n\n        new StatesClass({stringArrayCallsWrapperName})." + s + "();\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayBase64DecodeTemplate = function (e) {
      var t = e.getRandomString(6),
          r = e.getRandomString(6),
          o = e.getRandomString(6);
      return "\n        if ({stringArrayCallsWrapperName}." + t + " === undefined) {\n            {atobPolyfill}\n            \n            {stringArrayCallsWrapperName}." + r + " = function (str) {\n                const string = atob(str);\n                let newStringChars = [];\n                \n                for (let i = 0, length = string.length; i < length; i++) {\n                    newStringChars += '%' + ('00' + string.charCodeAt(i).toString(16)).slice(-2);\n                }\n                \n                return decodeURIComponent(newStringChars);\n            };\n            \n            {stringArrayCallsWrapperName}." + o + " = {};\n            \n            {stringArrayCallsWrapperName}." + t + " = true;\n        }\n                  \n        const cachedValue = {stringArrayCallsWrapperName}." + o + "[index];\n                        \n        if (cachedValue === undefined) {\n            {selfDefendingCode}\n            \n            value = {stringArrayCallsWrapperName}." + r + "(value);\n            {stringArrayCallsWrapperName}." + o + "[index] = value;\n        } else {\n            value = cachedValue;\n        }\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayCallsWrapperTemplate = function () {
      return "\n        const {stringArrayCallsWrapperName} = function (index, key) {\n            index = index - 0;\n            \n            let value = {stringArrayName}[index];\n            \n            {decodeCodeHelperTemplate}\n        \n            return value;\n        };\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayRC4DecodeTemplate = function (e) {
      var t = e.getRandomString(6),
          r = e.getRandomString(6),
          o = e.getRandomString(6),
          n = e.getRandomString(6);
      return "\n        if ({stringArrayCallsWrapperName}." + t + " === undefined) {\n            {atobPolyfill}\n            \n            {rc4Polyfill}\n            {stringArrayCallsWrapperName}." + r + " = rc4;\n            \n            {stringArrayCallsWrapperName}." + o + " = {};\n            \n            {stringArrayCallsWrapperName}." + t + " = true;\n        }\n  \n        const cachedValue = {stringArrayCallsWrapperName}." + o + "[index];\n\n        if (cachedValue === undefined) {\n            if ({stringArrayCallsWrapperName}." + n + " === undefined) {\n                {selfDefendingCode}\n                \n                {stringArrayCallsWrapperName}." + n + " = true;\n            }\n            \n            value = {stringArrayCallsWrapperName}." + r + "(value, key);\n            {stringArrayCallsWrapperName}." + o + "[index] = value;\n        } else {\n            value = cachedValue;\n        }\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(2),
        b = r(3),
        N = r(37),
        I = r(7),
        v = r(145),
        S = r(15),
        O = r(6);

    var C =
    /*#__PURE__*/
    function (_S$AbstractCustomCode5) {
      _inheritsLoose(C, _S$AbstractCustomCode5);

      function C(e, t, r, o, n) {
        return _S$AbstractCustomCode5.call(this, e, t, r, o, n) || this;
      }

      var _proto49 = C.prototype;

      _proto49.initialize = function initialize(e, t) {
        this.stringArrayStorage = e, this.stringArrayName = t;
      };

      _proto49.getNodeStructure = function getNodeStructure(e) {
        return O.NodeUtils.convertCodeToStructure(e);
      };

      _proto49.getCodeHelperTemplate = function getCodeHelperTemplate() {
        return this.customCodeHelperFormatter.formatTemplate(v.StringArrayTemplate(), {
          stringArrayName: this.stringArrayName,
          stringArray: this.stringArrayStorage.toString()
        });
      };

      return C;
    }(S.AbstractCustomCodeHelper);

    d([I.initializable(), l("design:type", "function" == typeof (o = void 0 !== N.IStringArrayStorage && N.IStringArrayStorage) ? o : Object)], C.prototype, "stringArrayStorage", void 0), d([I.initializable(), l("design:type", String)], C.prototype, "stringArrayName", void 0), C = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? i : Object, "function" == typeof (a = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? a : Object, "function" == typeof (s = void 0 !== b.IRandomGenerator && b.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== h.IOptions && h.IOptions) ? c : Object])], C), t.StringArrayCodeHelper = C;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayTemplate = function () {
      return "\n        const {stringArrayName} = [{stringArray}];\n    ";
    };
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(5),
        g = r(9),
        y = r(13),
        h = r(32),
        b = r(2),
        N = r(3),
        I = r(7),
        v = r(147),
        S = r(148),
        O = r(15),
        C = r(6),
        j = r(38);

    var _ =
    /*#__PURE__*/
    function (_O$AbstractCustomCode2) {
      _inheritsLoose(_, _O$AbstractCustomCode2);

      function _(e, t, r, o, n, i) {
        var _this37;

        _this37 = _O$AbstractCustomCode2.call(this, e, t, r, o, n) || this, _this37.escapeSequenceEncoder = i;
        return _this37;
      }

      var _proto50 = _.prototype;

      _proto50.initialize = function initialize(e, t) {
        this.stringArrayName = e, this.stringArrayRotationAmount = t;
      };

      _proto50.getNodeStructure = function getNodeStructure(e) {
        return C.NodeUtils.convertCodeToStructure(e);
      };

      _proto50.getCodeHelperTemplate = function getCodeHelperTemplate() {
        var e = this.identifierNamesGenerator.generateForGlobalScope(),
            t = this.identifierNamesGenerator.generateForGlobalScope(),
            r = ["^" + this.stringArrayName + "$"];
        var o = "";
        return o = this.options.selfDefending ? this.customCodeHelperFormatter.formatTemplate(v.SelfDefendingTemplate(this.escapeSequenceEncoder), {
          timesName: e,
          whileFunctionName: t
        }) : t + "(++" + e + ")", this.customCodeHelperObfuscator.obfuscateTemplate(this.customCodeHelperFormatter.formatTemplate(S.StringArrayRotateFunctionTemplate(), {
          code: o,
          timesName: e,
          whileFunctionName: t,
          stringArrayName: this.stringArrayName,
          stringArrayRotationAmount: j.NumberUtils.toHex(this.stringArrayRotationAmount)
        }), {
          reservedNames: r
        });
      };

      return _;
    }(O.AbstractCustomCodeHelper);

    d([I.initializable(), l("design:type", String)], _.prototype, "stringArrayName", void 0), d([I.initializable(), l("design:type", Number)], _.prototype, "stringArrayRotationAmount", void 0), _ = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), f(1, u.inject(p.ServiceIdentifiers.ICustomCodeHelperFormatter)), f(2, u.inject(p.ServiceIdentifiers.ICustomCodeHelperObfuscator)), f(3, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(4, u.inject(p.ServiceIdentifiers.IOptions)), f(5, u.inject(p.ServiceIdentifiers.IEscapeSequenceEncoder)), l("design:paramtypes", ["function" == typeof (o = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== y.ICustomCodeHelperObfuscator && y.ICustomCodeHelperObfuscator) ? i : Object, "function" == typeof (a = void 0 !== N.IRandomGenerator && N.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== b.IOptions && b.IOptions) ? s : Object, "function" == typeof (c = void 0 !== h.IEscapeSequenceEncoder && h.IEscapeSequenceEncoder) ? c : Object])], _), t.StringArrayRotateFunctionCodeHelper = _;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SelfDefendingTemplate = function (e) {
      return "\n        const selfDefendingFunc = function () {\n            const object = {\n                data: {\n                    key: 'cookie',\n                    value: 'timeout'\n                },\n                setCookie: function (options, name, value, document) {\n                    document = document || {};\n                    \n                    let updatedCookie = name + \"=\" + value;\n                    let i = 0;\n                                                            \n                    for (let i = 0, len = options.length; i < len; i++) {\n                        const propName = options[i];\n                                     \n                        updatedCookie += \"; \" + propName;\n                        \n                        const propValue = options[propName];\n                        \n                        options.push(propValue);\n                        len = options.length;\n                                                                        \n                        if (propValue !== true) {\n                            updatedCookie += \"=\" + propValue;\n                        }\n                    }\n\n                    document['cookie'] = updatedCookie;\n                },\n                removeCookie: function(){return 'dev';},\n                getCookie: function (document, name) {\n                    document = document || function (value) { return value };\n                    const matches = document(new RegExp(\n                        \"(?:^|; )\" + name.replace(/([.$?*|{}()[]\\/+^])/g, '\\$1') + \"=([^;]*)\"\n                    ));\n                    \n                    const func = function (param1, param2) {\n                        param1(++param2);\n                    };\n                    \n                    func({whileFunctionName}, {timesName});\n                                        \n                    return matches ? decodeURIComponent(matches[1]) : undefined;\n                }\n            };\n            \n            const test1 = function () {\n                const regExp = new RegExp('" + e.encode("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}", !0) + "');\n                \n                return regExp.test(object.removeCookie.toString());\n            };\n            \n            object['updateCookie'] = test1;\n            \n            let cookie = '';\n            const result = object['updateCookie']();\n                                    \n            if (!result) {\n                object['setCookie'](['*'], 'counter', 1);\n            } else if (result) {\n                cookie = object['getCookie'](null, 'counter');\n            } else {\n                object['removeCookie']();\n            }\n        };\n        \n        selfDefendingFunc();\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayRotateFunctionTemplate = function () {
      return "\n        (function (array, {timesName}) {\n            const {whileFunctionName} = function (times) {\n                while (--times) {\n                    array['push'](array['shift']());\n                }\n            };\n            \n            {code}\n        })({stringArrayName}, 0x{stringArrayRotationAmount});\n    ";
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(20),
        s = r(60),
        c = r(62),
        d = r(150),
        l = r(151),
        f = r(152),
        u = r(153),
        p = r(154),
        m = r(155),
        g = r(156),
        y = r(158),
        h = r(159),
        b = r(160),
        N = r(161);
    t.customNodesModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(l.BinaryExpressionFunctionNode).whenTargetNamed(a.ControlFlowCustomNode.BinaryExpressionFunctionNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(f.BlockStatementControlFlowFlatteningNode).whenTargetNamed(a.ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(p.CallExpressionControlFlowStorageCallNode).whenTargetNamed(a.ControlFlowCustomNode.CallExpressionControlFlowStorageCallNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(m.CallExpressionFunctionNode).whenTargetNamed(a.ControlFlowCustomNode.CallExpressionFunctionNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(g.ControlFlowStorageNode).whenTargetNamed(a.ControlFlowCustomNode.ControlFlowStorageNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(y.ExpressionWithOperatorControlFlowStorageCallNode).whenTargetNamed(a.ControlFlowCustomNode.ExpressionWithOperatorControlFlowStorageCallNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(h.LogicalExpressionFunctionNode).whenTargetNamed(a.ControlFlowCustomNode.LogicalExpressionFunctionNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(N.StringLiteralNode).whenTargetNamed(a.ControlFlowCustomNode.StringLiteralNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(b.StringLiteralControlFlowStorageCallNode).whenTargetNamed(a.ControlFlowCustomNode.StringLiteralControlFlowStorageCallNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(u.BlockStatementDeadCodeInjectionNode).whenTargetNamed(s.DeadCodeInjectionCustomNode.BlockStatementDeadCodeInjectionNode), e(i.ServiceIdentifiers.Newable__ICustomNode).toConstructor(d.ObjectExpressionVariableDeclarationHostNode).whenTargetNamed(c.ObjectExpressionKeysTransformerCustomNode.ObjectExpressionVariableDeclarationHostNode), e(i.ServiceIdentifiers.Factory__IControlFlowCustomNode).toFactory(o.InversifyContainerFacade.getConstructorFactory(i.ServiceIdentifiers.Newable__ICustomNode, i.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, i.ServiceIdentifiers.ICustomCodeHelperFormatter, i.ServiceIdentifiers.IRandomGenerator, i.ServiceIdentifiers.IOptions, i.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)), e(i.ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode).toFactory(o.InversifyContainerFacade.getConstructorFactory(i.ServiceIdentifiers.Newable__ICustomNode, i.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, i.ServiceIdentifiers.ICustomCodeHelperFormatter, i.ServiceIdentifiers.IRandomGenerator, i.ServiceIdentifiers.IOptions)), e(i.ServiceIdentifiers.Factory__IObjectExpressionKeysTransformerCustomNode).toFactory(o.InversifyContainerFacade.getConstructorFactory(i.ServiceIdentifiers.Newable__ICustomNode, i.ServiceIdentifiers.Factory__IIdentifierNamesGenerator, i.ServiceIdentifiers.ICustomCodeHelperFormatter, i.ServiceIdentifiers.IRandomGenerator, i.ServiceIdentifiers.IOptions, i.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer));
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(14),
        h = r(8),
        b = r(4);

    var N =
    /*#__PURE__*/
    function (_y$AbstractCustomNode) {
      _inheritsLoose(N, _y$AbstractCustomNode);

      function N(e, t, r, o) {
        return _y$AbstractCustomNode.call(this, e, t, r, o) || this;
      }

      var _proto51 = N.prototype;

      _proto51.initialize = function initialize(e, t) {
        this.lexicalScopeNode = e, this.properties = t;
      };

      _proto51.getNodeStructure = function getNodeStructure() {
        var e = b.NodeGuards.isProgramNode(this.lexicalScopeNode) ? this.identifierNamesGenerator.generateForGlobalScope() : this.identifierNamesGenerator.generateForLexicalScope(this.lexicalScopeNode);
        return [h.NodeFactory.variableDeclarationNode([h.NodeFactory.variableDeclaratorNode(h.NodeFactory.identifierNode(e), h.NodeFactory.objectExpressionNode(this.properties))], "const")];
      };

      return N;
    }(y.AbstractCustomNode);

    N = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], N), t.ObjectExpressionVariableDeclarationHostNode = N;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(14),
        h = r(8),
        b = r(6);

    var N =
    /*#__PURE__*/
    function (_y$AbstractCustomNode2) {
      _inheritsLoose(N, _y$AbstractCustomNode2);

      function N(e, t, r, o) {
        return _y$AbstractCustomNode2.call(this, e, t, r, o) || this;
      }

      var _proto52 = N.prototype;

      _proto52.initialize = function initialize(e) {
        this.operator = e;
      };

      _proto52.getNodeStructure = function getNodeStructure() {
        var e = h.NodeFactory.expressionStatementNode(h.NodeFactory.functionExpressionNode([h.NodeFactory.identifierNode("x"), h.NodeFactory.identifierNode("y")], h.NodeFactory.blockStatementNode([h.NodeFactory.returnStatementNode(h.NodeFactory.binaryExpressionNode(this.operator, h.NodeFactory.identifierNode("x"), h.NodeFactory.identifierNode("y")))])));
        return b.NodeUtils.parentizeAst(e), [e];
      };

      return N;
    }(y.AbstractCustomNode);

    N = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], N), t.BinaryExpressionFunctionNode = N;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(7),
        h = r(14),
        b = r(8),
        N = r(4),
        I = r(6);

    var v =
    /*#__PURE__*/
    function (_h$AbstractCustomNode) {
      _inheritsLoose(v, _h$AbstractCustomNode);

      function v(e, t, r, o) {
        return _h$AbstractCustomNode.call(this, e, t, r, o) || this;
      }

      var _proto53 = v.prototype;

      _proto53.initialize = function initialize(e, t, r) {
        this.blockStatementBody = e, this.shuffledKeys = t, this.originalKeysIndexesInShuffledArray = r;
      };

      _proto53.getNodeStructure = function getNodeStructure() {
        var _this38 = this;

        var e = this.randomGenerator.getRandomString(6),
            t = this.randomGenerator.getRandomString(6),
            r = b.NodeFactory.blockStatementNode([b.NodeFactory.variableDeclarationNode([b.NodeFactory.variableDeclaratorNode(b.NodeFactory.identifierNode(e), b.NodeFactory.callExpressionNode(b.NodeFactory.memberExpressionNode(b.NodeFactory.literalNode(this.originalKeysIndexesInShuffledArray.join("|")), b.NodeFactory.identifierNode("split")), [b.NodeFactory.literalNode("|")]))], "const"), b.NodeFactory.variableDeclarationNode([b.NodeFactory.variableDeclaratorNode(b.NodeFactory.identifierNode(t), b.NodeFactory.literalNode(0))], "let"), b.NodeFactory.whileStatementNode(b.NodeFactory.literalNode(!0), b.NodeFactory.blockStatementNode([b.NodeFactory.switchStatementNode(b.NodeFactory.memberExpressionNode(b.NodeFactory.identifierNode(e), b.NodeFactory.updateExpressionNode("++", b.NodeFactory.identifierNode(t)), !0), this.shuffledKeys.map(function (e, t) {
          var r = _this38.blockStatementBody[e],
              o = [r];
          return N.NodeGuards.isReturnStatementNode(r) || o.push(b.NodeFactory.continueStatement()), b.NodeFactory.switchCaseNode(b.NodeFactory.literalNode(String(t)), o);
        })), b.NodeFactory.breakStatement()]))]);
        return I.NodeUtils.parentizeAst(r), [r];
      };

      return v;
    }(h.AbstractCustomNode);

    s([y.initializable(), c("design:type", Array)], v.prototype, "blockStatementBody", void 0), s([y.initializable(), c("design:type", Array)], v.prototype, "originalKeysIndexesInShuffledArray", void 0), s([y.initializable(), c("design:type", Array)], v.prototype, "shuffledKeys", void 0), v = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], v), t.BlockStatementControlFlowFlatteningNode = v;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(14),
        h = r(8),
        b = r(6);

    var N =
    /*#__PURE__*/
    function (_y$AbstractCustomNode3) {
      _inheritsLoose(N, _y$AbstractCustomNode3);

      function N(e, t, r, o) {
        return _y$AbstractCustomNode3.call(this, e, t, r, o) || this;
      }

      var _proto54 = N.prototype;

      _proto54.initialize = function initialize(e, t) {
        this.blockStatementNode = e, this.deadCodeInjectionRootAstHostNode = t;
      };

      _proto54.getNodeStructure = function getNodeStructure() {
        var e = this.randomGenerator.getMathRandom() > .5,
            t = this.randomGenerator.getMathRandom() > .5,
            r = e ? "===" : "!==",
            o = this.randomGenerator.getRandomString(5),
            n = t ? o : this.randomGenerator.getRandomString(5),
            _ref7 = e === t ? [this.blockStatementNode, this.deadCodeInjectionRootAstHostNode] : [this.deadCodeInjectionRootAstHostNode, this.blockStatementNode],
            i = _ref7[0],
            a = _ref7[1],
            s = h.NodeFactory.blockStatementNode([h.NodeFactory.ifStatementNode(h.NodeFactory.binaryExpressionNode(r, h.NodeFactory.literalNode(o), h.NodeFactory.literalNode(n)), i, a)]);

        return b.NodeUtils.parentizeAst(s), [s];
      };

      return N;
    }(y.AbstractCustomNode);

    N = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], N), t.BlockStatementDeadCodeInjectionNode = N;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(5),
        m = r(9),
        g = r(2),
        y = r(3),
        h = r(7),
        b = r(14),
        N = r(8),
        I = r(6);

    var v =
    /*#__PURE__*/
    function (_b$AbstractCustomNode) {
      _inheritsLoose(v, _b$AbstractCustomNode);

      function v(e, t, r, o) {
        return _b$AbstractCustomNode.call(this, e, t, r, o) || this;
      }

      var _proto55 = v.prototype;

      _proto55.initialize = function initialize(e, t, r, o) {
        this.controlFlowStorageName = e, this.controlFlowStorageKey = t, this.callee = r, this.expressionArguments = o;
      };

      _proto55.getNodeStructure = function getNodeStructure() {
        var e = N.NodeFactory.expressionStatementNode(N.NodeFactory.callExpressionNode(N.NodeFactory.memberExpressionNode(N.NodeFactory.identifierNode(this.controlFlowStorageName), N.NodeFactory.identifierNode(this.controlFlowStorageKey)), [this.callee].concat(this.expressionArguments)));
        return I.NodeUtils.parentizeAst(e), [e];
      };

      return v;
    }(b.AbstractCustomNode);

    c([h.initializable(), d("design:type", "function" == typeof (o = "undefined" != typeof ESTree && ESTree.Expression) ? o : Object)], v.prototype, "callee", void 0), c([h.initializable(), d("design:type", String)], v.prototype, "controlFlowStorageKey", void 0), c([h.initializable(), d("design:type", String)], v.prototype, "controlFlowStorageName", void 0), c([h.initializable(), d("design:type", Array)], v.prototype, "expressionArguments", void 0), v = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== p.TIdentifierNamesGeneratorFactory && p.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== m.ICustomCodeHelperFormatter && m.ICustomCodeHelperFormatter) ? i : Object, "function" == typeof (a = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== g.IOptions && g.IOptions) ? s : Object])], v), t.CallExpressionControlFlowStorageCallNode = v;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(7),
        h = r(14),
        b = r(8),
        N = r(6);

    var I =
    /*#__PURE__*/
    function (_h$AbstractCustomNode2) {
      _inheritsLoose(I, _h$AbstractCustomNode2);

      function I(e, t, r, o) {
        return _h$AbstractCustomNode2.call(this, e, t, r, o) || this;
      }

      var _proto56 = I.prototype;

      _proto56.initialize = function initialize(e) {
        this.expressionArguments = e;
      };

      _proto56.getNodeStructure = function getNodeStructure() {
        var e = b.NodeFactory.identifierNode("callee"),
            t = [],
            r = this.expressionArguments.length;

        for (var _e3 = 0; _e3 < r; _e3++) {
          t.push(b.NodeFactory.identifierNode("param" + (_e3 + 1)));
        }

        var o = b.NodeFactory.expressionStatementNode(b.NodeFactory.functionExpressionNode([e].concat(t), b.NodeFactory.blockStatementNode([b.NodeFactory.returnStatementNode(b.NodeFactory.callExpressionNode(e, t))])));
        return N.NodeUtils.parentizeAst(o), [o];
      };

      return I;
    }(h.AbstractCustomNode);

    s([y.initializable(), c("design:type", Array)], I.prototype, "expressionArguments", void 0), I = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], I), t.CallExpressionFunctionNode = I;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(157),
        m = r(5),
        g = r(9),
        y = r(2),
        h = r(3),
        b = r(7),
        N = r(14),
        I = r(8),
        v = r(4),
        S = r(6);

    var O =
    /*#__PURE__*/
    function (_N$AbstractCustomNode) {
      _inheritsLoose(O, _N$AbstractCustomNode);

      function O(e, t, r, o) {
        return _N$AbstractCustomNode.call(this, e, t, r, o) || this;
      }

      var _proto57 = O.prototype;

      _proto57.initialize = function initialize(e) {
        this.controlFlowStorage = e;
      };

      _proto57.getNodeStructure = function getNodeStructure() {
        var e = Array.from(this.controlFlowStorage.getStorage()).map(function (_ref8) {
          var e = _ref8[0],
              t = _ref8[1];
          var r = t.getNode()[0];
          if (!v.NodeGuards.isExpressionStatementNode(r)) throw new Error("Function node for control flow storage object should be passed inside the `ExpressionStatement` node!");
          return I.NodeFactory.propertyNode(I.NodeFactory.identifierNode(e), r.expression);
        });
        var t = I.NodeFactory.variableDeclarationNode([I.NodeFactory.variableDeclaratorNode(I.NodeFactory.identifierNode(this.controlFlowStorage.getStorageId()), I.NodeFactory.objectExpressionNode(e))], "const");
        return t = S.NodeUtils.parentizeAst(t), [t];
      };

      return O;
    }(N.AbstractCustomNode);

    c([b.initializable(), d("design:type", "function" == typeof (o = void 0 !== p.TControlFlowStorage && p.TControlFlowStorage) ? o : Object)], O.prototype, "controlFlowStorage", void 0), O = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), l(1, f.inject(u.ServiceIdentifiers.ICustomCodeHelperFormatter)), l(2, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(3, f.inject(u.ServiceIdentifiers.IOptions)), d("design:paramtypes", ["function" == typeof (n = void 0 !== m.TIdentifierNamesGeneratorFactory && m.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== g.ICustomCodeHelperFormatter && g.ICustomCodeHelperFormatter) ? i : Object, "function" == typeof (a = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== y.IOptions && y.IOptions) ? s : Object])], O), t.ControlFlowStorageNode = O;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(7),
        h = r(14),
        b = r(8),
        N = r(6);

    var I =
    /*#__PURE__*/
    function (_h$AbstractCustomNode3) {
      _inheritsLoose(I, _h$AbstractCustomNode3);

      function I(e, t, r, o) {
        return _h$AbstractCustomNode3.call(this, e, t, r, o) || this;
      }

      var _proto58 = I.prototype;

      _proto58.initialize = function initialize(e, t, r, o) {
        this.controlFlowStorageName = e, this.controlFlowStorageKey = t, this.leftValue = r, this.rightValue = o;
      };

      _proto58.getNodeStructure = function getNodeStructure() {
        var e = b.NodeFactory.expressionStatementNode(b.NodeFactory.callExpressionNode(b.NodeFactory.memberExpressionNode(b.NodeFactory.identifierNode(this.controlFlowStorageName), b.NodeFactory.identifierNode(this.controlFlowStorageKey)), [this.leftValue, this.rightValue]));
        return N.NodeUtils.parentizeAst(e), [e];
      };

      return I;
    }(h.AbstractCustomNode);

    s([y.initializable(), c("design:type", String)], I.prototype, "controlFlowStorageKey", void 0), s([y.initializable(), c("design:type", String)], I.prototype, "controlFlowStorageName", void 0), I = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], I), t.ExpressionWithOperatorControlFlowStorageCallNode = I;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(14),
        h = r(8),
        b = r(6);

    var N =
    /*#__PURE__*/
    function (_y$AbstractCustomNode4) {
      _inheritsLoose(N, _y$AbstractCustomNode4);

      function N(e, t, r, o) {
        return _y$AbstractCustomNode4.call(this, e, t, r, o) || this;
      }

      var _proto59 = N.prototype;

      _proto59.initialize = function initialize(e) {
        this.operator = e;
      };

      _proto59.getNodeStructure = function getNodeStructure() {
        var e = h.NodeFactory.expressionStatementNode(h.NodeFactory.functionExpressionNode([h.NodeFactory.identifierNode("x"), h.NodeFactory.identifierNode("y")], h.NodeFactory.blockStatementNode([h.NodeFactory.returnStatementNode(h.NodeFactory.logicalExpressionNode(this.operator, h.NodeFactory.identifierNode("x"), h.NodeFactory.identifierNode("y")))])));
        return b.NodeUtils.parentizeAst(e), [e];
      };

      return N;
    }(y.AbstractCustomNode);

    N = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], N), t.LogicalExpressionFunctionNode = N;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(7),
        h = r(14),
        b = r(8),
        N = r(6);

    var I =
    /*#__PURE__*/
    function (_h$AbstractCustomNode4) {
      _inheritsLoose(I, _h$AbstractCustomNode4);

      function I(e, t, r, o) {
        return _h$AbstractCustomNode4.call(this, e, t, r, o) || this;
      }

      var _proto60 = I.prototype;

      _proto60.initialize = function initialize(e, t) {
        this.controlFlowStorageName = e, this.controlFlowStorageKey = t;
      };

      _proto60.getNodeStructure = function getNodeStructure() {
        var e = b.NodeFactory.expressionStatementNode(b.NodeFactory.memberExpressionNode(b.NodeFactory.identifierNode(this.controlFlowStorageName), b.NodeFactory.identifierNode(this.controlFlowStorageKey)));
        return N.NodeUtils.parentizeAst(e), [e];
      };

      return I;
    }(h.AbstractCustomNode);

    s([y.initializable(), c("design:type", String)], I.prototype, "controlFlowStorageKey", void 0), s([y.initializable(), c("design:type", String)], I.prototype, "controlFlowStorageName", void 0), I = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], I), t.StringLiteralControlFlowStorageCallNode = I;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(5),
        p = r(9),
        m = r(2),
        g = r(3),
        y = r(7),
        h = r(14),
        b = r(8);

    var N =
    /*#__PURE__*/
    function (_h$AbstractCustomNode5) {
      _inheritsLoose(N, _h$AbstractCustomNode5);

      function N(e, t, r, o) {
        return _h$AbstractCustomNode5.call(this, e, t, r, o) || this;
      }

      var _proto61 = N.prototype;

      _proto61.initialize = function initialize(e) {
        this.literalValue = e;
      };

      _proto61.getNodeStructure = function getNodeStructure() {
        return [b.NodeFactory.expressionStatementNode(b.NodeFactory.literalNode(this.literalValue))];
      };

      return N;
    }(h.AbstractCustomNode);

    s([y.initializable(), c("design:type", String)], N.prototype, "literalValue", void 0), N = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), d(1, l.inject(f.ServiceIdentifiers.ICustomCodeHelperFormatter)), d(2, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(3, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (o = void 0 !== u.TIdentifierNamesGeneratorFactory && u.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== p.ICustomCodeHelperFormatter && p.ICustomCodeHelperFormatter) ? n : Object, "function" == typeof (i = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== m.IOptions && m.IOptions) ? a : Object])], N), t.StringLiteralNode = N;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0);
    t.finalizingTransformersModule = new o.ContainerModule(function (e) {});
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(33),
        a = r(164),
        s = r(165),
        c = r(166);
    t.generatorsModule = new o.ContainerModule(function (e) {
      e(n.ServiceIdentifiers.IIdentifierNamesGenerator).to(a.DictionaryIdentifierNamesGenerator).inSingletonScope().whenTargetNamed(i.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator), e(n.ServiceIdentifiers.IIdentifierNamesGenerator).to(s.HexadecimalIdentifierNamesGenerator).inSingletonScope().whenTargetNamed(i.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator), e(n.ServiceIdentifiers.IIdentifierNamesGenerator).to(c.MangledIdentifierNamesGenerator).inSingletonScope().whenTargetNamed(i.IdentifierNamesGenerator.MangledIdentifierNamesGenerator), e(n.ServiceIdentifiers.Factory__IIdentifierNamesGenerator).toFactory(function () {
        var e = null;
        return function (t) {
          return function (r) {
            if (e) return e;
            var o;

            switch (r.identifierNamesGenerator) {
              case i.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator:
                o = t.container.getNamed(n.ServiceIdentifiers.IIdentifierNamesGenerator, i.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator);
                break;

              case i.IdentifierNamesGenerator.MangledIdentifierNamesGenerator:
                o = t.container.getNamed(n.ServiceIdentifiers.IIdentifierNamesGenerator, i.IdentifierNamesGenerator.MangledIdentifierNamesGenerator);
                break;

              case i.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator:
              default:
                o = t.container.getNamed(n.ServiceIdentifiers.IIdentifierNamesGenerator, i.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator);
            }

            return e = o, o;
          };
        };
      }());
    });
  }, function (e, t, r) {
    var _o30,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(36),
        p = r(2),
        m = r(3),
        g = r(50),
        y = r(22);

    var h = _o30 =
    /*#__PURE__*/
    function (_g$AbstractIdentifier) {
      _inheritsLoose(o, _g$AbstractIdentifier);

      function o(e, t, r) {
        var _this39;

        _this39 = _g$AbstractIdentifier.call(this, e, t) || this, _this39.arrayUtils = r, _this39.identifierNamesSet = new Set(_this39.getInitialIdentifierNames(_this39.options.identifiersDictionary)), _this39.identifiersIterator = _this39.identifierNamesSet.values();
        return _this39;
      }

      o.incrementIdentifierName = function incrementIdentifierName(e) {
        var t = "",
            r = !1;

        for (var _iterator6 = e, _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
          var _ref9;

          if (_isArray6) {
            if (_i7 >= _iterator6.length) break;
            _ref9 = _iterator6[_i7++];
          } else {
            _i7 = _iterator6.next();
            if (_i7.done) break;
            _ref9 = _i7.value;
          }

          var _o31 = _ref9;
          r || _o31 !== _o31.toUpperCase() ? r || _o31 !== _o31.toLowerCase() ? t += _o31 : (t += _o31.toUpperCase(), r = !0) : t += _o31.toLowerCase();
        }

        return r ? t : null;
      };

      var _proto62 = o.prototype;

      _proto62.generateForGlobalScope = function generateForGlobalScope() {
        var e = this.generateNewDictionaryName();
        return this.preserveName(e), e;
      };

      _proto62.generateForLexicalScope = function generateForLexicalScope(e) {
        var t = [e].concat(y.NodeLexicalScopeUtils.getLexicalScopes(e)),
            r = this.generateNewDictionaryName();
        return this.isValidIdentifierNameInLexicalScopes(r, t) ? (this.preserveNameForLexicalScope(r, e), r) : this.generateForLexicalScope(e);
      };

      _proto62.generateWithPrefix = function generateWithPrefix() {
        var e = "" + (this.options.identifiersPrefix ? "" + this.options.identifiersPrefix : "") + this.generateNewDictionaryName();
        return this.isValidIdentifierName(e) ? (this.preserveName(e), e) : this.generateWithPrefix();
      };

      _proto62.generateNewDictionaryName = function generateNewDictionaryName() {
        if (!this.identifierNamesSet.size) throw new Error("Too many identifiers in the code, add more words to identifiers dictionary");
        var e = this.identifiersIterator.next();

        if (!e.done) {
          var _t7 = e.value;
          return this.isValidIdentifierName(_t7) ? e.value : this.generateNewDictionaryName();
        }

        return this.identifierNamesSet = new Set(this.getIncrementedIdentifierNames([].concat(this.identifierNamesSet))), this.identifiersIterator = this.identifierNamesSet.values(), this.generateNewDictionaryName();
      };

      _proto62.getInitialIdentifierNames = function getInitialIdentifierNames(e) {
        var t = e.filter(Boolean).map(function (e) {
          return e.toLowerCase();
        });
        return this.arrayUtils.shuffle(t);
      };

      _proto62.getIncrementedIdentifierNames = function getIncrementedIdentifierNames(e) {
        var t = [];

        for (var _iterator7 = e, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
          var _ref10;

          if (_isArray7) {
            if (_i8 >= _iterator7.length) break;
            _ref10 = _iterator7[_i8++];
          } else {
            _i8 = _iterator7.next();
            if (_i8.done) break;
            _ref10 = _i8.value;
          }

          var _r5 = _ref10;

          var _e4 = _o30.incrementIdentifierName(_r5);

          _e4 && t.push(_e4);
        }

        return this.arrayUtils.shuffle(t);
      };

      return o;
    }(g.AbstractIdentifierNamesGenerator);

    h = _o30 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(1, l.inject(f.ServiceIdentifiers.IOptions)), d(2, l.inject(f.ServiceIdentifiers.IArrayUtils)), c("design:paramtypes", ["function" == typeof (n = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== p.IOptions && p.IOptions) ? i : Object, "function" == typeof (a = void 0 !== u.IArrayUtils && u.IArrayUtils) ? a : Object])], h), t.DictionaryIdentifierNamesGenerator = h;
  }, function (e, t, r) {
    var _o32,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(2),
        u = r(3),
        p = r(50),
        m = r(38),
        g = r(26);

    var y = _o32 =
    /*#__PURE__*/
    function (_p$AbstractIdentifier) {
      _inheritsLoose(o, _p$AbstractIdentifier);

      function o(e, t) {
        return _p$AbstractIdentifier.call(this, e, t) || this;
      }

      var _proto63 = o.prototype;

      _proto63.generateForGlobalScope = function generateForGlobalScope(e) {
        var t = this.randomGenerator.getRandomInteger(1e4, 99999999),
            r = m.NumberUtils.toHex(t),
            n = g.Utils.hexadecimalPrefix.length + 1,
            i = e ? e - n : _o32.baseIdentifierNameLength,
            a = r.substr(0, i),
            s = "_" + g.Utils.hexadecimalPrefix + a;
        return this.isValidIdentifierName(s) ? (this.preserveName(s), s) : this.generateForGlobalScope(e);
      };

      _proto63.generateForLexicalScope = function generateForLexicalScope(e, t) {
        return this.generateForGlobalScope(t);
      };

      _proto63.generateWithPrefix = function generateWithPrefix(e) {
        var t = this.generateForGlobalScope(e);
        return ("" + this.options.identifiersPrefix + t).replace("__", "_");
      };

      return o;
    }(p.AbstractIdentifierNamesGenerator);

    y.baseIdentifierNameLength = 6, y = _o32 = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(1, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== u.IRandomGenerator && u.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== f.IOptions && f.IOptions) ? i : Object])], y), t.HexadecimalIdentifierNamesGenerator = y;
  }, function (e, t, r) {
    var _o33,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = r(2),
        u = r(3),
        p = r(50),
        m = r(22);

    var g = _o33 =
    /*#__PURE__*/
    function (_p$AbstractIdentifier2) {
      _inheritsLoose(o, _p$AbstractIdentifier2);

      function o(e, t) {
        var _this40;

        _this40 = _p$AbstractIdentifier2.call(this, e, t) || this, _this40.previousMangledName = _o33.initMangledNameCharacter;
        return _this40;
      }

      var _proto64 = o.prototype;

      _proto64.generateForGlobalScope = function generateForGlobalScope(e) {
        var t = this.generateNewMangledName(this.previousMangledName);
        return this.previousMangledName = t, this.preserveName(t), t;
      };

      _proto64.generateForLexicalScope = function generateForLexicalScope(e, t) {
        var r = [e].concat(m.NodeLexicalScopeUtils.getLexicalScopes(e));
        var n = this.getLastMangledNameForScopes(r);

        do {
          n = this.generateNewMangledName(n);
        } while (!this.isValidIdentifierNameInLexicalScopes(n, r));

        return _o33.lastMangledNameInScopeMap.set(e, n), this.preserveNameForLexicalScope(n, e), n;
      };

      _proto64.generateWithPrefix = function generateWithPrefix(e) {
        var t = this.options.identifiersPrefix ? "" + this.options.identifiersPrefix : "",
            r = this.generateNewMangledName(this.previousMangledName),
            o = "" + t + r;
        return this.previousMangledName = r, this.isValidIdentifierName(o) ? (this.preserveName(o), o) : this.generateWithPrefix(e);
      };

      _proto64.isValidIdentifierName = function isValidIdentifierName(e) {
        return _p$AbstractIdentifier2.prototype.isValidIdentifierName.call(this, e) && !_o33.reservedNamesSet.has(e);
      };

      _proto64.generateNewMangledName = function generateNewMangledName(e) {
        var t = function (e) {
          var t = _o33.nameSequence,
              r = t.length,
              n = e.length,
              i = function i(e) {
            return "0".repeat(e);
          };

          var a = n - 1;

          do {
            var _o34 = e[a],
                _s = t.indexOf(_o34);

            if (_s !== r - 1) return e.substring(0, a) + t[_s + 1] + i(n - (a + 1));
            --a;
          } while (a >= 0);

          return "a" + i(n);
        }(e);

        return this.isValidIdentifierName(t) || (t = this.generateNewMangledName(t)), t;
      };

      _proto64.getLastMangledNameForScopes = function getLastMangledNameForScopes(e) {
        var t;

        for (var _iterator8 = e, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
          var _ref11;

          if (_isArray8) {
            if (_i9 >= _iterator8.length) break;
            _ref11 = _iterator8[_i9++];
          } else {
            _i9 = _iterator8.next();
            if (_i9.done) break;
            _ref11 = _i9.value;
          }

          var _r6 = _ref11;

          var _e5 = null !== (t = _o33.lastMangledNameInScopeMap.get(_r6)) && void 0 !== t ? t : null;

          if (_e5) return _e5;
        }

        return _o33.initMangledNameCharacter;
      };

      return o;
    }(p.AbstractIdentifierNamesGenerator);

    g.initMangledNameCharacter = "9", g.lastMangledNameInScopeMap = new Map(), g.nameSequence = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), g.reservedNamesSet = new Set(["byte", "case", "char", "do", "else", "enum", "eval", "for", "goto", "if", "in", "int", "let", "long", "new", "null", "this", "true", "try", "var", "void", "with"]), g = _o33 = a([d.injectable(), c(0, d.inject(l.ServiceIdentifiers.IRandomGenerator)), c(1, d.inject(l.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== u.IRandomGenerator && u.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== f.IOptions && f.IOptions) ? i : Object])], g), t.MangledIdentifierNamesGenerator = g;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(168);
    t.nodeModule = new o.ContainerModule(function (e) {
      e(n.ServiceIdentifiers.IScopeIdentifiersTraverser).to(i.ScopeIdentifiersTraverser).inSingletonScope();
    });
  }, function (e, t, r) {
    var _o35,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(169),
        f = r(4);

    var u = _o35 =
    /*#__PURE__*/
    function () {
      function o(e) {
        this.scopeAnalyzer = e;
      }

      var _proto65 = o.prototype;

      _proto65.traverse = function traverse(e, t, r) {
        this.scopeAnalyzer.analyze(e);
        var o = this.scopeAnalyzer.acquireScope(e);
        this.traverseScopeVariables(o, o, r);
      };

      _proto65.traverseScopeVariables = function traverseScopeVariables(e, t, r) {
        var n = t.variableScope,
            i = f.NodeGuards.isNodeWithBlockLexicalScope(n.block) ? n.block : null,
            a = _o35.globalScopeNames.includes(n.type);

        if (i) {
          for (var _iterator9 = t.variables, _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
            var _ref12;

            if (_isArray9) {
              if (_i10 >= _iterator9.length) break;
              _ref12 = _iterator9[_i10++];
            } else {
              _i10 = _iterator9.next();
              if (_i10.done) break;
              _ref12 = _i10.value;
            }

            var _s2 = _ref12;
            _s2.name !== _o35.argumentsVariableName && r({
              isGlobalDeclaration: a,
              rootScope: e,
              variable: _s2,
              variableScope: n,
              variableLexicalScopeNode: i
            });
          }

          for (var _iterator10 = t.childScopes, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
            var _ref13;

            if (_isArray10) {
              if (_i11 >= _iterator10.length) break;
              _ref13 = _iterator10[_i11++];
            } else {
              _i11 = _iterator10.next();
              if (_i11.done) break;
              _ref13 = _i11.value;
            }

            var _o36 = _ref13;
            this.traverseScopeVariables(e, _o36, r);
          }
        }
      };

      return o;
    }();

    u.argumentsVariableName = "arguments", u.globalScopeNames = ["global", "module"], u = _o35 = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IScopeAnalyzer)), a("design:paramtypes", ["function" == typeof (n = void 0 !== l.IScopeAnalyzer && l.IScopeAnalyzer) ? n : Object])], u), t.ScopeIdentifiersTraverser = u;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1);
    t.nodeTransformersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.Factory__INodeTransformer).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.INodeTransformer));
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(39),
        s = r(65),
        c = r(24),
        d = r(172),
        l = r(173),
        f = r(174),
        u = r(175),
        p = r(177),
        m = r(178),
        g = r(179);
    t.obfuscatingTransformersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.INodeTransformer).to(f.LabeledStatementTransformer).whenTargetNamed(c.NodeTransformer.LabeledStatementTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(u.LiteralTransformer).whenTargetNamed(c.NodeTransformer.LiteralTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(g.ScopeIdentifiersTransformer).whenTargetNamed(c.NodeTransformer.ScopeIdentifiersTransformer), e(i.ServiceIdentifiers.IObfuscatingReplacer).to(l.BooleanLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer), e(i.ServiceIdentifiers.IObfuscatingReplacer).to(p.NumberLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer), e(i.ServiceIdentifiers.IObfuscatingReplacer).to(m.StringLiteralObfuscatingReplacer).whenTargetNamed(s.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer), e(i.ServiceIdentifiers.IIdentifierObfuscatingReplacer).to(d.BaseIdentifierObfuscatingReplacer).whenTargetNamed(a.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer), e(i.ServiceIdentifiers.Factory__IObfuscatingReplacer).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.IObfuscatingReplacer)), e(i.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.IIdentifierObfuscatingReplacer));
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(5),
        f = r(2),
        u = r(40),
        p = r(8);

    var m =
    /*#__PURE__*/
    function (_u$AbstractObfuscatin) {
      _inheritsLoose(m, _u$AbstractObfuscatin);

      function m(e, t) {
        var _this41;

        _this41 = _u$AbstractObfuscatin.call(this, t) || this, _this41.blockScopesMap = new Map(), _this41.identifierNamesGenerator = e(t);
        return _this41;
      }

      var _proto66 = m.prototype;

      _proto66.replace = function replace(e, t) {
        var r = e.name;

        if (this.blockScopesMap.has(t)) {
          var _e6 = this.blockScopesMap.get(t);

          _e6.has(r) && (r = _e6.get(r));
        }

        return p.NodeFactory.identifierNode(r);
      };

      _proto66.storeGlobalName = function storeGlobalName(e, t) {
        var r = e.name;
        if (this.isReservedName(r)) return;
        var o = this.identifierNamesGenerator.generateWithPrefix();
        this.blockScopesMap.has(t) || this.blockScopesMap.set(t, new Map()), this.blockScopesMap.get(t).set(r, o);
      };

      _proto66.storeLocalName = function storeLocalName(e, t) {
        var r = e.name;
        if (this.isReservedName(r)) return;
        var o = this.identifierNamesGenerator.generateForLexicalScope(t);
        this.blockScopesMap.has(t) || this.blockScopesMap.set(t, new Map()), this.blockScopesMap.get(t).set(r, o);
      };

      _proto66.preserveName = function preserveName(e) {
        this.identifierNamesGenerator.preserveName(e.name);
      };

      _proto66.preserveNameForLexicalScope = function preserveNameForLexicalScope(e, t) {
        this.identifierNamesGenerator.preserveNameForLexicalScope(e.name, t);
      };

      _proto66.isReservedName = function isReservedName(e) {
        return !!this.options.reservedNames.length && this.options.reservedNames.some(function (t) {
          return null !== new RegExp(t, "g").exec(e);
        });
      };

      return m;
    }(u.AbstractObfuscatingReplacer);

    m = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== l.TIdentifierNamesGeneratorFactory && l.TIdentifierNamesGeneratorFactory) ? o : Object, "function" == typeof (n = void 0 !== f.IOptions && f.IOptions) ? n : Object])], m), t.BaseIdentifierObfuscatingReplacer = m;
  }, function (e, t, r) {
    var _o37,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(40),
        u = r(8);

    var p = _o37 =
    /*#__PURE__*/
    function (_f$AbstractObfuscatin) {
      _inheritsLoose(o, _f$AbstractObfuscatin);

      function o(e) {
        return _f$AbstractObfuscatin.call(this, e) || this;
      }

      o.getTrueUnaryExpressionNode = function getTrueUnaryExpressionNode() {
        return u.NodeFactory.unaryExpressionNode("!", _o37.getFalseUnaryExpressionNode());
      };

      o.getFalseUnaryExpressionNode = function getFalseUnaryExpressionNode() {
        return u.NodeFactory.unaryExpressionNode("!", u.NodeFactory.arrayExpressionNode());
      };

      var _proto67 = o.prototype;

      _proto67.replace = function replace(e) {
        var t = e.value;
        if ("boolean" != typeof t) throw new Error("`BooleanLiteralObfuscatingReplacer` should accept only literals with `boolean` value");
        return t ? _o37.getTrueUnaryExpressionNode() : _o37.getFalseUnaryExpressionNode();
      };

      return o;
    }(f.AbstractObfuscatingReplacer);

    p = _o37 = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], p), t.BooleanLiteralObfuscatingReplacer = p;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        d = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = d(r(12)),
        p = r(51),
        m = r(2),
        g = r(3),
        y = r(39),
        h = r(10),
        b = r(11),
        N = r(4),
        I = r(22);

    var v =
    /*#__PURE__*/
    function (_b$AbstractNodeTransf2) {
      _inheritsLoose(v, _b$AbstractNodeTransf2);

      function v(e, t, r) {
        var _this42;

        _this42 = _b$AbstractNodeTransf2.call(this, t, r) || this, _this42.identifierObfuscatingReplacer = e(y.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer);
        return _this42;
      }

      var _proto68 = v.prototype;

      _proto68.getVisitor = function getVisitor(e) {
        var _this43 = this;

        switch (e) {
          case h.TransformationStage.Obfuscating:
            return {
              enter: function enter(e, t) {
                if (t && N.NodeGuards.isLabeledStatementNode(e)) return _this43.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto68.transformNode = function transformNode(e, t) {
        var r = I.NodeLexicalScopeUtils.getLexicalScope(e);
        return r ? (this.storeLabeledStatementName(e, r), this.replaceLabeledStatementName(e, r), e) : e;
      };

      _proto68.storeLabeledStatementName = function storeLabeledStatementName(e, t) {
        this.identifierObfuscatingReplacer.storeLocalName(e.label, t);
      };

      _proto68.replaceLabeledStatementName = function replaceLabeledStatementName(e, t) {
        var _this44 = this;

        u.replace(e, {
          enter: function enter(e, r) {
            if (r && N.NodeGuards.isLabelIdentifierNode(e, r)) {
              var _r7 = _this44.identifierObfuscatingReplacer.replace(e, t);

              e.name = _r7.name;
            }
          }
        });
      };

      return v;
    }(b.AbstractNodeTransformer);

    v = a([l.injectable(), c(0, l.inject(f.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), c(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), c(2, l.inject(f.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (o = void 0 !== p.TIdentifierObfuscatingReplacerFactory && p.TIdentifierObfuscatingReplacerFactory) ? o : Object, "function" == typeof (n = void 0 !== g.IRandomGenerator && g.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== m.IOptions && m.IOptions) ? i : Object])], v), t.LabeledStatementTransformer = v;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        d = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        l = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = r(176),
        m = r(32),
        g = r(2),
        y = r(3),
        h = r(66),
        b = r(65),
        N = r(10),
        I = r(11),
        v = r(8),
        S = r(4),
        O = r(45),
        C = r(18),
        j = r(6);

    var _ =
    /*#__PURE__*/
    function (_I$AbstractNodeTransf) {
      _inheritsLoose(_, _I$AbstractNodeTransf);

      function _(e, t, r, o, n) {
        var _this45;

        _this45 = _I$AbstractNodeTransf.call(this, t, r) || this, _this45.literalObfuscatingReplacerFactory = e, _this45.stringArrayStorageAnalyzer = o, _this45.escapeSequenceEncoder = n;
        return _this45;
      }

      var _proto69 = _.prototype;

      _proto69.getVisitor = function getVisitor(e) {
        var _this46 = this;

        switch (e) {
          case N.TransformationStage.Obfuscating:
            return {
              enter: function enter(e, t) {
                if (S.NodeGuards.isProgramNode(e) && _this46.analyzeNode(e), t && S.NodeGuards.isLiteralNode(e) && !C.NodeMetadata.isReplacedLiteral(e)) return _this46.transformNode(e, t);
              }
            };

          case N.TransformationStage.Finalizing:
            return {
              enter: function enter(e, t) {
                if (t && S.NodeGuards.isLiteralNode(e)) return _this46.encodeLiteralNodeToEscapeSequence(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto69.analyzeNode = function analyzeNode(e) {
        this.stringArrayStorageAnalyzer.analyze(e);
      };

      _proto69.transformNode = function transformNode(e, t) {
        if (O.NodeLiteralUtils.isProhibitedLiteralNode(e, t)) return e;
        var r;

        switch (_typeof(e.value)) {
          case "boolean":
            r = this.literalObfuscatingReplacerFactory(b.LiteralObfuscatingReplacer.BooleanLiteralObfuscatingReplacer).replace(e);
            break;

          case "number":
            r = this.literalObfuscatingReplacerFactory(b.LiteralObfuscatingReplacer.NumberLiteralObfuscatingReplacer).replace(e);
            break;

          case "string":
            r = this.literalObfuscatingReplacerFactory(b.LiteralObfuscatingReplacer.StringLiteralObfuscatingReplacer).replace(e);
            break;

          default:
            r = e;
        }

        return j.NodeUtils.parentizeNode(r, t), r;
      };

      _proto69.encodeLiteralNodeToEscapeSequence = function encodeLiteralNodeToEscapeSequence(e, t) {
        return "string" != typeof e.value ? e : v.NodeFactory.literalNode(this.escapeSequenceEncoder.encode(e.value, this.options.unicodeEscapeSequence));
      };

      return _;
    }(I.AbstractNodeTransformer);

    _ = c([f.injectable(), l(0, f.inject(u.ServiceIdentifiers.Factory__IObfuscatingReplacer)), l(1, f.inject(u.ServiceIdentifiers.IRandomGenerator)), l(2, f.inject(u.ServiceIdentifiers.IOptions)), l(3, f.inject(u.ServiceIdentifiers.IStringArrayStorageAnalyzer)), l(4, f.inject(u.ServiceIdentifiers.IEscapeSequenceEncoder)), d("design:paramtypes", ["function" == typeof (o = void 0 !== p.TLiteralObfuscatingReplacerFactory && p.TLiteralObfuscatingReplacerFactory) ? o : Object, "function" == typeof (n = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== g.IOptions && g.IOptions) ? i : Object, "function" == typeof (a = void 0 !== h.IStringArrayStorageAnalyzer && h.IStringArrayStorageAnalyzer) ? a : Object, "function" == typeof (s = void 0 !== m.IEscapeSequenceEncoder && m.IEscapeSequenceEncoder) ? s : Object])], _), t.LiteralTransformer = _;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(2),
        l = r(40),
        f = r(8),
        u = r(38),
        p = r(26);

    var m =
    /*#__PURE__*/
    function (_l$AbstractObfuscatin) {
      _inheritsLoose(m, _l$AbstractObfuscatin);

      function m(e) {
        var _this47;

        _this47 = _l$AbstractObfuscatin.call(this, e) || this, _this47.numberLiteralCache = new Map();
        return _this47;
      }

      var _proto70 = m.prototype;

      _proto70.replace = function replace(e) {
        var t = e.value;
        if ("number" != typeof t) throw new Error("`NumberLiteralObfuscatingReplacer` should accept only literals with `number` value");
        var r;
        return this.numberLiteralCache.has(t) ? r = this.numberLiteralCache.get(t) : (r = u.NumberUtils.isCeil(t) ? "" + p.Utils.hexadecimalPrefix + u.NumberUtils.toHex(t) : String(t), this.numberLiteralCache.set(t, r)), f.NodeFactory.literalNode(t, r);
      };

      return m;
    }(l.AbstractObfuscatingReplacer);

    m = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.IOptions)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.IOptions && d.IOptions) ? o : Object])], m), t.NumberLiteralObfuscatingReplacer = m;
  }, function (e, t, r) {
    var _o38,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(2),
        p = r(37),
        m = r(66),
        g = r(28),
        y = r(40),
        h = r(18),
        b = r(8),
        N = r(38),
        I = r(26);

    var v = _o38 =
    /*#__PURE__*/
    function (_y$AbstractObfuscatin) {
      _inheritsLoose(o, _y$AbstractObfuscatin);

      function o(e, t, r) {
        var _this48;

        _this48 = _y$AbstractObfuscatin.call(this, r) || this, _this48.nodesCache = new Map(), _this48.stringArrayStorage = e, _this48.stringArrayStorageAnalyzer = t;
        return _this48;
      }

      o.getHexadecimalLiteralNode = function getHexadecimalLiteralNode(e) {
        var t = b.NodeFactory.literalNode(e);
        return h.NodeMetadata.set(t, {
          replacedLiteral: !0
        }), t;
      };

      o.getRc4KeyLiteralNode = function getRc4KeyLiteralNode(e) {
        var t = b.NodeFactory.literalNode(e);
        return h.NodeMetadata.set(t, {
          replacedLiteral: !0
        }), t;
      };

      var _proto71 = o.prototype;

      _proto71.initialize = function initialize() {
        this.options.shuffleStringArray && this.stringArrayStorage.shuffleStorage(), this.options.rotateStringArray && this.stringArrayStorage.rotateStorage();
      };

      _proto71.replace = function replace(e) {
        var t = e.value;
        if ("string" != typeof t) throw new Error("`StringLiteralObfuscatingReplacer` should accept only literals with `string` value");
        var r = this.stringArrayStorageAnalyzer.getItemDataForLiteralNode(e),
            o = t + "-" + Boolean(r);
        if (this.nodesCache.has(o) && this.options.stringArrayEncoding !== g.StringArrayEncoding.Rc4) return this.nodesCache.get(o);
        var n = r ? this.replaceWithStringArrayCallNode(r) : this.replaceWithLiteralNode(t);
        return this.nodesCache.set(o, n), n;
      };

      _proto71.replaceWithLiteralNode = function replaceWithLiteralNode(e) {
        return b.NodeFactory.literalNode(e);
      };

      _proto71.replaceWithStringArrayCallNode = function replaceWithStringArrayCallNode(e) {
        var t = e.index,
            r = e.decodeKey,
            n = "" + I.Utils.hexadecimalPrefix + N.NumberUtils.toHex(t),
            i = [_o38.getHexadecimalLiteralNode(n)];
        r && i.push(_o38.getRc4KeyLiteralNode(r));
        var a = b.NodeFactory.identifierNode(this.stringArrayStorage.getStorageCallsWrapperName());
        return b.NodeFactory.callExpressionNode(a, i);
      };

      return o;
    }(y.AbstractObfuscatingReplacer);

    s([l.postConstruct(), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", void 0)], v.prototype, "initialize", null), v = _o38 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.IStringArrayStorage)), d(1, l.inject(f.ServiceIdentifiers.IStringArrayStorageAnalyzer)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== p.IStringArrayStorage && p.IStringArrayStorage) ? n : Object, "function" == typeof (i = void 0 !== m.IStringArrayStorageAnalyzer && m.IStringArrayStorageAnalyzer) ? i : Object, "function" == typeof (a = void 0 !== u.IOptions && u.IOptions) ? a : Object])], v), t.StringLiteralObfuscatingReplacer = v;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        l = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = r(0),
        u = r(1),
        p = l(r(12)),
        m = r(51),
        g = r(2),
        y = r(3),
        h = r(67),
        b = r(39),
        N = r(10),
        I = r(11),
        v = r(4),
        S = r(18);

    var O =
    /*#__PURE__*/
    function (_I$AbstractNodeTransf2) {
      _inheritsLoose(O, _I$AbstractNodeTransf2);

      function O(e, t, r, o) {
        var _this49;

        _this49 = _I$AbstractNodeTransf2.call(this, t, r) || this, _this49.lexicalScopesWithObjectPatternWithoutDeclarationMap = new Map(), _this49.identifierObfuscatingReplacer = e(b.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer), _this49.scopeIdentifiersTraverser = o;
        return _this49;
      }

      var _proto72 = O.prototype;

      _proto72.getVisitor = function getVisitor(e) {
        var _this50 = this;

        switch (e) {
          case N.TransformationStage.Obfuscating:
            return {
              enter: function enter(e, t) {
                if (t && v.NodeGuards.isProgramNode(e)) return _this50.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto72.transformNode = function transformNode(e, t) {
        var _this51 = this;

        return this.scopeIdentifiersTraverser.traverse(e, t, function (e) {
          var t = e.isGlobalDeclaration,
              r = e.variable,
              o = e.variableLexicalScopeNode;
          (_this51.options.renameGlobals || !t || r.defs.every(function (e) {
            return "ImportBinding" === e.type || "CatchClause" === e.type;
          })) && _this51.transformScopeVariableIdentifiers(r, o, t);
        }), e;
      };

      _proto72.transformScopeVariableIdentifiers = function transformScopeVariableIdentifiers(e, t, r) {
        for (var _iterator11 = e.identifiers, _isArray11 = Array.isArray(_iterator11), _i12 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
          var _ref14;

          if (_isArray11) {
            if (_i12 >= _iterator11.length) break;
            _ref14 = _iterator11[_i12++];
          } else {
            _i12 = _iterator11.next();
            if (_i12.done) break;
            _ref14 = _i12.value;
          }

          var _o39 = _ref14;
          this.isReplaceableIdentifierNode(_o39, t, e) && (this.storeIdentifierName(_o39, t, r), this.replaceIdentifierName(_o39, t, e));
        }
      };

      _proto72.storeIdentifierName = function storeIdentifierName(e, t, r) {
        r ? this.identifierObfuscatingReplacer.storeGlobalName(e, t) : this.identifierObfuscatingReplacer.storeLocalName(e, t);
      };

      _proto72.replaceIdentifierName = function replaceIdentifierName(e, t, r) {
        var o = this.identifierObfuscatingReplacer.replace(e, t);
        e.name = o.name, r.references.forEach(function (t) {
          t.identifier.name = e.name;
        });
      };

      _proto72.isReplaceableIdentifierNode = function isReplaceableIdentifierNode(e, t, r) {
        var o = e.parentNode;
        return !(!o || S.NodeMetadata.isIgnoredNode(e) || this.isProhibitedPropertyNode(e, o) || this.isProhibitedClassDeclarationNameIdentifierNode(r, e, o) || this.isProhibitedExportNamedClassDeclarationIdentifierNode(e, o) || this.isProhibitedExportNamedFunctionDeclarationIdentifierNode(e, o) || this.isProhibitedExportNamedVariableDeclarationIdentifierNode(e, o) || this.isProhibitedImportSpecifierNode(e, o) || this.isProhibitedVariableNameUsedInObjectPatternNode(r, e, t) || v.NodeGuards.isLabelIdentifierNode(e, o));
      };

      _proto72.isProhibitedClassDeclarationNameIdentifierNode = function isProhibitedClassDeclarationNameIdentifierNode(e, t, r) {
        return v.NodeGuards.isClassDeclarationNode(e.scope.block) && v.NodeGuards.isClassDeclarationNode(r) && r.id === t;
      };

      _proto72.isProhibitedExportNamedClassDeclarationIdentifierNode = function isProhibitedExportNamedClassDeclarationIdentifierNode(e, t) {
        return v.NodeGuards.isClassDeclarationNode(t) && t.id === e && !!t.parentNode && v.NodeGuards.isExportNamedDeclarationNode(t.parentNode);
      };

      _proto72.isProhibitedExportNamedFunctionDeclarationIdentifierNode = function isProhibitedExportNamedFunctionDeclarationIdentifierNode(e, t) {
        return v.NodeGuards.isFunctionDeclarationNode(t) && t.id === e && !!t.parentNode && v.NodeGuards.isExportNamedDeclarationNode(t.parentNode);
      };

      _proto72.isProhibitedExportNamedVariableDeclarationIdentifierNode = function isProhibitedExportNamedVariableDeclarationIdentifierNode(e, t) {
        return v.NodeGuards.isVariableDeclaratorNode(t) && t.id === e && !!t.parentNode && v.NodeGuards.isVariableDeclarationNode(t.parentNode) && !!t.parentNode.parentNode && v.NodeGuards.isExportNamedDeclarationNode(t.parentNode.parentNode);
      };

      _proto72.isProhibitedImportSpecifierNode = function isProhibitedImportSpecifierNode(e, t) {
        return v.NodeGuards.isImportSpecifierNode(t) && t.imported.name === t.local.name;
      };

      _proto72.isProhibitedPropertyNode = function isProhibitedPropertyNode(e, t) {
        var r = v.NodeGuards.isPropertyNode(t) && !t.computed && t.key === e,
            o = v.NodeGuards.isAssignmentPatternNode(t) && t.left === e && !!t.parentNode && v.NodeGuards.isPropertyNode(t.parentNode) && t.left === t.parentNode.key;
        return r || o;
      };

      _proto72.isProhibitedVariableNameUsedInObjectPatternNode = function isProhibitedVariableNameUsedInObjectPatternNode(e, t, r) {
        var o = this.lexicalScopesWithObjectPatternWithoutDeclarationMap.get(r);
        if (!1 === o) return !1;
        if (!e.defs.some(function (e) {
          return "var" === e.kind;
        })) return !1;
        var n = !1;
        return p.traverse(r, {
          enter: function enter(e, r) {
            if (v.NodeGuards.isObjectPatternNode(e) && r && v.NodeGuards.isAssignmentExpressionNode(r)) {
              o = !0;
              var _r8 = e.properties;

              for (var _iterator12 = _r8, _isArray12 = Array.isArray(_iterator12), _i13 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
                var _ref15;

                if (_isArray12) {
                  if (_i13 >= _iterator12.length) break;
                  _ref15 = _iterator12[_i13++];
                } else {
                  _i13 = _iterator12.next();
                  if (_i13.done) break;
                  _ref15 = _i13.value;
                }

                var _e7 = _ref15;
                if (!_e7.computed && _e7.shorthand && v.NodeGuards.isIdentifierNode(_e7.key) && t.name === _e7.key.name) return n = !0, p.VisitorOption.Break;
              }
            }
          }
        }), this.lexicalScopesWithObjectPatternWithoutDeclarationMap.set(r, null != o && o), n;
      };

      return O;
    }(I.AbstractNodeTransformer);

    O = s([f.injectable(), d(0, f.inject(u.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d(1, f.inject(u.ServiceIdentifiers.IRandomGenerator)), d(2, f.inject(u.ServiceIdentifiers.IOptions)), d(3, f.inject(u.ServiceIdentifiers.IScopeIdentifiersTraverser)), c("design:paramtypes", ["function" == typeof (o = void 0 !== m.TIdentifierObfuscatingReplacerFactory && m.TIdentifierObfuscatingReplacerFactory) ? o : Object, "function" == typeof (n = void 0 !== y.IRandomGenerator && y.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== g.IOptions && g.IOptions) ? i : Object, "function" == typeof (a = void 0 !== h.IScopeIdentifiersTraverser && h.IScopeIdentifiersTraverser) ? a : Object])], O), t.ScopeIdentifiersTransformer = O;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(181),
        a = r(188);
    t.optionsModule = new o.ContainerModule(function (e) {
      e(n.ServiceIdentifiers.IOptions).to(i.Options).inSingletonScope(), e(n.ServiceIdentifiers.IOptionsNormalizer).to(a.OptionsNormalizer).inSingletonScope();
    });
  }, function (e, t, r) {
    var _o40,
        n,
        i,
        a,
        s,
        c,
        d,
        l = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        f = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        u = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var p = r(31),
        m = r(0),
        g = r(1),
        y = r(68),
        h = r(182),
        b = r(183),
        N = r(184),
        I = r(33),
        v = r(23),
        S = r(34),
        O = r(28),
        C = r(41),
        j = r(185),
        _ = r(186);

    var R = _o40 = function o(e, t) {
      Object.assign(this, C.DEFAULT_PRESET, e);
      var r = y.validateSync(this, _o40.validatorOptions);
      if (r.length) throw new ReferenceError("Validation failed. errors:\n" + j.ValidationErrorsFormatter.format(r));
      Object.assign(this, t.normalize(this));
    };

    R.validatorOptions = {
      validationError: {
        target: !1
      }
    }, l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "compact", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "controlFlowFlattening", void 0), l([y.IsNumber(), y.Min(0), y.Max(1), f("design:type", Number)], R.prototype, "controlFlowFlatteningThreshold", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "deadCodeInjection", void 0), l([y.IsNumber(), f("design:type", Number)], R.prototype, "deadCodeInjectionThreshold", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "debugProtection", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "debugProtectionInterval", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "disableConsoleOutput", void 0), l([y.IsArray(), y.ArrayUnique(), y.IsString({
      each: !0
    }), _.IsAllowedForObfuscationTargets([v.ObfuscationTarget.Browser, v.ObfuscationTarget.BrowserNoEval]), f("design:type", Array)], R.prototype, "domainLock", void 0), l([y.IsIn([I.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator, I.IdentifierNamesGenerator.HexadecimalIdentifierNamesGenerator, I.IdentifierNamesGenerator.MangledIdentifierNamesGenerator]), f("design:type", "function" == typeof (n = void 0 !== p.TypeFromEnum && p.TypeFromEnum) ? n : Object)], R.prototype, "identifierNamesGenerator", void 0), l([y.IsString(), f("design:type", String)], R.prototype, "identifiersPrefix", void 0), l([y.IsArray(), y.ArrayUnique(), y.IsString({
      each: !0
    }), y.ValidateIf(function (e) {
      return e.identifierNamesGenerator === I.IdentifierNamesGenerator.DictionaryIdentifierNamesGenerator;
    }), y.ArrayNotEmpty(), f("design:type", Array)], R.prototype, "identifiersDictionary", void 0), l([y.IsString(), f("design:type", String)], R.prototype, "inputFileName", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "log", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "renameGlobals", void 0), l([y.IsArray(), y.ArrayUnique(), y.IsString({
      each: !0
    }), f("design:type", Array)], R.prototype, "reservedNames", void 0), l([y.IsArray(), y.ArrayUnique(), y.IsString({
      each: !0
    }), f("design:type", Array)], R.prototype, "reservedStrings", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "rotateStringArray", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "selfDefending", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "shuffleStringArray", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "sourceMap", void 0), l([y.IsString(), y.ValidateIf(function (e) {
      return Boolean(e.sourceMapBaseUrl);
    }), y.IsUrl({
      require_protocol: !0,
      require_tld: !1,
      require_valid_protocol: !0
    }), f("design:type", String)], R.prototype, "sourceMapBaseUrl", void 0), l([y.IsString(), f("design:type", String)], R.prototype, "sourceMapFileName", void 0), l([y.IsIn([S.SourceMapMode.Inline, S.SourceMapMode.Separate]), f("design:type", "function" == typeof (i = void 0 !== p.TypeFromEnum && p.TypeFromEnum) ? i : Object)], R.prototype, "sourceMapMode", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "splitStrings", void 0), l([y.IsNumber(), y.ValidateIf(function (e) {
      return Boolean(e.splitStrings);
    }), y.Min(1), f("design:type", Number)], R.prototype, "splitStringsChunkLength", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "stringArray", void 0), l([y.IsIn([!0, !1, O.StringArrayEncoding.Base64, O.StringArrayEncoding.Rc4]), f("design:type", "function" == typeof (a = void 0 !== b.TStringArrayEncoding && b.TStringArrayEncoding) ? a : Object)], R.prototype, "stringArrayEncoding", void 0), l([y.IsNumber(), y.Min(0), y.Max(1), f("design:type", Number)], R.prototype, "stringArrayThreshold", void 0), l([y.IsIn([v.ObfuscationTarget.Browser, v.ObfuscationTarget.BrowserNoEval, v.ObfuscationTarget.Node]), f("design:type", "function" == typeof (s = void 0 !== p.TypeFromEnum && p.TypeFromEnum) ? s : Object)], R.prototype, "target", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "transformObjectKeys", void 0), l([y.IsBoolean(), f("design:type", Boolean)], R.prototype, "unicodeEscapeSequence", void 0), R = _o40 = l([m.injectable(), u(0, m.inject(g.ServiceIdentifiers.TInputOptions)), u(1, m.inject(g.ServiceIdentifiers.IOptionsNormalizer)), f("design:paramtypes", ["function" == typeof (c = void 0 !== h.TInputOptions && h.TInputOptions) ? c : Object, "function" == typeof (d = void 0 !== N.IOptionsNormalizer && N.IOptionsNormalizer) ? d : Object])], R), t.Options = R;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o =
    /*#__PURE__*/
    function () {
      function o() {}

      o.format = function format(e) {
        return e.reduce(function (e, t) {
          return [].concat(e, [o.formatWithNestedConstraints(t)]);
        }, []).join("\n");
      };

      o.formatWithNestedConstraints = function formatWithNestedConstraints(e) {
        var t = e.constraints;
        return "" + ("`" + e.property + "` errors:\n") + Object.keys(t).map(function (e) {
          return "    - " + t[e] + "\n";
        }).join();
      };

      return o;
    }();

    t.ValidationErrorsFormatter = o;
  }, function (e, t, r) {
    var o = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(68),
        i = o(r(187)),
        a = r(42),
        s = r(41);

    t.IsAllowedForObfuscationTargets = function (e, t) {
      return function (r, o) {
        n.registerDecorator({
          propertyName: o,
          constraints: [e],
          name: "IsAllowedForObfuscationTargets",
          options: t,
          target: r.constructor,
          validator: {
            validate: function validate(t, r) {
              var n = r.object,
                  a = s.DEFAULT_PRESET[o];
              return i.default(t, a) || e.includes(n.target);
            },
            defaultMessage: function defaultMessage(t) {
              return "This option allowed only for obfuscation targets: " + e.join(a.StringSeparator.Comma + " ");
            }
          }
        });
      };
    };
  }, function (e, t) {
    e.exports = require("fast-deep-equal");
  }, function (e, t, r) {
    var _o41,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = r(189),
        s = r(190),
        c = r(191),
        d = r(192),
        l = r(193),
        f = r(194),
        u = r(195),
        p = r(196),
        m = r(197),
        g = r(198),
        y = r(199),
        h = r(200),
        b = r(201);

    var N = _o41 =
    /*#__PURE__*/
    function () {
      function o() {}

      var _proto73 = o.prototype;

      _proto73.normalize = function normalize(e) {
        var t = Object.assign({}, e);

        for (var _iterator13 = _o41.normalizerRules, _isArray13 = Array.isArray(_iterator13), _i14 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
          var _ref16;

          if (_isArray13) {
            if (_i14 >= _iterator13.length) break;
            _ref16 = _iterator13[_i14++];
          } else {
            _i14 = _iterator13.next();
            if (_i14.done) break;
            _ref16 = _i14.value;
          }

          var _e8 = _ref16;
          t = _e8(t);
        }

        return t;
      };

      return o;
    }();

    N.normalizerRules = [a.ControlFlowFlatteningThresholdRule, s.DeadCodeInjectionRule, c.DeadCodeInjectionThresholdRule, d.DomainLockRule, l.InputFileNameRule, f.SeedRule, u.SelfDefendingRule, p.SourceMapBaseUrlRule, m.SourceMapFileNameRule, g.SplitStringsChunkLengthRule, y.StringArrayRule, h.StringArrayEncodingRule, b.StringArrayThresholdRule], N = _o41 = n([i.injectable()], N), t.OptionsNormalizer = N;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ControlFlowFlatteningThresholdRule = function (e) {
      return 0 === e.controlFlowFlatteningThreshold && (e = Object.assign(Object.assign({}, e), {
        controlFlowFlattening: !1,
        controlFlowFlatteningThreshold: 0
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(41);

    t.DeadCodeInjectionRule = function (e) {
      return e.deadCodeInjection && ((e = Object.assign(Object.assign({}, e), {
        deadCodeInjection: !0,
        stringArray: !0
      })).stringArrayThreshold || (e = Object.assign(Object.assign({}, e), {
        stringArray: !0,
        stringArrayThreshold: o.DEFAULT_PRESET.stringArrayThreshold
      }))), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DeadCodeInjectionThresholdRule = function (e) {
      return 0 === e.deadCodeInjectionThreshold && (e = Object.assign(Object.assign({}, e), {
        deadCodeInjection: !1,
        deadCodeInjectionThreshold: 0
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(26);

    t.DomainLockRule = function (e) {
      if (e.domainLock.length) {
        var _t8 = [];

        for (var _iterator14 = e.domainLock, _isArray14 = Array.isArray(_iterator14), _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
          var _ref17;

          if (_isArray14) {
            if (_i15 >= _iterator14.length) break;
            _ref17 = _iterator14[_i15++];
          } else {
            _i15 = _iterator14.next();
            if (_i15.done) break;
            _ref17 = _i15.value;
          }

          var _r9 = _ref17;

          _t8.push(o.Utils.extractDomainFrom(_r9));
        }

        e = Object.assign(Object.assign({}, e), {
          domainLock: _t8
        });
      }

      return e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(42);

    t.InputFileNameRule = function (e) {
      var _e9 = e,
          t = _e9.inputFileName;
      return t && (t = t.replace(/^\/+/, "").split(o.StringSeparator.Dot).slice(0, -1).join(o.StringSeparator.Dot) || t, e = Object.assign(Object.assign({}, e), {
        inputFileName: t + ".js"
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SeedRule = function (e) {
      return e.seed ? Object.assign(Object.assign({}, e), {
        seed: e.seed
      }) : Object.assign(Object.assign({}, e), {
        seed: (0, 999999999, Math.floor(1e9 * Math.random() + 0))
      });
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SelfDefendingRule = function (e) {
      return e.selfDefending && (e = Object.assign(Object.assign({}, e), {
        compact: !0,
        selfDefending: !0
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SourceMapBaseUrlRule = function (e) {
      var _e10 = e,
          t = _e10.sourceMapBaseUrl;
      return e.sourceMapFileName ? (t && !t.endsWith("/") && (e = Object.assign(Object.assign({}, e), {
        sourceMapBaseUrl: t + "/"
      })), e) : e = Object.assign(Object.assign({}, e), {
        sourceMapBaseUrl: ""
      });
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(42);

    t.SourceMapFileNameRule = function (e) {
      var _e11 = e,
          t = _e11.sourceMapFileName;

      if (t) {
        t = t.replace(/^\/+/, "").replace(/(?:\.js)?(?:\.map)?$/, "");

        var _r10 = t.split(o.StringSeparator.Dot);

        var n = _r10.length,
            i = _r10[n - 1];
        n > 1 && i.length <= 3 && (_r10 = _r10.slice(0, -1)), t = _r10.join(o.StringSeparator.Dot), e = Object.assign(Object.assign({}, e), {
          sourceMapFileName: t + ".js.map"
        });
      }

      return e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SplitStringsChunkLengthRule = function (e) {
      return 0 === e.splitStringsChunkLength ? Object.assign(Object.assign({}, e), {
        splitStrings: !1,
        splitStringsChunkLength: 0
      }) : Object.assign(Object.assign({}, e), {
        splitStringsChunkLength: Math.floor(e.splitStringsChunkLength)
      });
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayRule = function (e) {
      return e.stringArray || (e = Object.assign(Object.assign({}, e), {
        rotateStringArray: !1,
        shuffleStringArray: !1,
        stringArray: !1,
        stringArrayEncoding: !1,
        stringArrayThreshold: 0
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(28);

    t.StringArrayEncodingRule = function (e) {
      return !0 === e.stringArrayEncoding && (e = Object.assign(Object.assign({}, e), {
        stringArrayEncoding: o.StringArrayEncoding.Base64
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.StringArrayThresholdRule = function (e) {
      return 0 === e.stringArrayThreshold && (e = Object.assign(Object.assign({}, e), {
        rotateStringArray: !1,
        stringArray: !1,
        stringArrayEncoding: !1,
        stringArrayThreshold: 0
      })), e;
    };
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(16),
        n = r(0),
        i = r(1),
        a = r(24),
        s = r(69),
        c = r(203),
        d = r(204),
        l = r(70),
        f = r(205),
        u = r(209),
        p = r(211),
        m = r(212),
        g = r(214),
        y = r(215),
        h = r(216);
    t.preparingTransformersModule = new n.ContainerModule(function (e) {
      e(i.ServiceIdentifiers.INodeTransformer).to(d.CommentsTransformer).whenTargetNamed(a.NodeTransformer.CommentsTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(f.CustomCodeHelpersTransformer).whenTargetNamed(a.NodeTransformer.CustomCodeHelpersTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(u.EvalCallExpressionTransformer).whenTargetNamed(a.NodeTransformer.EvalCallExpressionTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(p.MetadataTransformer).whenTargetNamed(a.NodeTransformer.MetadataTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(m.ObfuscatingGuardsTransformer).whenTargetNamed(a.NodeTransformer.ObfuscatingGuardsTransformer), e(i.ServiceIdentifiers.INodeTransformer).to(g.ParentificationTransformer).whenTargetNamed(a.NodeTransformer.ParentificationTransformer), e(i.ServiceIdentifiers.INodeGuard).to(c.BlackListObfuscatingGuard).inSingletonScope().whenTargetNamed(s.ObfuscatingGuard.BlackListObfuscatingGuard), e(i.ServiceIdentifiers.INodeGuard).to(l.ConditionalCommentObfuscatingGuard).inSingletonScope().whenTargetNamed(s.ObfuscatingGuard.ConditionalCommentObfuscatingGuard), e(i.ServiceIdentifiers.INodeGuard).to(y.ReservedStringObfuscatingGuard).inSingletonScope().whenTargetNamed(s.ObfuscatingGuard.ReservedStringObfuscatingGuard), e(i.ServiceIdentifiers.Factory__INodeGuard).toFactory(o.InversifyContainerFacade.getCacheFactory(i.ServiceIdentifiers.INodeGuard)), e(i.ServiceIdentifiers.INodeTransformer).to(h.VariablePreserveTransformer).whenTargetNamed(a.NodeTransformer.VariablePreserveTransformer);
    });
  }, function (e, t, r) {
    var _o42,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = r(0),
        s = r(4);

    var c = _o42 =
    /*#__PURE__*/
    function () {
      function o() {
        this.blackListGuardsLength = _o42.blackListGuards.length;
      }

      var _proto74 = o.prototype;

      _proto74.check = function check(e) {
        for (var _t9 = 0; _t9 < this.blackListGuardsLength; _t9++) {
          if (_o42.blackListGuards[_t9](e)) return !1;
        }

        return !0;
      };

      return o;
    }();

    c.blackListGuards = [s.NodeGuards.isUseStrictOperator], c = _o42 = n([a.injectable(), i("design:paramtypes", [])], c), t.BlackListObfuscatingGuard = c;
  }, function (e, t, r) {
    var _o43,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        d = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = d(r(12)),
        p = r(2),
        m = r(3),
        g = r(10),
        y = r(11),
        h = r(4),
        b = r(70);

    var N = _o43 =
    /*#__PURE__*/
    function (_y$AbstractNodeTransf) {
      _inheritsLoose(o, _y$AbstractNodeTransf);

      function o(e, t) {
        return _y$AbstractNodeTransf.call(this, e, t) || this;
      }

      var _proto75 = o.prototype;

      _proto75.getVisitor = function getVisitor(e) {
        var _this52 = this;

        switch (e) {
          case g.TransformationStage.Initializing:
            return {
              leave: function leave(e) {
                if (h.NodeGuards.isProgramNode(e)) return _this52.transformNode(e);
              }
            };

          default:
            return null;
        }
      };

      _proto75.transformNode = function transformNode(e) {
        if (!e.comments || !e.comments.length) return e;
        var t = this.transformComments(e.comments);
        return 0 === t.length ? e : e.body.length ? (u.traverse(e, {
          enter: function enter(r) {
            if (r === e) return;
            var o = t.findIndex(function (e) {
              return e.range && r.range && e.range[0] < r.range[0];
            });
            -1 !== o && (r.leadingComments = t.splice(o, t.length - o).reverse());
          }
        }), t.length > 0 && (e.trailingComments = t.reverse()), e) : (e.leadingComments = t, e);
      };

      _proto75.transformComments = function transformComments(e) {
        return e.filter(function (e) {
          return _o43.preservedWords.some(function (t) {
            return e.value.includes(t);
          }) || b.ConditionalCommentObfuscatingGuard.isConditionalComment(e);
        }).reverse();
      };

      return o;
    }(y.AbstractNodeTransformer);

    N.preservedWords = ["@license", "@preserve"], N = _o43 = a([l.injectable(), c(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), c(1, l.inject(f.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== p.IOptions && p.IOptions) ? i : Object])], N), t.CommentsTransformer = N;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = r(0),
        p = r(1),
        m = r(206),
        g = r(207),
        y = r(2),
        h = r(3),
        b = r(208),
        N = r(64),
        I = r(25),
        v = r(10),
        S = r(11),
        O = r(4);

    var C =
    /*#__PURE__*/
    function (_S$AbstractNodeTransf) {
      _inheritsLoose(C, _S$AbstractNodeTransf);

      function C(e, t, r, o, n, i) {
        var _this53;

        _this53 = _S$AbstractNodeTransf.call(this, n, i) || this, _this53.callsGraphData = [], _this53.callsGraphAnalyzer = e, _this53.prevailingKindOfVariablesAnalyzer = t, _this53.obfuscationEventEmitter = r, _this53.customCodeHelperGroupStorage = o;
        return _this53;
      }

      var _proto76 = C.prototype;

      _proto76.getVisitor = function getVisitor(e) {
        var _this54 = this;

        switch (e) {
          case v.TransformationStage.Preparing:
            return {
              leave: function leave(e, t) {
                if (O.NodeGuards.isProgramNode(e)) return _this54.analyzeNode(e, t), _this54.appendCustomNodesBeforeObfuscation(e, t), _this54.transformNode(e, t);
              }
            };

          case v.TransformationStage.Finalizing:
            return {
              leave: function leave(e, t) {
                O.NodeGuards.isProgramNode(e) && _this54.appendCustomNodesAfterObfuscation(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto76.analyzeNode = function analyzeNode(e, t) {
        this.callsGraphData = this.callsGraphAnalyzer.analyze(e), this.prevailingKindOfVariablesAnalyzer.analyze(e);
      };

      _proto76.transformNode = function transformNode(e, t) {
        return e;
      };

      _proto76.appendCustomNodesBeforeObfuscation = function appendCustomNodesBeforeObfuscation(e, t) {
        var _this55 = this;

        this.customCodeHelperGroupStorage.getStorage().forEach(function (e) {
          e.initialize(), _this55.obfuscationEventEmitter.once(e.getAppendEvent(), e.appendNodes.bind(e));
        }), this.obfuscationEventEmitter.emit(I.ObfuscationEvent.BeforeObfuscation, e, this.callsGraphData);
      };

      _proto76.appendCustomNodesAfterObfuscation = function appendCustomNodesAfterObfuscation(e, t) {
        this.obfuscationEventEmitter.emit(I.ObfuscationEvent.AfterObfuscation, e, this.callsGraphData);
      };

      return C;
    }(S.AbstractNodeTransformer);

    C = d([u.injectable(), f(0, u.inject(p.ServiceIdentifiers.ICallsGraphAnalyzer)), f(1, u.inject(p.ServiceIdentifiers.IPrevailingKindOfVariablesAnalyzer)), f(2, u.inject(p.ServiceIdentifiers.IObfuscationEventEmitter)), f(3, u.inject(p.ServiceIdentifiers.TCustomNodeGroupStorage)), f(4, u.inject(p.ServiceIdentifiers.IRandomGenerator)), f(5, u.inject(p.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (o = void 0 !== b.ICallsGraphAnalyzer && b.ICallsGraphAnalyzer) ? o : Object, "function" == typeof (n = void 0 !== N.IPrevailingKindOfVariablesAnalyzer && N.IPrevailingKindOfVariablesAnalyzer) ? n : Object, "function" == typeof (i = void 0 !== g.IObfuscationEventEmitter && g.IObfuscationEventEmitter) ? i : Object, "function" == typeof (a = void 0 !== m.TCustomCodeHelperGroupStorage && m.TCustomCodeHelperGroupStorage) ? a : Object, "function" == typeof (s = void 0 !== h.IRandomGenerator && h.IRandomGenerator) ? s : Object, "function" == typeof (c = void 0 !== y.IOptions && y.IOptions) ? c : Object])], C), t.CustomCodeHelpersTransformer = C;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var _o44,
        n,
        i,
        a = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        s = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        c = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        d = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = d(r(210)),
        p = r(2),
        m = r(3),
        g = r(10),
        y = r(11),
        h = r(8),
        b = r(4),
        N = r(6);

    var I = _o44 =
    /*#__PURE__*/
    function (_y$AbstractNodeTransf2) {
      _inheritsLoose(o, _y$AbstractNodeTransf2);

      function o(e, t) {
        var _this56;

        _this56 = _y$AbstractNodeTransf2.call(this, e, t) || this, _this56.evalRootAstHostNodeSet = new Set();
        return _this56;
      }

      o.extractEvalStringFromCallExpressionArgument = function extractEvalStringFromCallExpressionArgument(e) {
        return b.NodeGuards.isLiteralNode(e) ? _o44.extractEvalStringFromLiteralNode(e) : b.NodeGuards.isTemplateLiteralNode(e) ? _o44.extractEvalStringFromTemplateLiteralNode(e) : null;
      };

      o.extractEvalStringFromLiteralNode = function extractEvalStringFromLiteralNode(e) {
        return "string" == typeof e.value ? e.value : null;
      };

      o.extractEvalStringFromTemplateLiteralNode = function extractEvalStringFromTemplateLiteralNode(e) {
        var t = e.quasis;
        return 1 !== t.length || e.expressions.length ? null : t[0].value.cooked;
      };

      var _proto77 = o.prototype;

      _proto77.getVisitor = function getVisitor(e) {
        var _this57 = this;

        switch (e) {
          case g.TransformationStage.Preparing:
            return {
              enter: function enter(e, t) {
                if (t && b.NodeGuards.isCallExpressionNode(e) && b.NodeGuards.isIdentifierNode(e.callee) && "eval" === e.callee.name) return _this57.transformNode(e, t);
              }
            };

          case g.TransformationStage.Finalizing:
            return this.evalRootAstHostNodeSet.size ? {
              leave: function leave(e, t) {
                if (t && _this57.isEvalRootAstHostNode(e)) return _this57.restoreNode(e, t);
              }
            } : null;

          default:
            return null;
        }
      };

      _proto77.transformNode = function transformNode(e, t) {
        var r = e.arguments[0];
        if (!r) return e;

        var n = _o44.extractEvalStringFromCallExpressionArgument(r);

        if (!n) return e;
        var i;

        try {
          i = N.NodeUtils.convertCodeToStructure(n);
        } catch (t) {
          return e;
        }

        var a = h.NodeFactory.functionExpressionNode([], h.NodeFactory.blockStatementNode(i));
        return this.evalRootAstHostNodeSet.add(a), a;
      };

      _proto77.restoreNode = function restoreNode(e, t) {
        var r = e.body.body,
            o = N.NodeUtils.convertStructureToCode(r);
        return h.NodeFactory.callExpressionNode(h.NodeFactory.identifierNode("eval"), [h.NodeFactory.literalNode(u.default(o))]);
      };

      _proto77.isEvalRootAstHostNode = function isEvalRootAstHostNode(e) {
        return b.NodeGuards.isFunctionExpressionNode(e) && this.evalRootAstHostNodeSet.has(e);
      };

      return o;
    }(y.AbstractNodeTransformer);

    I = _o44 = a([l.injectable(), c(0, l.inject(f.ServiceIdentifiers.IRandomGenerator)), c(1, l.inject(f.ServiceIdentifiers.IOptions)), s("design:paramtypes", ["function" == typeof (n = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== p.IOptions && p.IOptions) ? i : Object])], I), t.EvalCallExpressionTransformer = I;
  }, function (e, t) {
    e.exports = require("js-string-escape");
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(10),
        p = r(11),
        m = r(4),
        g = r(18);

    var y =
    /*#__PURE__*/
    function (_p$AbstractNodeTransf3) {
      _inheritsLoose(y, _p$AbstractNodeTransf3);

      function y(e, t) {
        return _p$AbstractNodeTransf3.call(this, e, t) || this;
      }

      var _proto78 = y.prototype;

      _proto78.getVisitor = function getVisitor(e) {
        var _this58 = this;

        switch (e) {
          case u.TransformationStage.Preparing:
            return {
              enter: function enter(e, t) {
                return _this58.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto78.transformNode = function transformNode(e, t) {
        return g.NodeMetadata.set(e, {
          ignoredNode: !1
        }), m.NodeGuards.isLiteralNode(e) && g.NodeMetadata.set(e, {
          replacedLiteral: !1
        }), e;
      };

      return y;
    }(p.AbstractNodeTransformer);

    y = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], y), t.MetadataTransformer = y;
  }, function (e, t, r) {
    var _o45,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(213),
        p = r(2),
        m = r(3),
        g = r(69),
        y = r(10),
        h = r(11),
        b = r(18);

    var N = _o45 =
    /*#__PURE__*/
    function (_h$AbstractNodeTransf2) {
      _inheritsLoose(o, _h$AbstractNodeTransf2);

      function o(e, t, r) {
        var _this59;

        _this59 = _h$AbstractNodeTransf2.call(this, t, r) || this, _this59.obfuscatingGuards = _o45.obfuscatingGuardsList.map(e);
        return _this59;
      }

      var _proto79 = o.prototype;

      _proto79.getVisitor = function getVisitor(e) {
        var _this60 = this;

        switch (e) {
          case y.TransformationStage.Preparing:
            return {
              enter: function enter(e, t) {
                return _this60.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto79.transformNode = function transformNode(e, t) {
        var r = this.obfuscatingGuards.every(function (t) {
          return t.check(e);
        });
        return b.NodeMetadata.set(e, {
          ignoredNode: !r
        }), e;
      };

      return o;
    }(h.AbstractNodeTransformer);

    N.obfuscatingGuardsList = [g.ObfuscatingGuard.BlackListObfuscatingGuard, g.ObfuscatingGuard.ConditionalCommentObfuscatingGuard, g.ObfuscatingGuard.ReservedStringObfuscatingGuard], N = _o45 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__INodeGuard)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TObfuscatingGuardFactory && u.TObfuscatingGuardFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], N), t.ObfuscatingGuardsTransformer = N;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(10),
        p = r(11),
        m = r(6);

    var g =
    /*#__PURE__*/
    function (_p$AbstractNodeTransf4) {
      _inheritsLoose(g, _p$AbstractNodeTransf4);

      function g(e, t) {
        return _p$AbstractNodeTransf4.call(this, e, t) || this;
      }

      var _proto80 = g.prototype;

      _proto80.getVisitor = function getVisitor(e) {
        var _this61 = this;

        switch (e) {
          case u.TransformationStage.Preparing:
            return {
              enter: function enter(e, t) {
                return _this61.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto80.transformNode = function transformNode(e, t) {
        return m.NodeUtils.parentizeNode(e, t);
      };

      return g;
    }(p.AbstractNodeTransformer);

    g = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], g), t.ParentificationTransformer = g;
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(2),
        d = r(1),
        l = r(4);

    var f =
    /*#__PURE__*/
    function () {
      function f(e) {
        this.options = e;
      }

      var _proto81 = f.prototype;

      _proto81.check = function check(e) {
        return !this.options.reservedStrings.length || !l.NodeGuards.isLiteralNode(e) || "string" != typeof e.value || !this.isReservedString(e.value);
      };

      _proto81.isReservedString = function isReservedString(e) {
        return this.options.reservedStrings.some(function (t) {
          return null !== new RegExp(t, "g").exec(e);
        });
      };

      return f;
    }();

    f = n([s.injectable(), a(0, s.inject(d.ServiceIdentifiers.IOptions)), i("design:paramtypes", ["function" == typeof (o = void 0 !== c.IOptions && c.IOptions) ? o : Object])], f), t.ReservedStringObfuscatingGuard = f;
  }, function (e, t, r) {
    var o,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(51),
        u = r(2),
        p = r(3),
        m = r(67),
        g = r(1),
        y = r(10),
        h = r(11),
        b = r(39),
        N = r(4);

    var I =
    /*#__PURE__*/
    function (_h$AbstractNodeTransf3) {
      _inheritsLoose(I, _h$AbstractNodeTransf3);

      function I(e, t, r, o) {
        var _this62;

        _this62 = _h$AbstractNodeTransf3.call(this, t, r) || this, _this62.identifierObfuscatingReplacer = e(b.IdentifierObfuscatingReplacer.BaseIdentifierObfuscatingReplacer), _this62.scopeIdentifiersTraverser = o;
        return _this62;
      }

      var _proto82 = I.prototype;

      _proto82.getVisitor = function getVisitor(e) {
        var _this63 = this;

        switch (e) {
          case y.TransformationStage.Preparing:
          case y.TransformationStage.Converting:
          case y.TransformationStage.Obfuscating:
            return {
              enter: function enter(e, t) {
                if (t && N.NodeGuards.isProgramNode(e)) return _this63.transformNode(e, t);
              }
            };

          default:
            return null;
        }
      };

      _proto82.transformNode = function transformNode(e, t) {
        var _this64 = this;

        return this.scopeIdentifiersTraverser.traverse(e, t, function (e) {
          var t = e.isGlobalDeclaration,
              r = e.variable,
              o = e.variableScope;

          _this64.preserveScopeVariableIdentifiers(r, o, t);
        }), e;
      };

      _proto82.preserveScopeVariableIdentifiers = function preserveScopeVariableIdentifiers(e, t, r) {
        for (var _iterator15 = e.identifiers, _isArray15 = Array.isArray(_iterator15), _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
          var _ref18;

          if (_isArray15) {
            if (_i16 >= _iterator15.length) break;
            _ref18 = _iterator15[_i16++];
          } else {
            _i16 = _iterator15.next();
            if (_i16.done) break;
            _ref18 = _i16.value;
          }

          var _o46 = _ref18;
          r ? this.preserveIdentifierNameForRootLexicalScope(_o46) : this.preserveIdentifierNameForLexicalScope(_o46, t);
        }
      };

      _proto82.preserveIdentifierNameForRootLexicalScope = function preserveIdentifierNameForRootLexicalScope(e) {
        this.identifierObfuscatingReplacer.preserveName(e);
      };

      _proto82.preserveIdentifierNameForLexicalScope = function preserveIdentifierNameForLexicalScope(e, t) {
        var r = N.NodeGuards.isNodeWithLexicalScope(t.block) ? t.block : null;
        r && this.identifierObfuscatingReplacer.preserveNameForLexicalScope(e, r);
      };

      return I;
    }(h.AbstractNodeTransformer);

    I = s([l.injectable(), d(0, l.inject(g.ServiceIdentifiers.Factory__IIdentifierObfuscatingReplacer)), d(1, l.inject(g.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(g.ServiceIdentifiers.IOptions)), d(3, l.inject(g.ServiceIdentifiers.IScopeIdentifiersTraverser)), c("design:paramtypes", ["function" == typeof (o = void 0 !== f.TIdentifierObfuscatingReplacerFactory && f.TIdentifierObfuscatingReplacerFactory) ? o : Object, "function" == typeof (n = void 0 !== p.IRandomGenerator && p.IRandomGenerator) ? n : Object, "function" == typeof (i = void 0 !== u.IOptions && u.IOptions) ? i : Object, "function" == typeof (a = void 0 !== m.IScopeIdentifiersTraverser && m.IScopeIdentifiersTraverser) ? a : Object])], I), t.VariablePreserveTransformer = I;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(218),
        a = r(219),
        s = r(221);
    t.storagesModule = new o.ContainerModule(function (e) {
      e(n.ServiceIdentifiers.TCustomNodeGroupStorage).to(a.CustomCodeHelperGroupStorage).inSingletonScope(), e(n.ServiceIdentifiers.IStringArrayStorage).to(s.StringArrayStorage).inSingletonScope(), e(n.ServiceIdentifiers.Newable__TControlFlowStorage).toConstructor(i.ControlFlowStorage), e(n.ServiceIdentifiers.Factory__TControlFlowStorage).toFactory(function (e) {
        return function () {
          var t = new (e.container.get(n.ServiceIdentifiers.Newable__TControlFlowStorage))(e.container.get(n.ServiceIdentifiers.IRandomGenerator), e.container.get(n.ServiceIdentifiers.IOptions));
          return t.initialize(), t;
        };
      });
    });
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(2),
        f = r(3),
        u = r(52);

    var p =
    /*#__PURE__*/
    function (_u$MapStorage) {
      _inheritsLoose(p, _u$MapStorage);

      function p(e, t) {
        return _u$MapStorage.call(this, e, t) || this;
      }

      return p;
    }(u.MapStorage);

    p = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.IRandomGenerator)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== f.IRandomGenerator && f.IRandomGenerator) ? o : Object, "function" == typeof (n = void 0 !== l.IOptions && l.IOptions) ? n : Object])], p), t.ControlFlowStorage = p;
  }, function (e, t, r) {
    var _o47,
        n,
        i,
        a,
        s = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        c = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        d = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = r(0),
        f = r(1),
        u = r(220),
        p = r(2),
        m = r(3),
        g = r(63),
        y = r(52);

    var h = _o47 =
    /*#__PURE__*/
    function (_y$MapStorage) {
      _inheritsLoose(o, _y$MapStorage);

      function o(e, t, r) {
        var _this65;

        _this65 = _y$MapStorage.call(this, t, r) || this, _this65.customCodeHelperGroupFactory = e;
        return _this65;
      }

      var _proto83 = o.prototype;

      _proto83.initialize = function initialize() {
        var _this66 = this;

        _y$MapStorage.prototype.initialize.call(this), _o47.customCodeHelperGroupsList.forEach(function (e) {
          var t = _this66.customCodeHelperGroupFactory(e);

          _this66.storage.set(e, t);
        });
      };

      return o;
    }(y.MapStorage);

    h.customCodeHelperGroupsList = [g.CustomCodeHelperGroup.ConsoleOutput, g.CustomCodeHelperGroup.DebugProtection, g.CustomCodeHelperGroup.DomainLock, g.CustomCodeHelperGroup.SelfDefending, g.CustomCodeHelperGroup.StringArray], s([l.postConstruct(), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", void 0)], h.prototype, "initialize", null), h = _o47 = s([l.injectable(), d(0, l.inject(f.ServiceIdentifiers.Factory__ICustomCodeHelperGroup)), d(1, l.inject(f.ServiceIdentifiers.IRandomGenerator)), d(2, l.inject(f.ServiceIdentifiers.IOptions)), c("design:paramtypes", ["function" == typeof (n = void 0 !== u.TCustomCodeHelperGroupFactory && u.TCustomCodeHelperGroupFactory) ? n : Object, "function" == typeof (i = void 0 !== m.IRandomGenerator && m.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== p.IOptions && p.IOptions) ? a : Object])], h), t.CustomCodeHelperGroupStorage = h;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var _o48,
        n,
        i,
        a,
        s,
        c,
        d,
        l = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        f = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        u = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var p = r(0),
        m = r(1),
        g = r(5),
        y = r(36),
        h = r(49),
        b = r(32),
        N = r(2),
        I = r(3),
        v = r(28),
        S = r(52);

    var O = _o48 =
    /*#__PURE__*/
    function (_S$MapStorage) {
      _inheritsLoose(o, _S$MapStorage);

      function o(e, t, r, n, i, a) {
        var _this67;

        _this67 = _S$MapStorage.call(this, r, n) || this, _this67.rc4EncodedValuesSourcesCache = new Map(), _this67.rotationAmount = 0, _this67.identifierNamesGenerator = e(n), _this67.arrayUtils = t, _this67.cryptUtils = i, _this67.escapeSequenceEncoder = a, _this67.rc4Keys = _this67.randomGenerator.getRandomGenerator().n(function () {
          return _this67.randomGenerator.getRandomGenerator().string({
            length: _o48.rc4KeyLength
          });
        }, _o48.rc4KeysCount);
        return _this67;
      }

      var _proto84 = o.prototype;

      _proto84.initialize = function initialize() {
        _S$MapStorage.prototype.initialize.call(this), this.rotationAmount = this.options.rotateStringArray ? this.randomGenerator.getRandomInteger(_o48.minimumRotationAmount, _o48.maximumRotationAmount) : 0;
      };

      _proto84.get = function get(e) {
        return this.getOrSetIfDoesNotExist(e);
      };

      _proto84.getRotationAmount = function getRotationAmount() {
        return this.rotationAmount;
      };

      _proto84.getStorageName = function getStorageName() {
        return this.getStorageId();
      };

      _proto84.getStorageId = function getStorageId() {
        return this.stringArrayStorageName || (this.stringArrayStorageName = this.identifierNamesGenerator.generateWithPrefix(_o48.stringArrayNameLength)), this.stringArrayStorageName;
      };

      _proto84.getStorageCallsWrapperName = function getStorageCallsWrapperName() {
        return this.stringArrayStorageCallsWrapperName || (this.stringArrayStorageCallsWrapperName = this.identifierNamesGenerator.generateWithPrefix(_o48.stringArrayNameLength)), this.stringArrayStorageCallsWrapperName;
      };

      _proto84.rotateStorage = function rotateStorage() {
        this.getLength() && (this.storage = new Map(this.arrayUtils.rotate(Array.from(this.storage.entries()), this.rotationAmount)));
      };

      _proto84.shuffleStorage = function shuffleStorage() {
        this.storage = new Map(this.arrayUtils.shuffle(Array.from(this.storage.entries())).map(function (_ref19, r) {
          var e = _ref19[0],
              t = _ref19[1];
          return t.index = r, [e, t];
        }).sort(function (_ref20, _ref21) {
          var e = _ref20[1];
          var t = _ref21[1];
          return e.index - t.index;
        }));
      };

      _proto84.toString = function toString() {
        var _this68 = this;

        return Array.from(this.storage.values()).map(function (e) {
          return "'" + _this68.escapeSequenceEncoder.encode(e.encodedValue, _this68.options.unicodeEscapeSequence) + "'";
        }).toString();
      };

      _proto84.getOrSetIfDoesNotExist = function getOrSetIfDoesNotExist(e) {
        var _this$getEncodedValue = this.getEncodedValue(e),
            t = _this$getEncodedValue.encodedValue,
            r = _this$getEncodedValue.decodeKey,
            o = this.storage.get(t);

        if (o) return o;
        var n = {
          encodedValue: t,
          decodeKey: r,
          value: e,
          index: this.getLength()
        };
        return this.storage.set(t, n), n;
      };

      _proto84.getEncodedValue = function getEncodedValue(e) {
        var t;

        switch (this.options.stringArrayEncoding) {
          case v.StringArrayEncoding.Rc4:
            {
              var _r11 = this.randomGenerator.getRandomGenerator().pickone(this.rc4Keys),
                  _o49 = this.cryptUtils.btoa(this.cryptUtils.rc4(e, _r11)),
                  _n4 = null !== (t = this.rc4EncodedValuesSourcesCache.get(_o49)) && void 0 !== t ? t : [];

              var _i17 = _n4.length;
              return (!_i17 || !_n4.includes(e)) && (_n4.push(e), _i17++), this.rc4EncodedValuesSourcesCache.set(_o49, _n4), _i17 > 1 ? this.getEncodedValue(e) : {
                encodedValue: _o49,
                decodeKey: _r11
              };
            }

          case v.StringArrayEncoding.Base64:
            {
              var _t10 = null;
              return {
                encodedValue: this.cryptUtils.btoa(e),
                decodeKey: _t10
              };
            }

          default:
            return {
              encodedValue: e,
              decodeKey: null
            };
        }
      };

      return o;
    }(S.MapStorage);

    O.minimumRotationAmount = 100, O.maximumRotationAmount = 500, O.rc4KeyLength = 4, O.rc4KeysCount = 50, O.stringArrayNameLength = 7, l([p.postConstruct(), f("design:type", Function), f("design:paramtypes", []), f("design:returntype", void 0)], O.prototype, "initialize", null), O = _o48 = l([p.injectable(), u(0, p.inject(m.ServiceIdentifiers.Factory__IIdentifierNamesGenerator)), u(1, p.inject(m.ServiceIdentifiers.IArrayUtils)), u(2, p.inject(m.ServiceIdentifiers.IRandomGenerator)), u(3, p.inject(m.ServiceIdentifiers.IOptions)), u(4, p.inject(m.ServiceIdentifiers.ICryptUtils)), u(5, p.inject(m.ServiceIdentifiers.IEscapeSequenceEncoder)), f("design:paramtypes", ["function" == typeof (n = void 0 !== g.TIdentifierNamesGeneratorFactory && g.TIdentifierNamesGeneratorFactory) ? n : Object, "function" == typeof (i = void 0 !== y.IArrayUtils && y.IArrayUtils) ? i : Object, "function" == typeof (a = void 0 !== I.IRandomGenerator && I.IRandomGenerator) ? a : Object, "function" == typeof (s = void 0 !== N.IOptions && N.IOptions) ? s : Object, "function" == typeof (c = void 0 !== h.ICryptUtils && h.ICryptUtils) ? c : Object, "function" == typeof (d = void 0 !== b.IEscapeSequenceEncoder && b.IEscapeSequenceEncoder) ? d : Object])], O), t.StringArrayStorage = O;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(0),
        n = r(1),
        i = r(223),
        a = r(224),
        s = r(228),
        c = r(229),
        d = r(230),
        l = r(71);
    t.utilsModule = new o.ContainerModule(function (e) {
      e(n.ServiceIdentifiers.IArrayUtils).to(i.ArrayUtils).inSingletonScope(), e(n.ServiceIdentifiers.IRandomGenerator).to(l.RandomGenerator).inSingletonScope(), e(n.ServiceIdentifiers.ICryptUtils).to(a.CryptUtils).inSingletonScope(), e(n.ServiceIdentifiers.IEscapeSequenceEncoder).to(s.EscapeSequenceEncoder).inSingletonScope(), e(n.ServiceIdentifiers.ILevelledTopologicalSorter).to(c.LevelledTopologicalSorter), e(n.ServiceIdentifiers.INodeTransformerNamesGroupsBuilder).to(d.NodeTransformerNamesGroupsBuilder).inSingletonScope();
    });
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(3);

    var l =
    /*#__PURE__*/
    function () {
      function l(e) {
        this.randomGenerator = e;
      }

      var _proto85 = l.prototype;

      _proto85.createWithRange = function createWithRange(e) {
        var t = [];

        for (var _r12 = 0; _r12 < e; _r12++) {
          t.push(_r12);
        }

        return t;
      };

      _proto85.findMostOccurringElement = function findMostOccurringElement(e) {
        var t;
        if (!e.length) return null;
        var r = {};
        var o = e[0],
            n = 1;

        for (var _iterator16 = e, _isArray16 = Array.isArray(_iterator16), _i18 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
          var _ref22;

          if (_isArray16) {
            if (_i18 >= _iterator16.length) break;
            _ref22 = _iterator16[_i18++];
          } else {
            _i18 = _iterator16.next();
            if (_i18.done) break;
            _ref22 = _i18.value;
          }

          var _i19 = _ref22;

          var _e12 = (null !== (t = r[_i19]) && void 0 !== t ? t : 0) + 1;

          _e12 > n && (o = _i19, n = _e12), r[_i19] = _e12;
        }

        return o;
      };

      _proto85.rotate = function rotate(e, t) {
        if (!e.length) throw new ReferenceError("Cannot rotate empty array.");
        if (t <= 0) return e;
        var r = e;
        var o;

        for (; t--;) {
          o = r.pop(), o && r.unshift(o);
        }

        return r;
      };

      _proto85.shuffle = function shuffle(e) {
        var t = [].concat(e);

        for (var _e13 = t.length; _e13; _e13--) {
          var _r13 = Math.floor(this.randomGenerator.getMathRandom() * _e13);

          var _ref23 = [t[_r13], t[_e13 - 1]];
          t[_e13 - 1] = _ref23[0];
          t[_r13] = _ref23[1];
        }

        return t;
      };

      return l;
    }();

    l = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.IRandomGenerator)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.IRandomGenerator && d.IRandomGenerator) ? o : Object])], l), t.ArrayUtils = l;
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(3),
        l = r(71),
        f = r(26);

    var u =
    /*#__PURE__*/
    function () {
      function u(e) {
        this.randomGenerator = e;
      }

      var _proto86 = u.prototype;

      _proto86.btoa = function btoa(e) {
        var t = "";
        e = encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
          return String.fromCharCode(parseInt("" + f.Utils.hexadecimalPrefix + t, 16));
        });

        for (var _r14, _o50, _n5 = 0, _i20 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; e.charAt(0 | _n5) || (_i20 = "=", _n5 % 1); t += _i20.charAt(63 & _r14 >> 8 - _n5 % 1 * 8)) {
          if (_o50 = e.charCodeAt(_n5 += .75), _o50 > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
          _r14 = _r14 << 8 | _o50;
        }

        return t;
      };

      _proto86.hideString = function hideString(e, t) {
        var _this69 = this;

        var r = this.randomGenerator.getRandomGenerator().string({
          length: t,
          pool: l.RandomGenerator.randomGeneratorPool
        }).replace(new RegExp("[" + (o = e, o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")) + "]", "g"), "");
        var o;
        var n = r.split("");
        return this.randomGenerator.getRandomGenerator().shuffle(n), r = n.join(""), [function (e, t) {
          var r = -1,
              o = -1,
              n = "";

          for (; r < e.length || o < t.length;) {
            _this69.randomGenerator.getMathRandom() < .5 && o < t.length ? n += t.charAt(++o) : n += e.charAt(++r);
          }

          return n;
        }(e, r), r];
      };

      _proto86.rc4 = function rc4(e, t) {
        var r = [];
        var o,
            n = 0,
            i = "";

        for (var a = 0; a < 256; a++) {
          r[a] = a;
        }

        for (a = 0; a < 256; a++) {
          n = (n + r[a] + t.charCodeAt(a % t.length)) % 256, o = r[a], r[a] = r[n], r[n] = o;
        }

        a = 0, n = 0;

        for (var _t11 = 0; _t11 < e.length; _t11++) {
          n = (n + r[a = (a + 1) % 256]) % 256, o = r[a], r[a] = r[n], r[n] = o, i += String.fromCharCode(e.charCodeAt(_t11) ^ r[(r[a] + r[n]) % 256]);
        }

        return i;
      };

      return u;
    }();

    u = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.IRandomGenerator)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.IRandomGenerator && d.IRandomGenerator) ? o : Object])], u), t.CryptUtils = u;
  }, function (e, t) {
    e.exports = require("md5");
  }, function (e, t) {
    e.exports = require("chance");
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        this.stringsCache = new Map();
      }

      var _proto87 = n.prototype;

      _proto87.encode = function encode(e, t) {
        var r = e + "-" + String(t);
        if (this.stringsCache.has(r)) return this.stringsCache.get(r);
        var o = new RegExp("[\\s\\S]", "g"),
            n = new RegExp("['\"\\\\\\s]"),
            i = new RegExp("[\\x00-\\x7F]");
        var a, s;
        var c = e.replace(o, function (e) {
          return t || n.exec(e) ? (i.exec(e) ? (a = "\\x", s = "00") : (a = "\\u", s = "0000"), "" + a + (s + e.charCodeAt(0).toString(16)).slice(-s.length)) : e;
        });
        return this.stringsCache.set(r, c), this.stringsCache.set(c + "-" + String(t), c), c;
      };

      return n;
    }();

    n = o([r(0).injectable()], n), t.EscapeSequenceEncoder = n;
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        this.graph = new Map();
      }

      var _proto88 = n.prototype;

      _proto88.add = function add(e, t) {
        if (t === void 0) {
          t = null;
        }

        return null !== t ? this.link(e, t) : this.register(e);
      };

      _proto88.sort = function sort() {
        var e = Array.from(this.graph.keys()),
            t = [],
            r = {};

        for (var _i21 = 0, _e14 = e; _i21 < _e14.length; _i21++) {
          var _o51 = _e14[_i21];
          void 0 === r[_o51] && this.visit(t, r, _o51);
        }

        return t;
      };

      _proto88.sortByGroups = function sortByGroups() {
        this.sort();
        var e = [];

        for (; this.hasNodes();) {
          var _t12 = this.findRootNodes();

          e.push(_t12);

          for (var _iterator17 = _t12, _isArray17 = Array.isArray(_iterator17), _i22 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
            var _ref24;

            if (_isArray17) {
              if (_i22 >= _iterator17.length) break;
              _ref24 = _iterator17[_i22++];
            } else {
              _i22 = _iterator17.next();
              if (_i22.done) break;
              _ref24 = _i22.value;
            }

            var _e15 = _ref24;
            this.delete(_e15);
          }
        }

        return e;
      };

      _proto88.delete = function _delete(e) {
        if (this.getPrecedents(e).length) throw new Error("Unable to remove non-root node: " + e);
        this.graph.delete(e);
        var t = Array.from(this.graph.values());

        for (var _i23 = 0, _t13 = t; _i23 < _t13.length; _i23++) {
          var _r15 = _t13[_i23];

          for (var _t14 = _r15.length - 1; _t14 >= 0; _t14 -= 1) {
            _r15[_t14] === e && _r15.splice(_t14, 1);
          }
        }
      };

      _proto88.findRootNodes = function findRootNodes() {
        var e = Array.from(this.graph.keys()),
            t = [];

        for (var _i24 = 0, _e16 = e; _i24 < _e16.length; _i24++) {
          var _r16 = _e16[_i24];
          this.hasPrecedents(_r16) || t.push(_r16);
        }

        return t;
      };

      _proto88.getPrecedents = function getPrecedents(e) {
        var t = this.graph.get(e);
        if (!t) throw new Error("Unknown node: " + e);
        return t;
      };

      _proto88.hasNodes = function hasNodes() {
        return this.graph.size > 0;
      };

      _proto88.hasPrecedents = function hasPrecedents(e) {
        return this.getPrecedents(e).length > 0;
      };

      _proto88.link = function link(e, t) {
        this.register(e), this.register(t);
        var r = this.graph.get(t);
        return r && !r.includes(e) && r.push(e), this;
      };

      _proto88.register = function register(e) {
        return this.graph.has(e) || this.graph.set(e, []), this;
      };

      _proto88.visit = function visit(e, t, r) {
        var o = t[r];
        if ("visiting" === o) throw new Error("Detected cycle involving node: " + r);
        if (o) return;
        t[r] = "visiting";
        var n = this.getPrecedents(r);

        for (var _iterator18 = n, _isArray18 = Array.isArray(_iterator18), _i25 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
          var _ref25;

          if (_isArray18) {
            if (_i25 >= _iterator18.length) break;
            _ref25 = _iterator18[_i25++];
          } else {
            _i25 = _iterator18.next();
            if (_i25.done) break;
            _ref25 = _i25.value;
          }

          var _r17 = _ref25;
          this.visit(e, t, _r17);
        }

        t[r] = "ok", e.push(r);
      };

      return n;
    }();

    n = o([r(0).injectable()], n), t.LevelledTopologicalSorter = n;
  }, function (e, t, r) {
    var o,
        n = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        i = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        a = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = r(0),
        c = r(1),
        d = r(231);

    var l =
    /*#__PURE__*/
    function () {
      function l(e) {
        this.levelledTopologicalSorter = e;
      }

      var _proto89 = l.prototype;

      _proto89.build = function build(e) {
        var t = Object.keys(e),
            r = this.buildNodeTransformersRelationEdges(t, e);

        for (var _iterator19 = r, _isArray19 = Array.isArray(_iterator19), _i26 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
          var _ref26;

          if (_isArray19) {
            if (_i26 >= _iterator19.length) break;
            _ref26 = _iterator19[_i26++];
          } else {
            _i26 = _iterator19.next();
            if (_i26.done) break;
            _ref26 = _i26.value;
          }

          var _ref27 = _ref26,
              _e17 = _ref27[0],
              _t15 = _ref27[1];
          this.levelledTopologicalSorter.add(_e17, _t15);
        }

        return this.levelledTopologicalSorter.sortByGroups();
      };

      _proto89.buildNodeTransformersRelationEdges = function buildNodeTransformersRelationEdges(e, t) {
        var r = [];

        for (var _iterator20 = e, _isArray20 = Array.isArray(_iterator20), _i27 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
          var _ref28;

          if (_isArray20) {
            if (_i27 >= _iterator20.length) break;
            _ref28 = _iterator20[_i27++];
          } else {
            _i27 = _iterator20.next();
            if (_i27.done) break;
            _ref28 = _i27.value;
          }

          var _o52 = _ref28;
          var _e18 = t[_o52].runAfter;

          if (_e18 && _e18.length) {
            for (var _iterator21 = _e18, _isArray21 = Array.isArray(_iterator21), _i28 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
              var _ref29;

              if (_isArray21) {
                if (_i28 >= _iterator21.length) break;
                _ref29 = _iterator21[_i28++];
              } else {
                _i28 = _iterator21.next();
                if (_i28.done) break;
                _ref29 = _i28.value;
              }

              var _n6 = _ref29;
              void 0 === t[_n6] ? r.push([_o52, null]) : r.push([_n6, _o52]);
            }
          } else r.push([_o52, null]);
        }

        return r;
      };

      return l;
    }();

    l = n([s.injectable(), a(0, s.inject(c.ServiceIdentifiers.ILevelledTopologicalSorter)), i("design:paramtypes", ["function" == typeof (o = void 0 !== d.ILevelledTopologicalSorter && d.ILevelledTopologicalSorter) ? o : Object])], l), t.NodeTransformerNamesGroupsBuilder = l;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    var _o53,
        n,
        i,
        a,
        s,
        c,
        d = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        l = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        f = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        u = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var p = r(0),
        m = r(1),
        g = u(r(47)),
        y = r(233),
        h = r(234),
        b = r(2),
        N = r(3),
        I = r(59),
        v = r(235),
        S = r(24),
        O = r(10),
        C = r(44),
        j = r(57),
        _ = r(4),
        R = r(26);

    var F = _o53 =
    /*#__PURE__*/
    function () {
      function o(e, t, r, _o54, n) {
        this.transformersRunner = e, this.randomGenerator = t, this.obfuscatedCodeFactory = r, this.logger = _o54, this.options = n;
      }

      var _proto90 = o.prototype;

      _proto90.obfuscate = function obfuscate(e) {
        var t = Date.now();
        this.logger.info(v.LoggingMessage.Version, R.Utils.buildVersionMessage("0.25.0", 1582684742582)), this.logger.info(v.LoggingMessage.ObfuscationStarted), this.logger.info(v.LoggingMessage.RandomGeneratorSeed, this.randomGenerator.getInputSeed());
        var r = this.parseCode(e),
            o = this.transformAstTree(r),
            n = this.generateCode(e, o),
            i = (Date.now() - t) / 1e3;
        return this.logger.success(v.LoggingMessage.ObfuscationCompleted, i), this.getObfuscatedCode(n);
      };

      _proto90.parseCode = function parseCode(e) {
        return j.ASTParserFacade.parse(e, _o53.parseOptions);
      };

      _proto90.transformAstTree = function transformAstTree(e) {
        return e = this.runTransformationStage(e, O.TransformationStage.Initializing), !_.NodeGuards.isProgramNode(e) || e.body.length || e.leadingComments || e.trailingComments ? (e = this.runTransformationStage(e, O.TransformationStage.Preparing), this.options.deadCodeInjection && (e = this.runTransformationStage(e, O.TransformationStage.DeadCodeInjection)), this.options.controlFlowFlattening && (e = this.runTransformationStage(e, O.TransformationStage.ControlFlowFlattening)), e = this.runTransformationStage(e, O.TransformationStage.Converting), e = this.runTransformationStage(e, O.TransformationStage.Obfuscating), e = this.runTransformationStage(e, O.TransformationStage.Finalizing)) : (this.logger.warn(v.LoggingMessage.EmptySourceCode), e);
      };

      _proto90.generateCode = function generateCode(e, t) {
        var r = Object.assign({}, _o53.escodegenParams);
        this.options.sourceMap && (r.sourceMap = this.options.inputFileName || "sourceMap", r.sourceContent = e);
        var n = g.generate(t, Object.assign(Object.assign({}, r), {
          format: {
            compact: this.options.compact
          }
        }));
        return n.map = n.map ? n.map.toString() : "", n;
      };

      _proto90.getObfuscatedCode = function getObfuscatedCode(e) {
        return this.obfuscatedCodeFactory(e.code, e.map);
      };

      _proto90.runTransformationStage = function runTransformationStage(e, t) {
        return this.logger.info(v.LoggingMessage.TransformationStage, t), this.transformersRunner.transform(e, _o53.transformersList, t);
      };

      return o;
    }();

    F.parseOptions = {
      ecmaVersion: C.ecmaVersion,
      allowHashBang: !0,
      allowImportExportEverywhere: !0,
      allowReturnOutsideFunction: !0,
      locations: !0,
      ranges: !0
    }, F.escodegenParams = {
      comment: !0,
      verbatim: "x-verbatim-property",
      sourceMapWithCode: !0
    }, F.transformersList = [S.NodeTransformer.BlockStatementControlFlowTransformer, S.NodeTransformer.CommentsTransformer, S.NodeTransformer.CustomCodeHelpersTransformer, S.NodeTransformer.DeadCodeInjectionTransformer, S.NodeTransformer.EvalCallExpressionTransformer, S.NodeTransformer.FunctionControlFlowTransformer, S.NodeTransformer.LabeledStatementTransformer, S.NodeTransformer.LiteralTransformer, S.NodeTransformer.MemberExpressionTransformer, S.NodeTransformer.MetadataTransformer, S.NodeTransformer.MethodDefinitionTransformer, S.NodeTransformer.ObfuscatingGuardsTransformer, S.NodeTransformer.ObjectExpressionKeysTransformer, S.NodeTransformer.ObjectExpressionTransformer, S.NodeTransformer.ParentificationTransformer, S.NodeTransformer.ScopeIdentifiersTransformer, S.NodeTransformer.SplitStringTransformer, S.NodeTransformer.TemplateLiteralTransformer, S.NodeTransformer.VariablePreserveTransformer], F = _o53 = d([p.injectable(), f(0, p.inject(m.ServiceIdentifiers.ITransformersRunner)), f(1, p.inject(m.ServiceIdentifiers.IRandomGenerator)), f(2, p.inject(m.ServiceIdentifiers.Factory__IObfuscatedCode)), f(3, p.inject(m.ServiceIdentifiers.ILogger)), f(4, p.inject(m.ServiceIdentifiers.IOptions)), l("design:paramtypes", ["function" == typeof (n = void 0 !== I.ITransformersRunner && I.ITransformersRunner) ? n : Object, "function" == typeof (i = void 0 !== N.IRandomGenerator && N.IRandomGenerator) ? i : Object, "function" == typeof (a = void 0 !== y.TObfuscatedCodeFactory && y.TObfuscatedCodeFactory) ? a : Object, "function" == typeof (s = void 0 !== h.ILogger && h.ILogger) ? s : Object, "function" == typeof (c = void 0 !== b.IOptions && b.IOptions) ? c : Object])], F), t.JavaScriptObfuscator = F;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.EmptySourceCode = "Empty source code. Obfuscation canceled...", e.ObfuscationCompleted = "Obfuscation completed. Total time: %s sec.", e.ObfuscationStarted = "Obfuscation started...", e.RandomGeneratorSeed = "Random generator seed: %s...", e.TransformationStage = "Transformation stage: %s...", e.Version = "Version: %s";
    }(t.LoggingMessage || (t.LoggingMessage = {}));
  }, function (e, t, r) {
    var o = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        n = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r(0),
        a = n(r(237));
    i.decorate(i.injectable(), a.default);

    var s =
    /*#__PURE__*/
    function (_a$default) {
      _inheritsLoose(s, _a$default);

      function s() {
        return _a$default.apply(this, arguments) || this;
      }

      return s;
    }(a.default);

    s = o([i.injectable()], s), t.ObfuscationEventEmitter = s;
  }, function (e, t) {
    e.exports = require("eventemitter3");
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = r(0),
        d = r(1),
        l = r(49),
        f = r(7),
        u = r(34),
        p = r(2);

    var m =
    /*#__PURE__*/
    function () {
      function m(e, t) {
        this.cryptUtils = e, this.options = t;
      }

      var _proto91 = m.prototype;

      _proto91.initialize = function initialize(e, t) {
        this.obfuscatedCode = e, this.sourceMap = t;
      };

      _proto91.getObfuscatedCode = function getObfuscatedCode() {
        return this.correctObfuscatedCode();
      };

      _proto91.getSourceMap = function getSourceMap() {
        return this.sourceMap;
      };

      _proto91.toString = function toString() {
        return this.obfuscatedCode;
      };

      _proto91.correctObfuscatedCode = function correctObfuscatedCode() {
        if (!this.sourceMap) return this.obfuscatedCode;
        var e = this.options.sourceMapBaseUrl + this.options.sourceMapFileName;
        var t = "//# sourceMappingURL=";

        switch (this.options.sourceMapMode) {
          case u.SourceMapMode.Inline:
            t += "data:application/json;base64," + this.cryptUtils.btoa(this.sourceMap);
            break;

          case u.SourceMapMode.Separate:
          default:
            if (!e) return this.obfuscatedCode;
            t += e;
        }

        return this.obfuscatedCode + "\n" + t;
      };

      return m;
    }();

    i([f.initializable(), a("design:type", String)], m.prototype, "obfuscatedCode", void 0), i([f.initializable(), a("design:type", String)], m.prototype, "sourceMap", void 0), m = i([c.injectable(), s(0, c.inject(d.ServiceIdentifiers.ICryptUtils)), s(1, c.inject(d.ServiceIdentifiers.IOptions)), a("design:paramtypes", ["function" == typeof (o = void 0 !== l.ICryptUtils && l.ICryptUtils) ? o : Object, "function" == typeof (n = void 0 !== p.IOptions && p.IOptions) ? n : Object])], m), t.ObfuscatedCode = m;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SourceCode =
    /*#__PURE__*/
    function () {
      function _class4(e, t) {
        this.sourceCode = e, this.sourceMap = t;
      }

      var _proto92 = _class4.prototype;

      _proto92.getSourceCode = function getSourceCode() {
        return this.sourceCode;
      };

      _proto92.getSourceMap = function getSourceMap() {
        return this.sourceMap;
      };

      _proto92.toString = function toString() {
        return this.sourceCode;
      };

      return _class4;
    }();
  }, function (e, t, r) {
    var o,
        n,
        i = this && this.__decorate || function (e, t, r, o) {
      var n,
          i = arguments.length,
          a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o);else for (var s = e.length - 1; s >= 0; s--) {
        (n = e[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
      }
      return i > 3 && a && Object.defineProperty(t, r, a), a;
    },
        a = this && this.__metadata || function (e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
        s = this && this.__param || function (e, t) {
      return function (r, o) {
        t(r, o, e);
      };
    },
        c = this && this.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t.default = e, t;
    };

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = r(0),
        l = r(1),
        f = c(r(12)),
        u = r(241),
        p = r(242),
        m = r(243),
        g = r(4),
        y = r(18);

    var h =
    /*#__PURE__*/
    function () {
      function h(e, t) {
        this.cachedNodeTransformersData = new Map(), this.nodeTransformerFactory = e, this.nodeTransformerNamesGroupsBuilder = t;
      }

      var _proto93 = h.prototype;

      _proto93.transform = function transform(e, t, r) {
        var _this$cachedNodeTrans;

        if (!t.length) return e;
        var o, n;
        this.cachedNodeTransformersData.has(t) ? (_this$cachedNodeTrans = this.cachedNodeTransformersData.get(t), o = _this$cachedNodeTrans[0], n = _this$cachedNodeTrans[1], _this$cachedNodeTrans) : (o = this.buildNormalizedNodeTransformers(t), n = this.nodeTransformerNamesGroupsBuilder.build(o), this.cachedNodeTransformersData.set(t, [o, n]));

        for (var _iterator22 = n, _isArray22 = Array.isArray(_iterator22), _i29 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
          var _ref30;

          if (_isArray22) {
            if (_i29 >= _iterator22.length) break;
            _ref30 = _iterator22[_i29++];
          } else {
            _i29 = _iterator22.next();
            if (_i29.done) break;
            _ref30 = _i29.value;
          }

          var _t16 = _ref30;
          var _n7 = [],
              _i30 = [];

          for (var _iterator23 = _t16, _isArray23 = Array.isArray(_iterator23), _i31 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
            var _ref31;

            if (_isArray23) {
              if (_i31 >= _iterator23.length) break;
              _ref31 = _iterator23[_i31++];
            } else {
              _i31 = _iterator23.next();
              if (_i31.done) break;
              _ref31 = _i31.value;
            }

            var _e19 = _ref31;

            var _t17 = o[_e19].getVisitor(r);

            _t17 && (_t17.enter && _n7.push({
              enter: _t17.enter
            }), _t17.leave && _i30.push({
              leave: _t17.leave
            }));
          }

          (_n7.length || _i30.length) && f.replace(e, {
            enter: this.mergeVisitorsForDirection(_n7, m.VisitorDirection.Enter),
            leave: this.mergeVisitorsForDirection(_i30, m.VisitorDirection.Leave)
          });
        }

        return e;
      };

      _proto93.buildNormalizedNodeTransformers = function buildNormalizedNodeTransformers(e) {
        var _this70 = this;

        return e.reduce(function (e, t) {
          var _Object$assign;

          return Object.assign(Object.assign({}, e), (_Object$assign = {}, _Object$assign[t] = _this70.nodeTransformerFactory(t), _Object$assign));
        }, {});
      };

      _proto93.mergeVisitorsForDirection = function mergeVisitorsForDirection(e, t) {
        var r = e.length;
        return r ? function (o, n) {
          if (y.NodeMetadata.isIgnoredNode(o)) return f.VisitorOption.Skip;

          for (var _i32 = 0; _i32 < r; _i32++) {
            var _r18 = e[_i32][t];
            if (!_r18) continue;

            var _a = _r18(o, n);

            _a && g.NodeGuards.isNode(_a) && (o = _a);
          }

          return o;
        } : function (e, t) {
          return e;
        };
      };

      return h;
    }();

    h = i([d.injectable(), s(0, d.inject(l.ServiceIdentifiers.Factory__INodeTransformer)), s(1, d.inject(l.ServiceIdentifiers.INodeTransformerNamesGroupsBuilder)), a("design:paramtypes", ["function" == typeof (o = void 0 !== u.TNodeTransformerFactory && u.TNodeTransformerFactory) ? o : Object, "function" == typeof (n = void 0 !== p.INodeTransformerNamesGroupsBuilder && p.INodeTransformerNamesGroupsBuilder) ? n : Object])], h), t.TransformersRunner = h;
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), function (e) {
      e.Enter = "enter", e.Leave = "leave";
    }(t.VisitorDirection || (t.VisitorDirection = {}));
  },,,, function (e, t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = r(53);
    e.exports = o.JavaScriptObfuscator;
  }]);
});