import { Injectable } from '@nestjs/common';
import { Sprint } from "src/interfaces/sprints";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { SmellSubTypeInterface } from "src/interfaces/smell_sub_type";

@Injectable()
export class SprintsService {

	constructor(
		@InjectModel('Sprint') private sprintModelo: Model<Sprint>,
		@InjectModel('SmellSubType') private smellSubTypeModel: Model<SmellSubTypeInterface>
	) {}

	async obtenerSprints(){
		var data = new this.smellSubTypeModel({'name':'Feature Envy', 'smell_type_id': new Types.ObjectId('5fd86069dfb4d6e2fcc16717')});
		await data.save()

		return await this.sprintModelo.find();
	}

	async reportCumulativeFrequency(){
		var sprints = await this.sprintModelo.find();
		var labels = []
		var values = []
		var suma = 0
		for (let sprint of sprints) {
		  labels.push(sprint.name);
		  suma = suma + sprint.n_smells_to_solve
		  values.push(suma);
		}
		return {
		  'labels': labels,
		  'datasets': [
		    values
		  ]
		}
	}

	async reportBySprint(){
		var sprints = await this.sprintModelo.find();
		var labels = []
		var to_solve = []
		var solved = []
		for (let sprint of sprints) {
		  labels.push(sprint.name);
		  to_solve.push(sprint.n_smells_to_solve)
		  solved.push(sprint.n_smells_solved)
		}
		return {
		  'labels': labels,
		  'datasets': [
		    {
		    	'label': 'Resueltos',
		    	'data': solved
		    },
		    {
		    	'label': 'Por resolver',
		    	'data': to_solve
		    }
		  ]
		}
	}

