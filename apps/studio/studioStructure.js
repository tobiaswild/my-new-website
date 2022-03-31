import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .child(S.document().schemaType("homepage").documentId("homepage2")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["otherSkill" | "currentSkill"].includes(listItem.getId())
      ),
    ])
