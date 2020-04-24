Translation behavior for each element.

## {shared}

Attributes shared by multiple elements. Specifies default actions.

**Attribute**

| Name      | Description | Action           |
| --------- | ----------- | ---------------- |
| guiclass  | ?           | Ignore.          |
| testclass | ?           | Ignore.          |
| testname  | Human name. | Ignore.          |
| enabled   | Boolean.    | Skip if `false`. |

**Property**

| Name     | Type   | Description        | Action  |
| -------- | ------ | ------------------ | ------- |
| comments | string | Freeform comments. | Ignore. |

## {variable}

An `elementProp` node representing a variable.

**Attribute**

| Name        | Description                  | Action                              |
| ----------- | ---------------------------- | ----------------------------------- |
| name        | Name.                        | Ignore. Name property used instead. |
| elementType | Seemingly always `Argument`. | Ignore.                             |

**Property**

| Name     | Type   | Description                     | Action                                   |
| -------- | ------ | ------------------------------- | ---------------------------------------- |
| name     | string | Name.                           | Encode to valid string. Render as name.  |
| value    | string | Value.                          | Encode to valid string. Render as value. |
| desc     | string | Human description. Single line. | Render as comment.                       |
| metadata | string | Seemingly always `=`.           | Ignore.                                  |

## {variables}

A `collectionProp` node representing a set of variables.

**Attribute**

| Name | Description                             | Action  |
| ---- | --------------------------------------- | ------- |
| name | Seemingly always `Arguments.arguments`. | Ignore. |

**Child**

| Element     | Description | Action              |
| ----------- | ----------- | ------------------- |
| elementProp | A variable. | Render as variable. |

## BeanShellPostProcessor

**Property**

| Name             | Type   | Description            | Action   |
| ---------------- | ------ | ---------------------- | -------- |
| filename         | string | Script file path.      | Comment. |
| parameters       | string | Script parameters.     | Ignore.  |
| resetInterpreter | bool   | Enable per call reset. | Ignore.  |
| script           | string | Script.                | Comment. |

## BeanShellPreProcessor

**Property**

| Name             | Type   | Description            | Action   |
| ---------------- | ------ | ---------------------- | -------- |
| filename         | string | Script file path.      | Comment. |
| parameters       | string | Script parameters.     | Ignore.  |
| resetInterpreter | bool   | Enable per call reset. | Ignore.  |
| script           | string | Script.                | Comment. |

## BoundaryExtractor

-   Input `as_document` not supported. Uses external software Apache Tika.
-   Input `message` not supported. Not exposed by k6.

**Property**

| Name                | Type   | Description           | Action            |
| ------------------- | ------ | --------------------- | ----------------- |
| default             | string | Default value.        | Default value.    |
| default_empty_value | bool   | Default to clear.     | Default to clear. |
| lboundary           | string | Left boundary.        | Left boundary.    |
| match_number        | string | Match index. 1 based. | Match index.      |
| rboundary           | string | Right boundary.       | Right boundary.   |
| refname             | string | Output variable.      | Output variable.  |
| scope               | string | Sample set.           | Ignore.           |
| useHeaders          | string | Sample component.     | Sample component. |

## ConstantDelay

**Property**

| Name     | Type   | Description         | Action   |
| -------- | ------ | ------------------- | -------- |
| comments | string | Freeform comments.  | Comment. |
| delay    | string | Delay milliseconds. | Delay.   |

## CookieManager

**Property**

| Name               | Type       | Description       | Action                     |
| ------------------ | ---------- | ----------------- | -------------------------- |
| cookies            | collection | A priori cookies. | Add to initial cookie jar. |
| clearEachIteration | bool       | ?                 | Ignore.                    |
| policy             | string     | ?                 | Ignore.                    |

## CSVDataSet

**Property**

