/**
 * Ajutoare pentru a atașa butonul „Generează cu AI” lângă un câmp de text/textarea,
 * respectiv „Generează imagine cu AI” lângă un câmp de upload — fără să duplici
 * configurația `admin.components.afterInput` de fiecare dată.
 */
export function AIGenerateTextField(fieldLabel: string) {
  return {
    admin: {
      components: {
        afterInput: [
          {
            path: "/components/admin/GenerateTextButton#GenerateTextButton",
            clientProps: { fieldLabel },
          },
        ],
      },
    },
  };
}

export function AIGenerateImageField(promptHint: string) {
  return {
    admin: {
      components: {
        afterInput: [
          {
            path: "/components/admin/GenerateImageButton#GenerateImageButton",
            clientProps: { promptHint },
          },
        ],
      },
    },
  };
}
