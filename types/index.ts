// types/index.ts
export interface PersonalInformation {
  name: string;
  role: string;
  email: string;
  phone: string;
  birthday: string;
  location: string;
  social_Networks: any[]; // Mantido o nome original da variável
} 
export interface Stack {
  name: string;
  img: string;
  source: string;
}

export interface RoleDetail {
  id: string;
  imagen: string;
  role: string;
  content: string;
  dev_role: Stack[];
}

export interface Testimony {
  Company: string;
  Imagen: string;
  Name: string;
  Testimonial: string;
  Site: string;
}

export interface Education {
  School: string;
  Year: string;
  description: string;
}

export interface Company {
  Name: string;
  Image: string;

}
export interface Custumers {
  image: string;
  companyName: string;
}
export interface DevRoleProps {
  role: RoleDetail; // Isso agrupa os dados do RoleDetail sob a variável 'role' usada no seu template
}
// types/index.ts

export interface ContactForm {
  fullName: string;
  email: string;
  message: string;
}