const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const path = require('path');
const fs = require('fs');

// Rutas de los archivos de menu:

// Ruta Principal la cual redirecciona a las distintas modalidades:
const menuPrincipalPath = path.join(__dirname, 'Mensajes', 'MenuPrincipal.txt');

//Presencial
const menuPrinPresencialPath = path.join(__dirname, 'Mensajes', 'MenuPrinPresencial.txt');
const menuEstudiantePresencialPath = path.join(__dirname, 'Mensajes', 'MenuEstudiantePresencial.txt');
const menuDocentePresencialPath = path.join(__dirname, 'Mensajes', 'MenuDocentePresencial.txt');
const menuAdminPresencialPath = path.join(__dirname, 'Mensajes', 'MenuAdminPresencial.txt');

//Virtual
const menuPrinVirtualPath = path.join(__dirname, 'Mensajes', 'MenuPrinVirtual.txt');
const menuEstudianteVirtualPath = path.join(__dirname, 'Mensajes', 'MenuEstudianteVirtual.txt');
const menuDocenteVirtualPath = path.join(__dirname, 'Mensajes', 'MenuDocenteVirtual.txt');
const menuAdminVirtualPath = path.join(__dirname, 'Mensajes', 'MenuAdminVirtual.txt');

//Extracurricular
const menuPrinExtracurricularPath = path.join(__dirname, 'Mensajes', 'MenuPrinExtracurricular.txt');
const menuEstudianteExtracurricularPath = path.join(__dirname, 'Mensajes', 'MenuEstudianteExtracurricular.txt');
const menuDocenteExtracurricularPath = path.join(__dirname, 'Mensajes', 'MenuDocenteExtracurricular.txt');
const menuAdminExtracurricularPath = path.join(__dirname, 'Mensajes', 'MenuAdminExtracurricular.txt');

//Construccion
const menuPrinConstruccionPath = path.join(__dirname, 'Mensajes', 'MenuPrinConstruccion.txt');
const menuDocenteConstruccionPath = path.join(__dirname, 'Mensajes', 'MenuDocenteConstruccion.txt');
const menuAdminConstruccionPath = path.join(__dirname, 'Mensajes', 'MenuAdminConstruccion.txt');

const menuPath = path.join(__dirname, 'Mensajes', 'menu.txt');
const menuEstudiantePath = path.join(__dirname, 'Mensajes', 'MenuEstudiante.txt');
const menuDocentePath = path.join(__dirname, 'Mensajes', 'MenuDocente.txt');
const menuAdministrativoPath = path.join(__dirname, 'Mensajes', 'MenuAdministrativo.txt');



// Lectura de menús desde los archivos
const menu = fs.readFileSync(menuPath, 'utf-8');
const menuDocente = fs.readFileSync(menuDocentePath, 'utf-8');
const menuEstudiante = fs.readFileSync(menuEstudiantePath, 'utf-8');
const menuAdministrativo = fs.readFileSync(menuAdministrativoPath, 'utf-8');

const menuPrincipal = fs.readFileSync(menuPrincipalPath, 'utf-8');
const menuPrinPresencial = fs.readFileSync(menuPrinPresencialPath, 'utf-8');
const menuPrinVirtual = fs.readFileSync(menuPrinVirtualPath, 'utf-8');
const menuPrinExtracurricular = fs.readFileSync(menuPrinExtracurricularPath, 'utf-8');
const menuPrinConstruccion = fs.readFileSync(menuPrinConstruccionPath, 'utf-8');

const menuEstudiantePresencial = fs.readFileSync(menuEstudiantePresencialPath, 'utf-8');
const menuDocentePresencial = fs.readFileSync(menuDocentePresencialPath, 'utf-8');
const menuAdminPresencial = fs.readFileSync(menuAdminPresencialPath, 'utf-8');

const menuEstudianteVirtual = fs.readFileSync(menuEstudianteVirtualPath, 'utf-8');
const menuDocenteVirtual = fs.readFileSync(menuDocenteVirtualPath, 'utf-8');
const menuAdminVirtual = fs.readFileSync(menuAdminVirtualPath, 'utf-8');

const menuEstudianteExtracurricular = fs.readFileSync(menuEstudianteExtracurricularPath, 'utf-8');
const menuDocenteExtracurricular = fs.readFileSync(menuDocenteExtracurricularPath, 'utf-8');
const menuAdminExtracurricular = fs.readFileSync(menuAdminExtracurricularPath, 'utf-8');

const menuDocenteConstruccion = fs.readFileSync(menuDocenteConstruccionPath, 'utf-8');
const MenuAdminConstruccion = fs.readFileSync(menuAdminConstruccionPath, 'utf-8');