| Name            | Type   | Description           | Action               |
| --------------- | ------ | --------------------- | -------------------- |
| delimiter       | string | CSV delimiter.        | CSV delimiter.       |
| fileEncoding    | string | Character encoding.   | Character encoding.  |
| filename        | string | CSV file path.        | CSV file path.       |
| ignoreFirstLine | bool   | Ignore first line.    | Ignore first line.   |
| quotedData      | bool   | Enable data quoting.  | Enable data quoting. |
| recycle         | bool   | Loop file.            | Loop file.           |
| shareMode       | string | Cross thread sharing. | Require `all`.       |
| stopThread      | bool   | Stop thread on EOF.   | Exception.           |
| variableNames   | string | Comma separated.      | Variable names.      |

## DNSCacheManager

**Property**

| Name               | Type       | Description        | Action          |
| ------------------ | ---------- | ------------------ | --------------- |
| servers            | collection | ?                  | Ignore.         |
| clearEachIteration | bool       | ?                  | Ignore.         |
| isCustomResolver   | bool       | ?                  | Ignore.         |
| hosts              | collection | Static host table. | Option `hosts`. |

## DurationAssertion

**Attribute**

| Name     | Description | Action      |
| -------- | ----------- | ----------- |
| testname | Human name. | Check text. |

**Property**

| Name     | Type   | Description         | Action                      |
| -------- | ------ | ------------------- | --------------------------- |
| comments | string | Freeform comments   | Check text.                 |
| duration | string | Max duration in ms. | Max `res.timings.duration`. |

## ForeachController

**Property**

| Name         | Type   | Description             | Action                  |
| ------------ | ------ | ----------------------- | ----------------------- |
| endIndex     | string | End index.              | End index.              |
| inputVal     | string | Input variable base.    | Input variable base.    |
| returnVal    | string | Output variable.        | Output variable.        |
| startIndex   | string | Start index.            | Start index.            |
| useSeparator | bool   | Enable input separator. | Enable input separator. |

## GenericController

Called Simple Controller in docs.

No attributes or properties.

## hashTree

No attributes or properties.

## HtmlExtractor

**Property**

| Name                | Type   | Description          | Action            |
| ------------------- | ------ | -------------------- | ----------------- |
| attribute           | string | HTML attribute.      | HTML attribute.   |
| default             | string | Default value.       | Default value.    |
| default_empty_value | bool   | Default to clear.    | Default to clear. |
| expr                | string | CSS selector.        | CSS selector.     |
| extractor_impl      | string | CSS selector engine. | Ignore.           |
| match_number        | string | Match index.         | Match index.      |
| refname             | string | Output variable.     | Output variable.  |
| scope               | string | Sample set.          | Ignore.           |

## HTTPSamplerProxy

**Property**

| Name                         | Type    | Description                     | Action                      |
| ---------------------------- | ------- | ------------------------------- | --------------------------- |
| Arguments                    | element | Body.                           | Body.                       |
| auto_redirects               | bool    | Redirect without logging.       | Nonzero `redirects`.        |
| BROWSER_COMPATIBLE_MULTIPART | bool    | ?                               | Ignore.                     |
| comments                     | string  | Freeform comments.              | Comment.                    |
| concurrentDwn                | bool    | Download resources with pool.   | Exception.                  |
| concurrentPool               | string  | Resource download pool size.    | Ignore.                     |
| connect_timeout              | string  | Connect timeout.                | Ignore.                     |
| contentEncoding              | string  | Content encoding.               | `Content-Encoding` header.  |
| DO_MULTIPART_POST            | bool    | ?                               | Ignore.                     |
| domain                       | string  | Domain name.                    | Request URI domain name.    |
| embedded_url_re              | string  | Constrain referenced resources. | Exception.                  |
| follow_redirects             | bool    | Redirect with logging.          | Exception.                  |
| image_parser                 | bool    | ?                               | Ignore.                     |
| implementation               | string  | Client implementation.          | Ignore.                     |
| ipSource                     | string  | Sending address.                | Ignore.                     |
| ipSourceType                 | int     | Sending address type.           | Ignore.                     |
| md5                          | bool    | ?                               | Exception.                  |
| method                       | string  | Method.                         | Request method.             |
| path                         | string  | Path.                           | Request URI path.           |
| postBodyRaw                  | bool    | Raw body specified.             | Interpret body as raw text. |
| port                         | string  | Port.                           | Request port.               |
| protocol                     | string  | Protocol.                       | Request URI protocol.       |
| proxyHost                    | string  | Proxy hostname.                 | Ignore.                     |
| proxyPass                    | string  | Proxy password.                 | Ignore.                     |
| proxyPort                    | string  | Proxy port.                     | Ignore.                     |
| proxyUser                    | string  | Proxy username.                 | Ignore.                     |
| response_timeout             | string  | Response timeout ms.            | Request timeout.            |
| use_keepalive                | bool    | Reuse HTTP connections.         | Ignore.                     |

