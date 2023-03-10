import { Form, Input, Button, message } from 'antd';
import { MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import axios from 'axios';


const Contact = () => {
    const [form] = Form.useForm();
  
    const handleSubmit = async (values) => {
      try {
        await axios.post('', values); // Envoyer les données du formulaire au backend
        message.success('Votre message a été envoyé avec succès!');
        form.resetFields(); 
      } catch (error) {
        message.error('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
      }
    };
  
    return (
      <Form
        form={form}
        name="contact"
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          label="Nom"
          name="name"
          rules={[{ required: true, message: 'Veuillez saisir votre nom!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Votre nom" />
        </Form.Item>
  
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Veuillez saisir votre email!' },
            { type: 'email', message: 'Veuillez saisir un email valide!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Votre email" />
        </Form.Item>
  
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Veuillez saisir votre message!' }]}
        >
          <Input.TextArea rows={4} prefix={<MessageOutlined />} placeholder="Votre message" />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default Contact;