//--------------------------------------------------------------------------
//------------------------------DOCENTE--------------------------------------------

const opcion1Docente = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion2Docente = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion3Docente = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })




const OP1DocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
const OP2DocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=5QPGvoDW6CM')
    .addAnswer('Este video te guiará paso a paso para *recuperar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3DocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=fD_9iYX-7lo')
    .addAnswer('Este video te guiará paso a paso para *cambiar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP4DocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=rakqsZM5Vh8')
    .addAnswer('Este video te guiará paso a paso para *cambiar datos personales* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP5DocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })





const OP1DocenteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP2DocenteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3DocenteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })





const OP1DocenteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=5QPGvoDW6CM')
    .addAnswer('Este video te guiará paso a paso para *recuperar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP2DocenteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=fD_9iYX-7lo')
    .addAnswer('Este video te guiará paso a paso para *cambiar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3DocenteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=fD_9iYX-7lo')
    .addAnswer('Este video te guiará paso a paso para *cambiar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')



const OP1DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP2DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP4DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP5DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP6DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(' Descarga el 📚 Manual Docente : https://drive.google.com/uc?export=download&id=1-dKrTPyjoaaGap_J1uoWLqxdHmuesvM6 ')

const OP7DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(' Descarga el 📚 Manual Diseño Formativo 2024 :https://drive.google.com/uc?export=download&id=1NjAEkpOj3NX_vtTYf3wNMW1gZ3zOCels ')

const OP8DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(' Descarga el 📚 Manual Diseño Técnico 2024: https://drive.google.com/uc?export=download&id=1FF89V0RMGNygU5lx1Zm7hLkU5nv66OU3')

const OP9DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(' Descarga el 📚 Manual Diseño Gráfico 2024: https://drive.google.com/uc?export=download&id=12qiZCg5LtohhMd2nLlqTWY0oFLioagfM ')

const OP10DocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })



