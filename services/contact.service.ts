import { ContactRepository } from "@/repositories/contact.repository";

import { ContactDto } from "@/types/contact.type";

export class ContactService {

    static async send(dto: ContactDto) {

        return ContactRepository.send(dto);

    }

}