class homeController {
    index(req, res) {
        res.status(200).json({
            message: "Bem vindo a minha pagina"
        });
    }
}

export default new HomeController()
