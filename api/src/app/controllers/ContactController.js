const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
    // Listar todos os registros
    async index(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactsRepository.findAll(orderBy);

        response.json(contacts);
    }

    // Obter UM registro
    async show(request, response) {
        const { id } = request.params;
        const contact = await ContactsRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ error: 'Contact not found' });
        }

        response.json(contact);
    }

    // Criar um novo registro
    async store(request, response) {
        const {
            name, email, phone, category_id,
        } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactExists = await ContactsRepository.findByEmail(email);

        if (contactExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }

        const contact = await ContactsRepository.create({
            name, email, phone, category_id,
        });

        response.status(201).json(contact);
    }

    // Editar um novo registro
    async update(request, response) {
        const { id } = request.params;
        const {
            name, email, phone, category_id,
        } = request.body;

        const contactExists = await ContactsRepository.findById(id);
        if (!contactExists) {
            return response.status(400).json({ error: 'Contact not found' });
        }

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contactByEmail = await ContactsRepository.findByEmail(email);
        if (contactByEmail && contactByEmail.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }

        const contact = await ContactsRepository.update(id, {
            name, email, phone, category_id,
        });

        response.json(contact);
    }

    // Deletar um registro
    async delete(request, response) {
        const { id } = request.params;

        await ContactsRepository.delete(id);
        // 204: No Content - sucesso igual a 200 mas sem corpo na requisição
        response.sendStatus(204);
    }
}

// Singleoton
module.exports = new ContactController();
/* Só podemos te ruma instancia dos objetos dentro da aplicação
   logo queremos sempre que a mesma instância seja usada. */

/* Quando o node executar esse código ele vai entender que estamos exportando
   uma instancia e não a classe em si,e ai ele vai gerar essa instancia e salvar
   na memória (cache), e toda vez que precisarmos usar de novo, ele busca ela. */
