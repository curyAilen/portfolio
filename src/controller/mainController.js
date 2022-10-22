let mainController = {
    main: (req, res) => {
                res.render('inicio', {
                    titulo: 'HOME',
                    css: 'estilo.css',
                })
    },
}

module.exports = mainController;