//--------------------------------------------------------------------------
//-------------------------ESTUDIANTE-------------------------------------------------
const opcion1Estudiante = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Extracurricular* , ingresa aquí:(https://virtual.uagrm.edu.bo/extracurricular)')


const opcion2Estudiante = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=n5W0k2ReV4Y)')
    .addAnswer('Este video te guiará paso a paso para poder recuperar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion3Estudiante = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://youtu.be/9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion4Estudiante = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (link para cambiar datos)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu datos.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion5Estudiante = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
// .addAnswer('Nombre Completo // Ci // Registro ',{ delay: 1200 } )    


const OP1EstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Extracurricular* , ingresa aquí:(https://virtual.uagrm.edu.bo/extracurricular)')


const OP2EstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=w5XewnJOopA')
    .addAnswer('Este video te guiará paso a paso para poder recuperar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3EstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=f0xU7HqgRCc')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP4EstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=f0xU7HqgRCc)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu datos.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP5EstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
// .addAnswer('Nombre Completo // Ci // Registro ',{ delay: 1200 } )    




const OP1EstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Extracurricular* , ingresa aquí:(https://virtual.uagrm.edu.bo/extracurricular)')



const OP2EstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=n5W0k2ReV4Y)')
    .addAnswer('Este video te guiará paso a paso para poder recuperar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3EstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://youtu.be/9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP4EstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (link para cambiar datos)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu datos.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP5EstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
// .addAnswer('Nombre Completo // Ci // Registro ',{ delay: 1200 } )    



const OP1EstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Extracurricular* , ingresa aquí:(https://virtual.uagrm.edu.bo/extracurricular)')



const OP2EstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=w5XewnJOopA')
    .addAnswer('Este video te guiará paso a paso para poder recuperar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3EstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=f0xU7HqgRCc')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu contraseña.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')


const OP4EstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=f0xU7HqgRCc)')
    .addAnswer('Este video te guiará paso a paso para poder cambiar tu datos.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP5EstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
// .addAnswer('Nombre Completo // Ci // Registro ',{ delay: 1200 } )    



//----------------------------ADMINISTRATIVO-----------------------------------
//--------------------------------------------------------------------------   



const opcion1Administrativo = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion2Administrativo = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const opcion3Administrativo = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
//.addAnswer('Nombre Completo ',{ delay: 1200 } )        



const OP1AdministrativoPresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('❗ *Importante*❗: Asegúrate de usar tus credenciales en la plataforma correspondiente a tu modalidad.Tambien verifica que la contraseña y correo sean validos.')
    .addAnswer('- Si eres de la modalidad 🔰 *Presencial* , ingresa aquí:(https://presencial.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Virtual* , ingresa aquí:(https://virtual.uagrm.edu.bo)')
    .addAnswer('- Si eres de la modalidad 🔰 *Extracurricular* , ingresa aquí:(https://virtual.uagrm.edu.bo/extracurricular)')

const OP2AdministrativoPresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ = https://www.youtube.com/watch?v=5QPGvoDW6CM')
    .addAnswer('Este video te guiará paso a paso para *recuperar tu contraseña* .Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3AdministrativoPresencial = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
//.addAnswer('Nombre Completo ',{ delay: 1200 } )        




const OP1AdministrativoVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')
const OP2AdministrativoVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3AdministrativoVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
//.addAnswer('Nombre Completo ',{ delay: 1200 } )        



const OP1AdministrativoExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP2AdministrativoExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3AdministrativoExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
//.addAnswer('Nombre Completo ',{ delay: 1200 } )        



const OP1AdministrativoConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP2AdministrativoConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('📚 Para ayudarte mejor, puedes ver el siguiente tutorial que hemos preparado')
    .addAnswer('▶️ [Enlace al tutorial] = (https://www.youtube.com/watch?v=9GJByLGF-2Y)')
    .addAnswer('Este video te guiará paso a paso para resolver tu consulta.Si tienes más preguntas después de verlo, no dudes en escribirnos. ¡Estamos aquí para ayudarte!')

const OP3AdministrativoConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer('Espera un momento y serás atendido por soporte en línea')
    .addAnswer('(⌚Horarios de atención *08:30 - 15:30* 📱)', { delay: 1000 })
//.addAnswer('Podria facilitarme la siguiente informacion:',{ delay: 1000 })   
//.addAnswer('Nombre Completo ',{ delay: 1200 } )        


















const flowDocente = addKeyword(EVENTS.ACTION)
    .addAnswer(menuDocente,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(menuDocente); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(opcion1Docente);
                case '2':
                    return gotoFlow(opcion2Docente);
                case '3':
                    return gotoFlow(opcion3Docente);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');

                default:
                    return;
            }
        });

const flowDocentePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer(menuDocentePresencial,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowDocentePresencial); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1DocentePresencial);
                case '2':
                    return gotoFlow(OP2DocentePresencial);
                case '3':
                    return gotoFlow(OP3DocentePresencial);
                case '4':
                    return gotoFlow(OP4DocentePresencial);
                case '5':
                    return gotoFlow(OP5DocentePresencial);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');

                default:
                    return;
            }
        });
const flowDocenteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer(menuDocenteVirtual,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowDocenteVirtual); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1DocenteVirtual);
                case '2':
                    return gotoFlow(OP2DocenteVirtual);
                case '3':
                    return gotoFlow(OP3DocenteVirtual);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');

                default:
                    return;
            }
        });
const flowDocenteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer(menuDocenteExtracurricular,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowDocenteExtracurricular); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1DocenteExtracurricular);
                case '2':
                    return gotoFlow(OP2DocenteExtracurricular);
                case '3':
                    return gotoFlow(OP3DocenteExtracurricular);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');

                default:
                    return;
            }
        });

const flowDocenteConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(menuDocenteConstruccion,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(menuDocenteConstruccion); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1DocenteConstruccion);
                case '2':
                    return gotoFlow(OP2DocenteConstruccion);
                case '3':
                    return gotoFlow(OP3DocenteConstruccion);
                case '4':
                    return gotoFlow(OP4DocenteConstruccion);
                case '5':
                    return gotoFlow(OP5DocenteConstruccion);
                case '6':
                    return gotoFlow(OP6DocenteConstruccion);
                case '7':
                    return gotoFlow(OP7DocenteConstruccion);
                case '8':
                    return gotoFlow(OP8DocenteConstruccion);
                case '9':
                    return gotoFlow(OP9DocenteConstruccion);
                case '10':
                    return gotoFlow(OP10DocenteConstruccion);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');

                default:
                    return;
            }
        });