## IfController

**Property**

| Name          | Type   | Description                  | Action                |
| ------------- | ------ | ---------------------------- | --------------------- |
| comments      | string | Freeform comments.           | Comment.              |
| condition     | string | Condition formula.           | Render to JavaScript. |
| evaluateAll   | bool   | Check for each child.        | ?                     |
| useExpression | bool   | Condition single expression. | ?                     |

## InterleaveControl

**Property**

| Name           | Type | Description                 | Action                |
| -------------- | ---- | --------------------------- | --------------------- |
| accrossThreads | bool | Interleave across thraeds.  | Exception.            |
| style          | int  | Bitfield. Interleave style. | Exception on limit 1. |

## jmeterTestPlan

**Attribute**

| Name       | Description     | Action  |
| ---------- | --------------- | ------- |
| version    | Version string. | Ignore. |
| properties | Version string. | Ignore. |
| jmeter     | Version string. | Ignore. |

## JSONPathAssertion

-   Regular expression test requires Perl 5.

**Attribute**

| Name     | Description | Action      |
| -------- | ----------- | ----------- |
| testname | Human name. | Check text. |

**Property**

| Name           | Type   | Description                 | Action                  |
| -------------- | ------ | --------------------------- | ----------------------- |
| comments       | string | Freeform comments.          | Check text.             |
| JSON_PATH      | string | JSONPath code.              | Path specification.     |
| EXPECTED_VALUE | string | Test string.                | Value specification.    |
| JSONVALIDATION | bool   | Seemingly unused.           | Ignore.                 |
| EXPECT_NULL    | bool   | Test for null.              | Enable test for null.   |
| INVERT         | bool   | Negate test.                | Enable result negation. |
| ISREGEX        | bool   | Use test string as regex.   | Enable regex testing.   |
| INPUT_FORMAT   | string | Input format: `JSON` `YAML` | Input interpretation.   |

## JSONPathExtractor

**Property**

| Name         | Type   | Description      | Action           |
| ------------ | ------ | ---------------- | ---------------- |
| DEFAULT      | string | Default value.   | Default value.   |
| INPUT_FORMAT | string | Input format.    | Input format.    |
| JSONPATH     | string | Query.           | Query.           |
| SUBJECT      | string | Input.           | Input.           |
| VAR          | string | Output variable. | Output variable. |
| VARIABLE     | string | Input variable.  | Input variable.  |

## JSONPostProcessor

**Property**

| Name           | Type   | Description             | Action                  |
| -------------- | ------ | ----------------------- | ----------------------- |
| compute_concat | bool   | Enable output combined. | Enable output combined. |
| defaultValuse  | string | Default values.         | Default values.         |
| referenceNames | string | Variable names.         | Variable names.         |
| jsonPathExprs  | string | JSONPath expressions.   | JSONPath expressions.   |
| match_numbers  | string | Match selections.       | Match selections.       |
| scope          | string | Sample set.             | Ignore.                 |

## JSR223PostProcessor

**Property**

| Name           | Type   | Description              | Action   |
| -------------- | ------ | ------------------------ | -------- |
| cacheKey       | string | Boolean. Enable caching. | Ignore.  |
| filename       | string | Script file path.        | Comment. |
| parameters     | string | Script parameters.       | Ignore.  |
| script         | string | Script.                  | Comment. |
| scriptLanguage | string | Script language.         | Comment. |