	async getSmells(){
		return {
			'response': [
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["capacidad de prueba", "reutilización"],
		"main_file": "pandas/core/array_algos/masked_reductions.py",
		"description": "Presenta en la función _sumprod 6 parámetros"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["complejidad", "compresibilidad", "mantenibilidad"],
		"main_file": "pandas/core/array_algos/masked_reductions.py",
		"description": "Las líneas 41 al 53 y las líneas 89 al 101 presentan un conjunto de lógica por condicionales que al menos resalta de manera intermedia en la comprensibilidad"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "5",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/array_algos/replace.py",
		"description": "La función compare_or_regex_search presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Temporary Field",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["reutilización", "complejidad", "mantenibilidad", "compresibilidad"],
		"main_file": "pandas/core/array_algos/replace.py",
		"description": "En las líneas 111 al 126 se presenta una función que puede cambiar de definición según una condicional, además esta es local"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/array_algos/transforms.py",
		"description": "La función shift presenta muchas líneas"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/accessor.py",
		"description": "La función from_spmatrix presenta muchas líneas"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "complejidad", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función  _sparse_array_op presenta muchas líneas, y se muestra variables que se repiten en cada condición"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función  _sparse_array_op un conjunto de condiciones notorias, que a su vez presentan campos que se repiten"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "En las líneas 162 al 169 se presentan 6 argumentos"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "El constructor de la clase SparseArray presentan 8 argumentos"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Large Class",
		"language": "Python",
		"estimate": "6",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "capacidad de prueba", "complejidad", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La clase SparseArray es demasiado grande"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "5",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La líneas 757 al 797 presenta una lógica compleja de condicional"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La líneas 885 al 893 presenta código repetido"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "5",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función _take_with_fill presenta muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función _take_without_fill presenta muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función _concat_same_type presenta muchas líneas de código"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "Las líneas 964 al 976 y las de 985 al 995 presenta estructura repetida"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "3",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["reutilización"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "Las líneas 1248 al 1256 presentan estructura repetida"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función __array_ufunc__ presentan muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "capacidad de prueba"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "Las líneas 1323 al 1325 presenta 5 argumentos"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "53d1622eebb8fc46e90f131a559d32f42babd858",
		"repository": "https://github.com/pandas-dev/pandas",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "pandas/core/arrays/sparse/array.py",
		"description": "La función make_sparse presentan muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "3",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "src/sentry/adoption/manager.py",
		"description": "La función add presenta 6 parámetros"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Dead Code",
		"language": "Python",
		"estimate": "2",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "reutilización"],
		"main_file": "src/sentry/analytics/base.py",
		"description": "La función record_event no esta definida y no se usa"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "3",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "src/sentry/analytics/pubsub.py",
		"description": "El constructor de la clase PubSubAnalytics tiene 6 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "src/sentry/api/bases/group.py",
		"description": "La función de la línea 36 presenta muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "3",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 159 tiene 6 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "3",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 195 tiene 6 parámetros"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 195 presenta una lógica compleja de condicional"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 179 presenta una lógica compleja de condicional"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "5",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 212 tiene 8 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 212 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "165267604b568747069b35be61b5ab9c0732cd91",
		"repository": "https://github.com/getsentry/sentry",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "src/sentry/api/bases/organization.py",
		"description": "La función de la línea 212 presenta una lógica compleja de condicional"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["reutilización"],
		"main_file": "plugins/dbms/access/enumeration.py",
		"description": "Las funciones en este archivo presentan estructura similar"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/access/fingerprint.py",
		"description": "La función de la línea 45 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/access/fingerprint.py",
		"description": "La función de la línea 108 presenta muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/access/fingerprint.py",
		"description": "La función de la línea 150 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/access/fingerprint.py",
		"description": "La función de la línea 150 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/altibase/fingerprint.py",
		"description": "La función de la línea 23 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/altibase/fingerprint.py",
		"description": "La función de la línea 23 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/altibase/fingerprint.py",
		"description": "La función de la línea 60 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/altibase/fingerprint.py",
		"description": "La función de la línea 60 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["reutilización"],
		"main_file": "plugins/dbms/cache/enumeration.py",
		"description": "Las funciones en este archivo presentan estructura similar"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cache/fingerprint.py",
		"description": "La función de la línea 27 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cache/fingerprint.py",
		"description": "La función de la línea 27 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cache/fingerprint.py",
		"description": "La función de la línea 79 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cache/fingerprint.py",
		"description": "La función de la línea 79 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cratedb/fingerprint.py",
		"description": "La función de la línea 23 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cratedb/fingerprint.py",
		"description": "La función de la línea 23 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cratedb/fingerprint.py",
		"description": "La función de la línea 60 presenta muchas líneas de código"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "3",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "plugins/dbms/cratedb/fingerprint.py",
		"description": "La función de la línea 60 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Dispensables",
		"smellSubType": "Duplicate Code",
		"language": "Python",
		"estimate": "5",
		"last_commit": "d9e6e678e8483b5ee0898744bcb65e4cd792fb2d",
		"repository": "https://github.com/sqlmapproject/sqlmap",
		"quality_attribute": ["mantenibilidad", "reutilización"],
		"main_file": "plugins/dbms/cratedb/fingerprint.py",
		"description": "Los archivos fingerprint presentan parecida estructura de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "6",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La función de la línea 140 tiene 9 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "6",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La función de la línea 168 tiene 9 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Primitive Obsession",
		"language": "Python",
		"estimate": "3",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La cadena que agrupa los valores de un arreglo en un paréntesis se repite mucho y se prefiere usar las primitivas que en vez de una función o estructura de datos"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La función de la línea 113 retorna 4 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La función de la línea 96 retorna 4 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "3",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/compat/_inspect.py",
		"description": "La función de la línea 65 retorna 3 parámetros"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "4",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "numpy/core/code_generators/genapi.py",
		"description": "La función de la línea 171 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Object-Orientation Abusers",
		"smellSubType": "Switch Statements",
		"language": "Python",
		"estimate": "6",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "numpy/core/code_generators/genapi.py",
		"description": "La función de la línea 202 presenta una compleja de condicional que huele mal"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Method",
		"language": "Python",
		"estimate": "5",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "mantenibilidad", "complejidad"],
		"main_file": "numpy/core/code_generators/genapi.py",
		"description": "La función de la línea 202 presenta muchas líneas de código"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "4",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/core/code_generators/genapi.py",
		"description": "El constructor de la línea 316 retorna 6 parámetros"
	},
	{
		"smellType": "The Bloaters",
		"smellSubType": "Long Parameter List",
		"language": "Python",
		"estimate": "5",
		"last_commit": "c9f9081fd7156e351f7a30d8e3b75968cc5503c4",
		"repository": "https://github.com/numpy/numpy",
		"quality_attribute": ["compresibilidad", "capacidad de prueba", "reutilización"],
		"main_file": "numpy/core/code_generators/genapi.py",
		"description": "El constructor de la línea 396 retorna 7 parámetros"
	}
]
		}
	}
}
