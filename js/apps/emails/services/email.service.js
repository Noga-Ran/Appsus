import emailsData from '../services/data/emails.json' assert { type: 'json' }
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_KEY = 'emailsDB'

export const emailService = {
    query,
    remove,
    save,
    get,
}

function query() {
    return emailsData
}

_createEmails()

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
}

function save(email) {
    if (email.id) return storageService.put(EMAIL_KEY, email)
    else return storageService.post(EMAIL_KEY, email)
  }

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
      emails = emailsData
      utilService.saveToStorage(EMAIL_KEY, emails)
    }
    return emails
  }

