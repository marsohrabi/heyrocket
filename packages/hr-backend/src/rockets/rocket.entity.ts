import {
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";

@Table({
    tableName: "rockets",
    paranoid: true,
    underscored: true
})
export class RocketEntity extends Model<RocketEntity> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    })
    readonly id: number;

    @Column({ type: DataType.STRING(100) })
    name: string;

    @Column({ type: DataType.INTEGER })
    price: number;


}
