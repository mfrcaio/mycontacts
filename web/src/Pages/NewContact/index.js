import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title='Novo Contato' />
      <Input type='text' placeholder='Nome'/>
      <Select>
        <option value={1}>Teste 1</option>
        <option value={2}>Teste 2</option>
        <option value={3}>Teste 3</option>
      </Select>
      <Button type='button'>Salvar alterações</Button>
      <Button type='button' disabled>Salvar alterações disabled</Button>
    </>
  )
}