const flowEstudiante = addKeyword(EVENTS.ACTION)
    .addAnswer(menuEstudiante,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowEstudiante); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(opcion1Estudiante);
                case '2':
                    return gotoFlow(opcion2Estudiante);
                case '3':
                    return gotoFlow(opcion3Estudiante);
                case '4':
                    return gotoFlow(opcion4Estudiante);
                case '5':
                    return gotoFlow(opcion5Estudiante);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowEstudiantePresencial = addKeyword(EVENTS.ACTION)
    .addAnswer(menuEstudiantePresencial,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowEstudiantePresencial); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1EstudiantePresencial);
                case '2':
                    return gotoFlow(OP2EstudiantePresencial);
                case '3':
                    return gotoFlow(OP3EstudiantePresencial);
                case '4':
                    return gotoFlow(OP4EstudiantePresencial);
                case '5':
                    return gotoFlow(OP5EstudiantePresencial);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowEstudianteVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer(menuEstudianteVirtual,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowEstudianteVirtual); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1EstudianteVirtual);
                case '2':
                    return gotoFlow(OP2EstudianteVirtual);
                case '3':
                    return gotoFlow(OP3EstudianteVirtual);
                case '4':
                    return gotoFlow(OP4EstudianteVirtual);
                case '5':
                    return gotoFlow(OP5EstudianteVirtual);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowEstudianteExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer(menuEstudianteExtracurricular,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "4", "5", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowEstudianteExtracurricular); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1EstudianteExtracurricular);
                case '2':
                    return gotoFlow(OP2EstudianteExtracurricular);
                case '3':
                    return gotoFlow(OP3EstudianteExtracurricular);
                case '4':
                    return gotoFlow(OP4EstudianteExtracurricular);
                case '5':
                    return gotoFlow(OP5EstudianteExtracurricular);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowAdministrativoPresencial = addKeyword(EVENTS.ACTION)
    .addAnswer(menuAdminPresencial,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowAdministrativoPresencial); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1AdministrativoPresencial);
                case '2':
                    return gotoFlow(OP2AdministrativoPresencial);
                case '3':
                    return gotoFlow(OP3AdministrativoPresencial);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowAdministrativoVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer(menuAdminVirtual,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowAdministrativoVirtual); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1AdministrativoVirtual);
                case '2':
                    return gotoFlow(OP2AdministrativoVirtual);
                case '3':
                    return gotoFlow(OP3AdministrativoVirtual);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowAdministrativoExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer(menuAdminExtracurricular,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowAdministrativoExtracurricular); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1AdministrativoExtracurricular);
                case '2':
                    return gotoFlow(OP2AdministrativoExtracurricular);
                case '3':
                    return gotoFlow(OP3AdministrativoExtracurricular);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowAdministrativoConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(MenuAdminConstruccion,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowAdministrativoConstruccion); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(OP1AdministrativoConstruccion);
                case '2':
                    return gotoFlow(OP2AdministrativoConstruccion);
                case '3':
                    return gotoFlow(OP3AdministrativoConstruccion);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowAdministrativo = addKeyword(EVENTS.ACTION)
    .addAnswer(menuAdministrativo,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowAdministrativo); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(opcion1Administrativo);
                case '2':
                    return gotoFlow(opcion2Administrativo);
                case '3':
                    return gotoFlow(opcion3Administrativo);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });





const flowWelcome = addKeyword('Iniciar', 'iniciar', 'empezar')
    .addAnswer('👋 ¡Bienvenid@ al Chatbot de Soporte *DEDTE*')
    .addAnswer('Para comenzar, escribe *"menu"* y te mostraremos las opciones disponibles. Estamos aquí para ayudarte con cualquier consulta o problema.')

const menuFlow = addKeyword(['Menu']).addAnswer(
    menu,
    { capture: true },
    async (ctx, { gotoFlow, fallback, flowDynamic }) => {
        if (!["1", "2", "3", "0"].includes(ctx.body)) {
            await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
            return gotoFlow(menuFlow); // Repite el menú
        }
        switch (ctx.body) {
            case '1':
                return gotoFlow(flowEstudiante);
            case '2':
                return gotoFlow(flowDocente);
            case '3':
                return gotoFlow(flowAdministrativo);
            case '0':
                return await flowDynamic(
                    '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
            default:
                return;
        }
    });


const flowPresencial = addKeyword(EVENTS.ACTION)
    .addAnswer(menuPrinPresencial,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "3", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowPresencial); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(flowEstudiantePresencial);
                case '2':
                    return gotoFlow(flowDocentePresencial);
                case '3':
                    return gotoFlow(flowAdministrativoPresencial);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowVirtual = addKeyword(EVENTS.ACTION)
    .addAnswer(menuPrinVirtual,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowVirtual); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(flowAdministrativoVirtual);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });


const flowExtracurricular = addKeyword(EVENTS.ACTION)
    .addAnswer(menuPrinExtracurricular,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowExtracurricular); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(flowEstudianteExtracurricular);
                case '2':
                    return gotoFlow(flowDocenteExtracurricular);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const flowConstruccion = addKeyword(EVENTS.ACTION)
    .addAnswer(menuPrinConstruccion,
        { capture: true },
        async (ctx, { gotoFlow, fallback, flowDynamic }) => {
            if (!["1", "2", "0"].includes(ctx.body)) {
                await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
                return gotoFlow(flowConstruccion); // Repite el menú
            }
            switch (ctx.body) {
                case '1':
                    return gotoFlow(flowDocenteConstruccion);
                case '2':
                    return gotoFlow(flowAdministrativoConstruccion);
                case '0':
                    return await flowDynamic(
                        '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
                default:
                    return;
            }
        });

const MenuPrincipalFlow = addKeyword(['test']).addAnswer(
    menuPrincipal,
    { capture: true },
    async (ctx, { gotoFlow, fallback, flowDynamic }) => {
        if (!["1", "2", "3", "4", "0"].includes(ctx.body)) {
            await flowDynamic('Respuesta no válida. Por favor, selecciona una opción válida del menú.');
            return gotoFlow(MenuPrincipalFlow); // Repite el menú
        }
        switch (ctx.body) {
            case '1':
                return gotoFlow(flowPresencial);
            case '2':
                return gotoFlow(flowVirtual);
            case '3':
                return gotoFlow(flowExtracurricular);
            case '4':
                return gotoFlow(flowConstruccion);
            case '0':
                return await flowDynamic(
                    '¡Gracias! Para cualquier consulta adicional, puedes escribir "menu" para volver.');
            default:
                return;
        }
    });

// Configuración del bot
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([
        flowWelcome,
        menuFlow,
        flowAdministrativo,
        flowEstudiante,
        flowDocente,
        opcion1Docente,
        opcion2Docente,
        opcion3Docente,
        opcion1Estudiante,
        opcion2Estudiante,
        opcion3Estudiante,
        opcion4Estudiante,
        opcion5Estudiante,
        opcion1Administrativo,
        opcion2Administrativo,
        opcion3Administrativo,
        //Menu Principal
        MenuPrincipalFlow,
        flowPresencial,
        flowVirtual,
        flowExtracurricular,
        flowConstruccion,
        //Menu Presencial
        flowEstudiantePresencial,
        flowDocentePresencial,
        flowAdministrativoPresencial,
        //Menu Virtual
        flowEstudianteVirtual,
        flowDocenteVirtual,
        flowAdministrativoVirtual,
        //Menu Extracurricular
        flowEstudianteExtracurricular,
        flowDocenteExtracurricular,
        flowAdministrativoExtracurricular,
        //Menu Contruccion
        flowDocenteConstruccion,
        flowAdministrativoConstruccion,
        //Opciones <<Presencial>>
        //Estudiante
        OP1EstudiantePresencial,
        OP2EstudiantePresencial,
        OP3EstudiantePresencial,
        OP4EstudiantePresencial,
        OP5EstudiantePresencial,
        //Docente
        OP1DocentePresencial,
        OP2DocentePresencial,
        OP3DocentePresencial,
        //Administrativo
        OP1AdministrativoPresencial,
        OP2AdministrativoPresencial,
        OP3AdministrativoPresencial,
        //Opciones <<Virtual>>
        //Estudiante
        OP1EstudianteVirtual,
        OP2EstudianteVirtual,
        OP3EstudianteVirtual,
        OP4EstudianteVirtual,
        OP5EstudianteVirtual,
        //Docente
        OP1DocenteVirtual,
        OP2DocenteVirtual,
        OP3DocenteVirtual,
        //Administrativo
        OP1AdministrativoVirtual,
        OP2AdministrativoVirtual,
        OP3AdministrativoVirtual,
        //Opciones <<Extracurricular>>
        //Estudiante
        OP1EstudianteExtracurricular,
        OP2EstudianteExtracurricular,
        OP3EstudianteExtracurricular,
        OP4EstudianteExtracurricular,
        OP5EstudianteExtracurricular,
        //Docente
        OP1DocenteExtracurricular,
        OP2DocenteExtracurricular,
        OP3DocenteExtracurricular,
        //Administrativo
        OP1AdministrativoExtracurricular,
        OP2AdministrativoExtracurricular,
        OP3AdministrativoExtracurricular,
        //Opciones <<Construccion>>
        //Docente
        OP1DocenteConstruccion,
        OP2DocenteConstruccion,
        OP3DocenteConstruccion,
        //Administrativo
        OP1AdministrativoConstruccion,
        OP2AdministrativoConstruccion,
        OP3AdministrativoConstruccion,

    ]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main();
