//Устанавливаем встроенный в Ноду модуль path, который помогает решить вопрос указания пути к папке или файлу
const path = require('path');
//Подключаем плагин для css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//Подключаем плагин для html
const HtmlWebpackPlugin = require('html-webpack-plugin');



//Точка входа в наше приложение
module.exports = {
	entry: {
		//по кусочкам начинаем собирать наш проект
		main: path.resolve(__dirname, 'src', 'index.jsx'),
	},
						   
//описываем то куда проект собирается. По умолчанию output соответсвует папке dist
			output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
 },
	//правило означает, что если мы импортируем что то без расширения, то файл будет знать, если он что то нашел, то использует данные расширенияS
	resolve: {
		extensions: ['.js', '.jsx']
	},
	
	//настраиваем то, как js модули должны собираться. Rules. Каждое правило - это объект
	//webpack будет каждое имя файла прогонять через регулярные выражения. Если true, то будет использовать имя файла для определенного правила
	module: {
		rules: [
			{
				//правило для обработки js и jsx файлов
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				
				},
			},
			{
				//правило для обработки css
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			//отдельное правило для обработки html не нужно. Можно сразу зарегистрировать в разделе плагины
		]
	},
	//регистрируем наш модуль в разделе plugins
	plugins: [
		new ExtractTextPlugin({ filename: 'bundle.css'}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		})
	]
	
	
}