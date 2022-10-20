import React from "react";
import { Form, Container, Col, Row, InputGroup } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";
import { ErrorMessage } from "@hookform/error-message";

function ThrowingSection() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  //TODO: Implement Image upload a bit later (Was a bit deeper of a rabbit hole than I thought)
  // const [images, setImages] = useState<File[]>();
  // const [imageURLs, setImageURLs] = useState<string[]>([]);

  // useEffect(() => {
  //   if (!images || images.length < 1) return;
  //   const newImageURLs: string[] = [];
  //   images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
  //   setImageURLs(newImageURLs);
  // }, [images]);

  // const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setImages(Array.from(e.target.files));
  //   }
  // };

  return (
    <div className="form-section">
      <h3 className="section-header">Throwing</h3>
      <Container>
        <Row>
          <Col>
            <Form.Group className="form-group">
              <Form.Label id="throw-date-label">Date</Form.Label>
              <Controller
                name="throw_date"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="date"
                    aria-labelledby="throw-date-label"
                    value={dateStringToComponentValue(field.value)}
                    onChange={async (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      field.onChange(e);
                      await trigger(["trim_date", "throw_date", "result_date"]);
                    }}
                  />
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="throw_date"
                as="p"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Clay Weight</Form.Label>
              <Controller
                name="clay_weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="clay-weight"
                    />
                    <InputGroup.Text>Oz.</InputGroup.Text>
                  </InputGroup>
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="clay_weight"
                as="p"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Thrown Height</Form.Label>
              <Controller
                name="throw_height"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="throw-height"
                    />
                    <InputGroup.Text>In.</InputGroup.Text>
                  </InputGroup>
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="throw_height"
                as="p"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Thrown Width</Form.Label>
              <Controller
                name="throw_width"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="throw-width"
                    />
                    <InputGroup.Text>In.</InputGroup.Text>
                  </InputGroup>
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="throw_width"
                as="p"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="form-group">
          <Form.Label>Throwing Notes</Form.Label>
          <Controller
            name="throw_notes"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control {...field} as="textarea" aria-label="throw-notes" />
            )}
          />
          <ErrorMessage
            className="error-text"
            errors={errors}
            name="throw_notes"
            as="p"
          />
        </Form.Group>
        {/* <Form.Group className="form-group">
            <Form.Label>Throwing Pictures</Form.Label>
            <div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={onImageChange}
              />
              {imageURLs.map((imageSrc, k) => (
                <img key={k} src={imageSrc} width="100" height="150" />
              ))}
            </div>
          </Form.Group> */}
      </Container>
    </div>
  );
}

export default ThrowingSection;