## JSR223PreProcessor

**Property**

| Name           | Type   | Description              | Action   |
| -------------- | ------ | ------------------------ | -------- |
| cacheKey       | string | Boolean. Enable caching. | Ignore.  |
| filename       | string | Script file path.        | Comment. |
| parameters     | string | Script parameters.       | Ignore.  |
| script         | string | Script.                  | Comment. |
| scriptLanguage | string | Script language.         | Comment. |

## LoopController

**Property**

| Name             | Type | Description                       | Action           |
| ---------------- | ---- | --------------------------------- | ---------------- |
| continue_forever | bool | Loop forever.                     | Loop forever.    |
| loops            | int  | Iteration count. -1 for infinite. | Iteration count. |

## OnceOnlyController

No attributes or properties.

## PostThreadGroup

**Property**

| Name            | Type    | Description                | Action                     |
| --------------- | ------- | -------------------------- | -------------------------- |
| comments        | string  | Freeform comments.         | Comment in teardown logic. |
| on_sample_error | string  | Sample error response.     | Sample error response.     |
| main_controller | element | Iteration limiting.        | Iteration limit.           |
| num_threads     | string  | Thread count.              | ?                          |
| ramp_time       | string  | Ramp time to thread count. | ?                          |
| scheduler       | bool    | ?                          | ?                          |
| duration        | string  | ?                          | ?                          |
| delay           | string  | ?                          | ?                          |
| delayedStart    | bool    | ?                          | ?                          |

## RandomController

**Property**

| Name  | Type | Description                | Action                |
| ----- | ---- | -------------------------- | --------------------- |
| style | int  | Bitfield. Execution style. | Exception on limit 1. |

## RegexExtractor

-   Input `as_document` not supported. Uses external software Apache Tika.
-   Input `message` not supported. Not exposed by k6.
-   Uses JavaScript `RegExp`. Some PCRE features not supported.

**Property**

| Name                | Type   | Description           | Action              |
| ------------------- | ------ | --------------------- | ------------------- |
| default             | string | Default value.        | Default value.      |
| default_empty_value | bool   | Default to clear.     | Default to clear.   |
| match_number        | string | Match index. 1 based. | Match index.        |
| refname             | string | Output variable.      | Output variable.    |
| regex               | string | Regular expression.   | Regular expression. |
| scope               | string | Sample set.           | Ignore.             |
| template            | string | ?                     | ?                   |
| useHeaders          | string | Sample component.     | Sample component.   |

## ResponseAssertion

-   Regular expression features require Perl 5.
-   Operand `response_data_as_document` not supported. Uses external
    software Apache Tika.
-   Operand `response_message` not supported. Not exposed by k6.

**Attribute**

| Name     | Description | Action      |
| -------- | ----------- | ----------- |
| testname | Human name. | Check text. |

**Property**

| Name           | Type       | Description                         | Action              |
| -------------- | ---------- | ----------------------------------- | ------------------- |
| comments       | string     | Freeform comments.                  | Check text.         |
| test_strings   | collection | Test patterns.                      | 1 check per line.   |
| custom_message | string     | Failure message.                    | Ignore.             |
| test_field     | string     | Operand.                            | Field in check.     |
| assume_success | bool       | Force initialize status to success. | Ignore.             |
| test_type      | int        | Operation.                          | Operators in check. |

## ResultStatusActionHandler

**Property**

| Name   | Type | Description     | Action          |
| ------ | ---- | --------------- | --------------- |
| action | int  | Failure action. | Failure action. |

## RunTime

**Property**

| Name    | Type   | Description             | Action       |
| ------- | ------ | ----------------------- | ------------ |
| seconds | string | Max runtime in seconds. | Max runtime. |

## SetupThreadGroup

**Property**

