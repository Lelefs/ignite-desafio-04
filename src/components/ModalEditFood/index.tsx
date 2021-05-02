import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type ModalEditFoodData = {
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodEditFormData) => void;
  isOpen: boolean;
  editingFood: FoodEditFormData;
}

type FoodEditFormData = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
}

const ModalEditFood = ({ setIsOpen, handleUpdateFood, isOpen, editingFood }: ModalEditFoodData) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FoodEditFormData) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
