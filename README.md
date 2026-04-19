# 🧪 Sistema de Pruebas para Gestión de Entidades

Proyecto web desarrollado en HTML, JavaScript y CSS que implementa un framework de testing para la validación de entidades de base de datos, sus atributos y formularios, sin dependencias externas ni frameworks.

---

## 📋 Tabla de contenidos

- [Descripción](#-descripción)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Entidades incluidas](#-entidades-incluidas)
- [Arquitectura de clases](#-arquitectura-de-clases)
- [Formato de los ficheros de entidad](#-formato-de-los-ficheros-de-entidad)
- [Cómo usar el proyecto](#-cómo-usar-el-proyecto)
- [API de clases](#-api-de-clases)

---

## 📖 Descripción

El sistema permite, para cada entidad registrada en el menú:

1. **Verificar la estructura** de definición de la entidad (atributos, tipos, validaciones).
2. **Ejecutar tests de atributos** (`TestForm`): comprueba que cada valor de prueba produce el resultado esperado al ser validado campo a campo.
3. **Ejecutar tests de formulario completo** (`TestSubmit`): simula el envío del formulario con juegos de datos predefinidos para las acciones `ADD / EDIT / SEARCH / CREATE / UPDATE / DELETE` y verifica que se detectan exactamente los errores esperados antes de cualquier llamada al back-end.

Toda la lógica se ejecuta en el navegador; no se requiere servidor.

---

## 📁 Estructura del proyecto

```
CODIGO/
│
├── index.html                        # Página principal
├── API.html                          # Documentación de clases y diagramas de flujo
├── verify_variables.html             # Utilidad de verificación de variables
│
├── menu_entidades.js                 # Lista de entidades del menú
├── Julio_Datos_AnaAlvarezLopez.js    # Datos de entrega
│
├── css/
│   └── IU.css                        # Hoja de estilos global
│
│── Gestor_Class.js                   # Orquestador principal
├── TestForm_Class.js                 # Tests de atributos
├── TestSubmit_Class.js               # Tests de submit de formulario
├── ValidateFieldsForm_Class.js       # Creación y validación de campos HTML
├── Validations_Class.js              # Reglas de validación atómicas
├── analysis_preparation_Class.js     # Clase de la entidad analysis_preparation (opcional)
│
│   ── Por cada entidad <nombre>:
├── <nombre>_estructura.js            # Definición de atributos y validaciones
├── <nombre>_tests.js                 # Definiciones de test y pruebas de datos
├── <nombre>_TestSubmit.js            # Pruebas de submit
└── <nombre>_Class.js                 # Validaciones personalizadas (si aplica)
```

### Entidades incluidas

| Entidad | Ficheros |
|---|---|
| `analysis_preparation` | `_estructura`, `_tests`, `_TestSubmit`, `_Class` |
| `project` | `_estructura`, `_tests`, `_TestSubmit` |
| `characteristic` | `_estructura`, `_tests`, `_TestSubmit` |

---

## 🏗️ Arquitectura de clases

```
index.html
    └── Gestor_Class.js          (valida ficheros, muestra botones)
            ├── TestForm_Class.js
            │       ├── ValidateFieldsForm_Class.js
            │       ├── Validations_Class.js
            │       └── <entidad>_Class.js  (si existe)
            └── TestSubmit_Class.js
                    └── CheckSubmit()
```

### Descripción de cada clase

| Clase | Fichero | Responsabilidad |
|---|---|---|
| `Gestor` | `Gestor_Class.js` | Valida la existencia de las variables requeridas para una entidad y expone los botones de acción |
| `TestForm` | `TestForm_Class.js` | Analiza estructura, definiciones de test y pruebas; ejecuta validaciones y muestra resultados |
| `TestSubmit` | `TestSubmit_Class.js` | Ejecuta pruebas de submit completas por acción y muestra el detalle de resultados |
| `ValidateFieldsForm` | `ValidateFieldsForm_Class.js` | Crea campos HTML individuales, los rellena con valores de prueba y lanza las validaciones |
| `Validations` | `Validations_Class.js` | Implementa las reglas atómicas de validación (`required`, `integer`, `maxSize`, `minSize`, `date`, etc.) |

---

## 📄 Formato de los ficheros de entidad

### `<nombre>_estructura.js`

Define los atributos de la entidad con sus tipos y reglas de validación:

```js
window.<nombre>_estructura = {
    name: '<nombre>',
    description: 'Descripción de la entidad',
    attributes: [
        {
            name: 'id_project',
            type: 'input',          // 'input' | 'select' | 'textarea' | ...
            label: 'ID del Proyecto',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'integer' },
                { rule: 'maxSize', params: { size: 11 } }
            ]
        },
        // ...
    ]
};
```

### `<nombre>_tests.js`

Contiene dos variables:

**`<nombre>_def_tests`** — array de definiciones de test. Cada elemento es un array de 8 campos:

```
[ entidad, atributo, tipo, num_test, descripcion, accion, resultado_esperado, mensaje_error ]
```

Ejemplo:
```js
window.project_def_tests = [
    ['project', 'id_project', 'input', 1, 'Comprobar tamaño válido de id', 'ADD', true, ''],
    ['project', 'id_project', 'input', 2, 'Comprobar id vacío',            'ADD', 'id_required_KO', 'El ID es requerido'],
    // ...
];
```

**`<nombre>_pruebas`** — array de pruebas de datos. Cada elemento asocia un `num_test` con el valor concreto a introducir en el campo:

```
[ entidad, atributo, num_test, valor ]
```

### `<nombre>_TestSubmit.js`

Array de pruebas de envío completo de formulario. Cada elemento es un array de 5 campos:

```
[ entidad, accion, num_prueba, descripcion, { campo: valor, ... }, resultado_esperado ]
```

`resultado_esperado` es `true` si el submit debe ser válido, o el código de error si debe fallar.

Ejemplo:
```js
window.project_TestSubmit = [
    ['project', 'CREATE', 1, 'Crear proyecto válido',
        { id_project: '789', name_project: 'European Soil Survey Study', ... }, true],
    ['project', 'CREATE', 2, 'Crear sin ID',
        { name_project: 'Soil Characterization Initiative', ... }, 'id_required'],
    // ...
];
```

### `<nombre>_Class.js` *(opcional)*

Solo necesario si la entidad tiene validaciones personalizadas (`personalize: true` en su `_estructura`). Debe implementar métodos con el patrón:

```js
class <nombre> {
    <atributo>_personalized_validation(fieldId) {
        // lógica personalizada
        // devuelve true si válido, o string con código de error
    }
}
```

---

## 🚀 Cómo usar el proyecto

1. **Abrir** `index.html` en un navegador moderno (no se requiere servidor).
2. El **menú lateral** muestra las entidades definidas en `menu_entidades.js`.
3. Hacer clic en una entidad carga la zona de trabajo con dos botones:
   - **Test de Atributos** → abre una ventana con el análisis completo de estructura, definiciones y pruebas de validación campo a campo.
   - **Test de Formulario** → abre una ventana con el resumen de pruebas de submit por acción y el detalle de cada prueba.
4. Consultar la **documentación técnica** de clases y diagramas de flujo en `API.html` (accesible desde el icono de la cabecera).

> ⚠️ Si alguna de las variables requeridas (`_estructura`, `_def_tests`, `_pruebas`, `_TestSubmit`) no existe para la entidad seleccionada, el sistema mostrará un **modal de error** indicando exactamente qué variable falta.

### Añadir una nueva entidad

1. Crear los ficheros `<nombre>_estructura.js`, `<nombre>_tests.js` y `<nombre>_TestSubmit.js` siguiendo los formatos descritos arriba.
2. Incluir los nuevos `<script>` en el `<head>` de `index.html`.
3. Añadir `"<nombre>"` al array `menu_entidades` en `menu_entidades.js`.
4. Si la entidad necesita validaciones personalizadas, crear también `<nombre>_Class.js`.

---

## 📚 API de clases

La documentación completa de cada clase (parámetros de entrada, valores de retorno y diagramas de flujo) está disponible en **`API.html`**, accesible desde el icono de documentación en la cabecera de `index.html`.

Las clases se agrupan en tres categorías:

| Categoría | Clases |
|---|---|
| **Testing** | `Gestor`, `TestForm`, `TestSubmit` |
| **Validaciones** | `Validations`, `ValidateFieldsForm` |
| **Entidades** | `<nombre>` (validaciones personalizadas) |