| Name            | Type    | Description                | Action                  |
| --------------- | ------- | -------------------------- | ----------------------- |
| comments        | string  | Freeform comments.         | Comment in setup logic. |
| on_sample_error | string  | Sample error response.     | Sample error response.  |
| main_controller | element | Iteration limiting.        | Iteration limit.        |
| num_threads     | string  | Thread count.              | ?                       |
| ramp_time       | string  | Ramp time to thread count. | ?                       |
| scheduler       | bool    | ?                          | ?                       |
| duration        | string  | ?                          | ?                       |
| delay           | string  | ?                          | ?                       |
| delayedStart    | bool    | ?                          | ?                       |

## SteppingThreadGroup

-   Translates to `stages` option with ramp ups for each group. Default
    `SteppingThreadGroup` behavior seems to have all threads in a group starting
    at once, so this is an approximation.
-   Stepped thread stopping not translated. No obvious counterpart in k6.

**Property**

| Name                  | Type    | Description            | Action                 |
| --------------------- | ------- | ---------------------- | ---------------------- |
| comments              | string  | Freeform comments.     | Comment in prolog.     |
| on_sample_error       | string  | Sample error response. | Sample error response. |
| num_threads           | string  | Peak threads.          | Peak threads.          |
| Threads initial delay | string  | Presleep time.         | Presleep.              |
| Start users count     | string  | Start step threads.    | Start step threads.    |
| Start users period    | string  | Start step interval    | Start step interval.   |
| Stop users count      | string  | End step threads.      | End step threds.       |
| Stop users period     | string  | End step interval.     | End step interval.     |
| flighttime            | string  | Flight time.           | Flight.                |
| main_controller       | element | ?                      | ?                      |
| rampUp                | string  | Start step ramp time.  | Start step ramp time.  |

## TestPlan

**Attribute**

| Name     | Description          | Action   |
| -------- | -------------------- | -------- |
| testname | Human name for test. | Comment. |

**Property**

| Name                   | Type    | Description                  | Action                 |
| ---------------------- | ------- | ---------------------------- | ---------------------- |
| comments               | string  | Contents freeform comments.  | Comment in init logic. |
| functional_mode        | bool    | Enable data saving.          | ?                      |
| tearDown_on_shutdown   | bool    | Run teardown after shutdown. | ?                      |
| serialize_threadgroups | bool    | Serialize thread groups.     | ?                      |
| user_defined_variables | element | Defines variables.           | Variables.             |
| user_define_classpath  | string  | ?                            | Ignore.                |

## ThreadGroup

**Property**

| Name            | Type    | Description                | Action                     |
| --------------- | ------- | -------------------------- | -------------------------- |
| comments        | string  | Freeform comments.         | Comment in VU logic.       |
| on_sample_error | string  | Sample error response.     | Sample error response.     |
| main_controller | element | Iteration limiting.        | Iteration limit.           |
| num_threads     | string  | Thread count.              | Option `stages`, VU count. |
| ramp_time       | string  | Ramp time to thread count. | Option `stages`, duration. |
| scheduler       | bool    | ?                          | ?                          |
| duration        | string  | ?                          | ?                          |
| delay           | string  | ?                          | ?                          |
| delayedStart    | bool    | ?                          | ?                          |

## TransactionController

**Property**

| Name          | Type | Description              | Action                 |
| ------------- | ---- | ------------------------ | ---------------------- |
| includeTimers | bool | Default true. Count all. | Exception if disabled. |
| parent        | bool | Output as parent sample. | Ignore.                |

## WhileController

**Property**

| Name      | Type   | Description        | Action                |
| --------- | ------ | ------------------ | --------------------- |
| comments  | string | Freeform comments. | Comment.              |
| condition | string | Condition formula. | Render to JavaScript. |

## xml

**Attribute**

| Name     | Description         | Action  |
| -------- | ------------------- | ------- |
| version  | XML version string. | Ignore. |
| encoding | Character encoding. | Ignore. |

## XPathAssertion

No equivalent feature. Translate to explanatory comment suggesting 3rd party
software.
